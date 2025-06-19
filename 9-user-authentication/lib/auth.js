import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";
import { cookies } from "next/headers";

// ⚠️ This project uses Lucia Auth v3 which is now deprecated.
// See the official announcement : https://github.com/lucia-auth/lucia/discussions/1714.

const adapter = new BetterSqlite3Adapter(db, {
    user: "users", // Users table name (in training.db)
    session: "sessions" // Sessions table name (in training.db)
});

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production"
        }
    }
});

async function setSessionCookie(sessionCookie) {
    // As of Next.js 15, cookies() function must be awaited : https://nextjs.org/docs/app/api-reference/functions/cookies
    (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}

export async function createAuthSession(userId) {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    await setSessionCookie(sessionCookie);
}

export async function verifyAuth() {
    const sessionCookie = (await cookies()).get(lucia.sessionCookieName);
    if (!sessionCookie) {
        return { user: null, session: null };
    }

    const sessionId = sessionCookie.value;
    if (!sessionId) {
        return { user: null, session: null };
    }

    const result = await lucia.validateSession(sessionId);
    try {
        if (result.session?.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            await setSessionCookie(sessionCookie);
        }
        if (!result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            await setSessionCookie(sessionCookie); // This will basically clear the session cookie
        }
    } catch { }

    return result;
}

export async function destroySession() {
    const { session } = await verifyAuth();

    if (!session) {
        return { error: 'Unauthorized!' };
    }

    await lucia.invalidateSession(session.id); // Delete the session from the database

    const sessionCookie = lucia.createBlankSessionCookie();
    await setSessionCookie(sessionCookie); // Then clear the session cookie
}