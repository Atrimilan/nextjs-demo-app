import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import sql from 'better-sqlite3';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

/**
 * No cache
 */
// function getMessages() {
//   console.log('Fetching messages from db');
//   return db.prepare('SELECT * FROM messages').all();
// }

/**
 * Method 6 : React "cache()" - https://react.dev/reference/react/cache
 * - On reload, even if getMessages is called multiple times, the query is executed only once.
 * - This cannot be configured.
 */
// export const getMessages = cache(
//   function getMessages() {
//     console.log('Fetching messages from db');
//     return db.prepare('SELECT * FROM messages').all();
//   }
// );

/**
 * Method 7 : Next.js "unstable_cache()" - https://nextjs.org/docs/app/api-reference/functions/unstable_cache
 * - On reload, even if getMessages is called multiple times, the query is executed only once.
 * - The response is asynchronous, so getMessages must be awaited.
 * 
 * Note that this will be replaced by "use cache" in a future version of Next.js.
 * See : https://nextjs.org/docs/app/api-reference/directives/use-cache
 */
export const getMessages = unstable_cache(
  function getMessages() {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all();
  },
  ['messages'], // Extra array that internally adds identification to the cache (optionnal)
  {
    // revalidate: 5, // Time in seconds
    tags: ['msg'] // Tags which should be specified when calling "revalidateTag('<tag>')"
  }
);