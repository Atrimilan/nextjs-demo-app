import { getMessages } from "@/lib/messages";

export default async function MessagesLayout({ children }) {
  /**
  * As Next.js can reach out database without using an external API, we don't need to use this "fetch" function.
  * This can be uncommented if you want to try out caching methods that need it, but you'll have to start the Express.js backend.
  */
  // const response = await fetch('http://localhost:8080/messages', {
  //   headers: { 'X-ID': 'message_layout' },
  //   /* Add caching configuration here */
  // });
  // const messages = await response.json();

  /**
   * Get messages from the database without any external API
   */
  const messages = await getMessages();

  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
