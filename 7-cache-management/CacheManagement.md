# Cache management

When following the [Udemy course](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (Section 7), Next.js caching is explained with different approaches.

**⚠️ Note that this documentation is valid for a Next.js 14 project, but there are major changes in Next.js 15 to manage caching.**

## Available caching approaches

There are 7 caching approaches available, **they are all explained with examples in the comments of the following codes :**

* [MessagesPage](7-cache-management/app/messages/page.js) component :

  1. The `revalidate` constant, which expects the cache validity time in seconds.<br/>*There's also an equivalent configuration that can be specified in `fetch()` functions.*
  2. The `dynamic` constant, which can be either `'auto'`, `'force-dynamic'`, `'error'` or `'force-static'`.<br/>*There's also an equivalent configuration that can be specified in `fetch()` functions.*
  3. The `unstable_noStore()` method.<br/>*This approach is deprecated and replaced by `connection()` in Next.js 15.*

* [NewMessagePage](7-cache-management/app/messages/new/page.js) component :

  4. The `revalidatePath('<path>', '<page|layout>')` method.
  5. The `revalidateTag('<tag>')` method, which tag can be used in `fetch()` and `unstable_cache()` functions.

* [messages.js](7-cache-management/lib/messages.js) service :

  6. The default React `cache()` method, which cannot be configured.
  7. The Next.js `unstable_cache()` method, which is asynchronous and can be configured. <br/>*This approach is unstable and will be replaced by `"use cache";` in a future version of Next.js.*

✅ You can uncomment and edit part of these codes to try out the different approaches, but note that **the current project cache configuration works as is.**

## Trying out the other methods

If you want to try out caching methods that need to add a special configuration to `fetch()` functions, you'll need to start the Express.js backend server in a separate terminal, here's how you can do it :
* `cd backend/`
* `npm install`
* `npm start`

Then, you can uncomment part of the code that contains `fetch()` in [MessagesPage](7-cache-management/app/messages/page.js) and/or [MessagesLayout](7-cache-management/app/messages/layout.js) and change the configuration according to the method you want to try out.