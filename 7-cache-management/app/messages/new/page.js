import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';
import { revalidatePath, revalidateTag } from 'next/cache';

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);

    /**
     * Method 4 : "revalidatePath()" - https://nextjs.org/docs/app/api-reference/functions/revalidatePath
     * - Revalidates cache on-demand for a given path
     */
    // revalidatePath('/messages', 'page'); // Revalidates cache of the messages page only
    // revalidatePath('/', 'layout'); // Revalidates cache of the root layout and all the nested pages (then, this is the whole app)

    /**
     * Method 5 : "revalidateTag()" - https://nextjs.org/docs/app/api-reference/functions/revalidateTag
     * - Revalidates cache on-demand for a given cache tag
     * - As Next.js overrides the "fetch" function, the tag can be specified as follows :
     *   fetch(url, { next: { tags: [...] } });
     * - The tag can also be specified in "unstable_cache()"
     */
    revalidateTag('msg'); // Revalidates cache data that has the 'msg' tag
    
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
