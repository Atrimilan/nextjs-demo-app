# Next.js - Demo apps

## Description
These apps are based on the following Udemy course : [Next.js 15 & React - The Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (from Section 3).

## Running apps

<!-- 3-foodies-starting-project -->

<details>
<summary>3-foodies-starting-project</summary>
<dl><dd><dl><dd>

### I. Note
**Submitting images won't work in Production mode**, as we're storing images dynamically in the [public folder](./public/images), and Next.js ignores this folder when building the application. Then, this feature only works in Development mode.

**A good practice would be to store images in a Cloud service such as [AWS S3](https://aws.amazon.com/fr/s3/).**

### II. Initialize project
#### A. Install dependencies :
* `npm install`
* `node initdb.js`

#### B. Run Next.js app :
##### 1. DEV mode :
* `npm run dev`

##### 2. PROD mode :
* `npm run build`
* `npm start`

</dl></dd></dl></dd>
</details>

<!-- 4-routing-and-rendering -->

<details>
<summary>4-routing-and-rendering</summary>
<dl><dd><dl><dd>

### I. Note
This project also contains an example of [route.js](4-routing-and-rendering/app/(content)/api/route.js) and [middleware.js](4-routing-and-rendering/middleware.js) for demo, but they are not used.

### II. Initialize project
#### A. Install dependencies :
* `npm install`

#### B. Run Next.js app :
* `npm run dev`

</dl></dd></dl></dd>
</details>

<!-- 5-data-fetching -->

<details>
<summary>5-data-fetching</summary>
<dl><dd><dl><dd>

### I. Note
**Express.js backend does not need to run.** This backend server is temporarily useful for following the [Udemy course](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (Section 5), but then everything is modified to use the database with Next.js data fetching instead of using this external Express.js API. **More info here : [DataFetching.md](5-data-fetching/DataFetching.md).**

**data.db** has been moved manually, but was originally generated when the Express.js server was first started.

### II. Initialize project
#### A. Install dependencies :
* `npm install`

#### B. Run Next.js app :
* `npm run dev`

</dl></dd></dl></dd>
</details>

<!-- 6-mutating-data -->

<details>
<summary>6-mutating-data</summary>
<dl><dd><dl><dd>

### I. Note
**posts.db** will be automatically created when starting the application.

### II. Initialize project
#### A. Install dependencies :
* `npm install`

#### B. Add your Cloudinary credentials :
* Create a **.env.local** file in [the root folder of the project](6-mutating-data) with the following fields :
  ```env
  CLOUDINARY_CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=
  ```
* Create a free https://cloudinary.com/ account.
* In your home dashboard, find your API key or create a new one.
* Then fill in all **.env.local** fields with your `Cloud name`, `API Key` and `API Secret`.

#### C. Run Next.js app :
##### 1. DEV mode :
* `npm run dev`

##### 2. PROD mode :
* `npm run build`
* `npm start`

</dl></dd></dl></dd>
</details>

<!-- 7-cache-management -->

<details>
<summary>7-cache-management</summary>
<dl><dd><dl><dd>

### I. Note

This project contains examples to manage cache to improve performance, or to force cache revalidation when required without reloading the whole page.

The current configuration works as is, but if you want to try out other caching management approaches, **take a look at [CacheManagement.md](7-cache-management/CacheManagement.md)** (some details are available in the code itself).

> ⚠️ Note that this is a Next.js 14 project, and there are major caching changes in Next.js 15.

### II. Initialize project

#### A. Install dependencies :
* `npm install`

#### B. Run Next.js app :
* `npm run dev`

</dl></dd></dl></dd>
</details>

<!-- 8-app-optimization -->

<details>
<summary>8-app-optimization</summary>
<dl><dd><dl><dd>

### I. Note

This project contains examples of **image optimization**, which are important for compliance with [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals), especially to prevent layout shifting and improve loading :
* Optimization of images from the assets in [header.js](8-app-optimization/components/header.js).
* Optimization of fetched images in [posts.js](8-app-optimization/components/posts.js). This one required special configuration in [next.config.mjs](8-app-optimization/next.config.mjs) to allow fetching images from another domain.

It also contains examples of **static and dynamic metadata**, which are very important for SEO :
* Static metadata example in [home page](8-app-optimization/app/page.js).
* Static metadata example in [main layout](8-app-optimization/app/layout.js).
* Dynamic metadata example in [feed page](8-app-optimization/app/feed/page.js).

> ⚠️ Note that this project doesn't contain any OpenGraph metadata example, but it's possible to define some : https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph

### II. Initialize project

#### A. Install dependencies :
* `npm install`

#### B. Add your Cloudinary credentials :
* Create a **.env.local** file in [the root folder of the project](8-app-optimization) with the following fields :
  ```env
  CLOUDINARY_CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=
  ```
* Create a free https://cloudinary.com/ account.
* In your home dashboard, find your API key or create a new one.
* Then fill in all **.env.local** fields with your `Cloud name`, `API Key` and `API Secret`.

#### C. Run Next.js app :
* `npm run dev`

</dl></dd></dl></dd>
</details>
