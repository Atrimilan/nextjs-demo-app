"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

async function signup(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    let errors = {};

    if (!email.includes("@")) {
        errors.email = "Please enter a valid email address.";
    }

    if (password.trim().length < 8) {
        errors.password = "Password must be at least 8 characters long.";
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    const hashedPassword = hashUserPassword(password); // Hash uses the Scrypt algorithm : https://en.wikipedia.org/wiki/Scrypt
    try {
        const userId = createUser(email, hashedPassword);

        // Successfully signed up
        await createAuthSession(userId);
        redirect('/training');

    } catch (error) {
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return {
                errors: {
                    email: "An account already exists for the given email." // Usually, you would use a more cryptic error message
                }
            };
        }
        throw error;
    }
}

async function login(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const existingUser = getUserByEmail(email);
    if (!existingUser) {
        return {
            errors: {
                auth: "Could not authenticate user, please check your credentials."
            }
        };
    }

    const isValidPassword = verifyPassword(existingUser.password, password);
    if (!isValidPassword) {
        return {
            errors: {
                auth: "Could not authenticate user, please check your credentials."
            }
        };
    }

    // Successfully logged in
    await createAuthSession(existingUser.id);
    redirect('/training');
}

export async function auth(mode, prevState, formData) {
    if (mode === "login") {
        return login(prevState, formData);
    }
    return signup(prevState, formData);
}

export async function logout() {
    await destroySession();
    redirect('/');
}