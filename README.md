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