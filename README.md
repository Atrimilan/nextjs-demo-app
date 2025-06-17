# Next.js - Demo apps

## Description
These apps are based on the following Udemy course : [Next.js 15 & React - The Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (from Section 3).

## Running apps

<!-- 3-foodies-starting-project -->

<details>
<summary>3-foodies-starting-project</summary>
<dl><dd><dl><dd>

### Initialize project :
* `npm install`
* `node initdb.js`

### Run Next.js app in DEV mode :
* `npm run dev`

### Run Next.js app in PROD mode :
* `npm run build`
* `npm start`

> **Submitting images won't work in Production mode**, as we're storing images dynamically in the [public folder](./public/images), and Next.js ignores this folder when building the application. Then, this feature only works in Development mode.
> 
> **A good practice would be to store images in a Cloud service such as [AWS S3](https://aws.amazon.com/fr/s3/).**
</dl></dd></dl></dd>
</details>

<!-- 4-routing-and-rendering -->

<details>
<summary>4-routing-and-rendering</summary>
<dl><dd><dl><dd>

### Initialize project :
* `npm install`

### Run Next.js app :
* `npm run dev`

> This project also contains an example of [route.js](4-routing-and-rendering/app/(content)/api/route.js) and [middleware.js](4-routing-and-rendering/middleware.js) for demo, but they are not used.

</dl></dd></dl></dd>
</details>

<!-- 5-data-fetching -->

<details>
<summary>5-data-fetching</summary>
<dl><dd><dl><dd>

### Initialize project :
* `npm install`

### Run Next.js app :
* `npm run dev`

> Note that **data.db** has been moved manually, but was originally generated when the Express.js server was first started.

> **Express.js backend does not need to run.** This backend server is temporarily useful for following the [Udemy course](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (Section 5), but then everything is modified to use the database with Next.js data fetching instead of using this external Express.js API.
> 
> **More info here : [DataFetching.md](5-data-fetching/DataFetching.md)**

</dl></dd></dl></dd>
</details>

<!-- 6-mutating-data -->

<details>
<summary>6-mutating-data</summary>
<dl><dd><dl><dd>

### Initialize project :
* `npm install`

### Add your Cloudinary credentials :
* Create a **.env.local** file in [the root folder](6-mutating-data) with the following fields:
  ```env
  CLOUDINARY_CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=
  ```
* Create a free https://cloudinary.com/ account.
* In your home dashboard, find your API key or create a new one.
* Then fill in all **.env.local** fields with your `Cloud name`, `API Key` and `API Secret` .

### Run Next.js app in DEV mode :
* `npm run dev`

### Run Next.js app in PROD mode :
* `npm run build`
* `npm start`

> Note that **posts.db** will be automatically created when starting the application.

</dl></dd></dl></dd>
</details>

<!-- 7-cache-management -->

<details>
<summary>7-cache-management</summary>
<dl><dd><dl><dd>

### Initialize project :
* `npm install`

### Run Next.js app :
* `npm run dev`

> ⚠️ Note that this is a Next.js 14 project, and there are major caching changes in Next.js 15.

> There are 7 caching methods available, **they are all explained with examples in the comments of the following :**
> 
> * [MessagesPage](7-cache-management/app/messages/page.js) component :
> 
>   1. The `revalidate` constant, which expects the cache validity time in seconds.<br/>*There's also an equivalent configuration that can be specified in `fetch()` functions.*
>   2. The `dynamic` constant, which can be either `'auto'`, `'force-dynamic'`, `'error'` or `'force-static'`.<br/>*There's also an equivalent configuration that can be specified in `fetch()` functions.*
>   3. The `unstable_noStore()` method.<br/>*This approach is deprecated and replaced by `connection()` in Next.js 15.*
> 
> * [NewMessagePage](7-cache-management/app/messages/new/page.js) component :
> 
>   4. The `revalidatePath('<path>', '<page|layout>')` method.
>   5. The `revalidateTag('<tag>')` method, which tag can be used in `fetch()` and `unstable_cache()` functions.
> 
> * [messages.js](7-cache-management/lib/messages.js) service :
> 
>   6. The default React `cache()` method, which cannot be configured.
>   7. The Next.js `unstable_cache()` method, which is asynchronous and can be configured. <br/>*This approach is unstable and will be replaced by `"use cache";` in a future version of Next.js.*
>
> **The current project cache configuration works, you can take a look at these different files.**
>
> If you want to try out caching methods that need `fetch()` with a special configuration, you'll need to start the Express.js backend server in a separate terminal, here's how you can do it :
> * `cd backend/`
> * `npm install`
> * `npm start`
> 
> Then, you can uncomment the code that uses `fetch()` in [MessagesPage](7-cache-management/app/messages/page.js) and/or [MessagesLayout](7-cache-management/app/messages/layout.js) and change the configuration according to the method you want to try out.

</dl></dd></dl></dd>
</details>