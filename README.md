# NextJS - Demo app

> This app is based on the following Udemy course : [Next.js 15 & React - The Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (# Section 3).

## Running the app :

Initialize project :
* `npm install`
* `node initdb.js`

Run in DEV mode :
* `npm run dev`

Run in PROD mode :
* `npm run build`
* `npm start`


## Important note :

Note that publishing images won't work in Production mode, as we're storing images dynamically in the [public folder](./public/images), and NextJS ignores this folder when building the application. Then, this feature only works in Development mode.

**A good practice would be to store images in a Cloud service such as [AWS S3](https://aws.amazon.com/fr/s3/).**