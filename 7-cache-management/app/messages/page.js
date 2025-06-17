import { unstable_noStore } from 'next/cache';
import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// Main documentation : https://nextjs.org/docs/14/app/building-your-application/data-fetching/fetching-caching-and-revalidating

/**
 * Method 1 : "revalidate" - https://nextjs.org/docs/14/app/api-reference/file-conventions/route-segment-config#revalidate
 * 
 * - This is used to keep a page (or layout) in cache for X seconds, then force the cache revalidation.
 * - As Next.js overrides the "fetch" function, this is equivalent to :
 *   fetch('http://localhost:8080/messages', { next: { revalidate: 5 } });
 * - This is also equivalent to the "revalidate" option of "unstable_cache()".
 */
// export const revalidate = 5; // 5 secondes

/**
 * Method 2 : "dynamic" - https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 * 
 * - For example, 'force-dynamic' tells Next.js to always refetch requests in this file.
 * - This is equivalent to :
 *   fetch('http://localhost:8080/messages', { cache: 'no-store' });
 */
// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {

  /**
   * Method 3 : "unstable_noStore()" - https://nextjs.org/docs/14/app/api-reference/functions/unstable_noStore
   * 
   * - This is deprecated in favor of "connection" - https://nextjs.org/docs/app/api-reference/functions/connection
   * - This disables caching for one specific component, and not file-wide.
   */
  // unstable_noStore();


  /**
   * As Next.js can reach out database without using an external API, we don't need to use this "fetch" function.
   * This can be uncommented if you want to try out caching methods that need it, but you'll have to start the Express.js backend.
   */
  // const response = await fetch('http://localhost:8080/messages', {
  //   headers: { 'X-ID': 'message_page' },
  //   /* Add caching configuration here */
  // });
  // const messages = await response.json();

  /**
   * Get messages from the database without any external API
   */
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
