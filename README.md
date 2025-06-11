# NextJS - Demo apps

## Description 
These apps are based on the following Udemy course : [Next.js 15 & React - The Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (from Section 3).

## Running apps

<details>
<summary>3-foodies-starting-project</summary>
<dl><dd><dl><dd>

### Initialize project :
* `npm install`
* `node initdb.js`

### Run in DEV mode :
* `npm run dev`

### Run in PROD mode :
  * `npm run build`
  * `npm start`

### ⚠️ Important note :
Note that publishing images won't work in Production mode, as we're storing images dynamically in the [public folder](./public/images), and NextJS ignores this folder when building the application. Then, this feature only works in Development mode.

**A good practice would be to store images in a Cloud service such as [AWS S3](https://aws.amazon.com/fr/s3/).**
</dl></dd></dl></dd>
</details>

<details>
<summary>4-deep-dive-routing-and-rendering</summary>
<dl><dd><dl><dd>

### Initialize project :
* `npm install`

### Run in DEV mode :
* `npm run dev`

### Run in PROD mode :
  * `npm run build`
  * `npm start`
</dl></dd></dl></dd>
</details>