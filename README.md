# Next.js - Demo apps

## Description
These apps are based on the following Udemy course : [Next.js 15 & React - The Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (from Section 3).

## Running apps

<!-- 3-foodies-starting-project -->

<details>
<summary>3-foodies-starting-project</summary>
<dl><dd><dl><dd>

<br/>
<img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 14" title="Next.js 14">

### I. Note
**Submitting images won't work in Production mode**, as we're storing images dynamically in the [public folder](./public/images), and Next.js ignores this folder when building the application. Then, this feature only works in Development mode.

> 💡 A good practice would be to store images in a cloud service such as [AWS S3](https://aws.amazon.com/fr/s3/).

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

<br/>
<img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 14" title="Next.js 14">

### I. Note

This project uses the App Routers that was introduced in Next.js 13, instead of the classic Pages Router.

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

<br/>
<img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 14" title="Next.js 14">

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

<br/>
<img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 14" title="Next.js 14">

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
* Create a free [cloudinary.com](https://cloudinary.com/) account.
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

<br/>
<img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 14" title="Next.js 14">

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

<br/>
<img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 14" title="Next.js 14">

### I. Note
This project contains examples of **image optimization**, which are important for compliance with [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals), especially to prevent layout shifting and improve loading :
* Optimization of images from the assets in [header.js](8-app-optimization/components/header.js).
* Optimization of fetched images in [posts.js](8-app-optimization/components/posts.js). This one required special configuration in [next.config.mjs](8-app-optimization/next.config.mjs) to allow fetching images from another domain.

It also contains examples of **static and dynamic metadata**, which are very important for SEO :
* Static metadata example in [home page](8-app-optimization/app/page.js).
* Static metadata example in [main layout](8-app-optimization/app/layout.js).
* Dynamic metadata example in [feed page](8-app-optimization/app/feed/page.js).

> ℹ️ Note that this project doesn't contain any OpenGraph metadata example, but it's possible to define some : https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph

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
* Create a free [cloudinary.com](https://cloudinary.com/) account.
* In your home dashboard, find your API key or create a new one.
* Then fill in all **.env.local** fields with your `Cloud name`, `API Key` and `API Secret`.

#### C. Run Next.js app :
* `npm run dev`

</dl></dd></dl></dd>
</details>

<!-- 9-user-authentication -->

<details>
<summary>9-user-authentication</summary>
<dl><dd><dl><dd>

<br/>
<img src="https://img.shields.io/badge/Next.js-15-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 15" title="Next.js 15">

### I. Note
This project has been updated to Next.js 15, to fix a small problem when first loading the application at http://localhost:3000/training instead of http://localhost:3000/, the global CSS was not loading for some reason. This update was done following the official recommendations : [**How to upgrade to version 15**](https://nextjs.org/docs/app/guides/upgrading/version-15).

The update involved running a codemod to update to the latest version of Next.js (which was 15.3.4) and manually changing a few lines of code that were causing errors.

> Last commit before updating to Next.js 15 : `a892f1a0d3962f6b7fcfe070dbc4c910678282e9`.

Main files in this project :
* [**Home page form**](9-user-authentication/components/auth-form.js) to sign up or log in.
* [**Authentication server actions**](9-user-authentication/actions/auth-actions.js) listening to form submissions.
* [**Authentication methods**](9-user-authentication/lib/auth.js) that handle session cookies using Lucia Auth, which is a third-party authentication library (it actually calls the database).
* [**Logout button**](9-user-authentication/app/(auth)/layout.js) available in the layout of every page that requires authentication.

> ⚠️ This project uses Lucia Auth v3 which is now deprecated, you can see the official announcement here : https://github.com/lucia-auth/lucia/discussions/1714.
> 
> In a real project, we could use a more recent version of [Lucia Auth](https://lucia-auth.com/sessions/overview), or an alternative such as [Stack Auth](https://stack-auth.com/) or [Auth.js](https://authjs.dev/) (formerly "NextAuth.js"), which are all compatible with Next.js.

### II. Initialize project
#### A. Install dependencies :
* `npm install`

#### B. Run Next.js app :
* `npm run dev`

</dl></dd></dl></dd>
</details>

<!-- 12-pages-router-project -->

<details>
<summary>12-pages-router-project</summary>
<dl><dd><dl><dd>

<br/>
<img src="https://img.shields.io/badge/Next.js-13-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 13" title="Next.js 13">

### I. Note
This demo project uses Pages Router, unlike previous projects which use App Router.

> ⚠️ Note that this is a Next.js 13 project, _which is the version where App Router was introduced_, there are a few differences with previous projects that use Next.js 14.

### II. Initialize project
#### A. Install dependencies :
* `npm install`

#### B. Run Next.js app :
* `npm run dev`

</dl></dd></dl></dd>
</details>

<!-- 20-deploy-app-to-vercel -->

<details>
<summary>20-deploy-app-to-vercel</summary>
<dl><dd><dl><dd>

<br/>
<img src="https://img.shields.io/badge/Next.js-13-black?style=flat&logo=nextdotjs&labelColor=black&color=grey" height="25" alt="Next.js 13" title="Next.js 13">
&nbsp;<img src="https://img.shields.io/badge/Vercel-black?style=flat&logo=vercel" height="25" alt="Vercel" title="Vercel">
&nbsp;<img src="https://img.shields.io/badge/MongoDB-white?style=flat&logo=mongodb" height="25" alt="MongoDB" title="MongoDB">

### I. Note
The purpose of this project is primarily for deployment on Vercel. However, it also includes configurations to connect to a local MongoDB Docker container and to a MongoDB Atlas cloud cluster.

In this section, you will need to define some environment variables. For more more information about them, refer to the official documentation : [**How to use environment variables in Next.js**](https://nextjs.org/docs/pages/guides/environment-variables).

### II. Initialize local environment
#### A. Run a local MongoDB Docker container :
* `docker run --name nextjs_mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo`
  > You can replace the username and password with anything you want for your local environment.

#### B. Add your MongoDB container credentials to your environment variables :
* Rename [`.env.local.example`](20-deploy-app-to-vercel/.env.local.example) to `.env.local`
* Replace `<USERNAME>` and `<PASSWORD>` with your credentials (or use `admin` for both if you haven't changed them in the Docker command)

⚠️ Note that the `.env.local` file is ignored by Git in [.gitignore](20-deploy-app-to-vercel/.gitignore). However, it shouldn't be overly sensitive as your container is mostly for local testing without production data.

### III. Initialize cloud environment
#### A. Create a MongoDB Atlas cluster :
* Register at [mongodb.com](https://mongodb.com/) and create a free Atlas cluster.

#### B. Add your MongoDB Atlas credentials to your environment variables :
* Rename [`.env.production.local.example`](20-deploy-app-to-vercel/.env.production.local.example) to `.env.production.local`
* Replace `<USERNAME>`, `<PASSWORD>`, `<CLUSTER>` and `<DATABASE>` with your credentials
  > You can find your connection string in the Atlas dashboard. There might be a "Connect" button on the overview page where you can retrieve these credentials (except the password, which you should have defined earlier).

⚠️ Note that the `.env.production.local` file is ignored by Git in [.gitignore](20-deploy-app-to-vercel/.gitignore), as it is used to access production data within your local environment. Using an `.env.production` file is possible but is considered a poor security practice since pushing it to a repository could compromise your credentials.

⚠️ Also note that Vercel deploys from a Git repository and allows you to manually define your production credentials on their interface, avoiding the need to push them into your repository.

### IV. Initialize project locally
#### A. Install dependencies 
* `npm install`

#### B. Run Next.js app :
##### 1. DEV mode :
* `npm run dev`

To test your MongoDB connections, navigate to http://localhost:3000/contact and try to send a message. If everything is configured correctly, the message should be saved to a new `/my-site` database in your local MongoDB Docker container.

##### 2. PROD mode :
* `npm run build`
* `npm start`

To test your MongoDB connections, navigate to http://localhost:3000/contact and try to send a message. If everything is configured correctly, the message should be saved to a new `/my-site` database in your MongoDB Atlas cloud cluster.


### V. Deploy on Vercel

Deployment to Vercel is explained in this file : [**DeployOnVercel.md**](20-deploy-app-to-vercel/DeployOnVercel.md).

</dl></dd></dl></dd>
</details>