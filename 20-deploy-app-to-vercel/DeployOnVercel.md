# Deploy on Vercel

## I. Optimize your code

First, you need to optimize your code as much as possible, particularly when importing third-party libraries.

You can find an example in [post-content.js](components/posts/post-detail/post-content.js), where imports have been optimized to enhance performance and script size after building the applicaton.

## II. Build options

There are two build options available :
* `next build` for standard build. It produces an optimized application for production and requires a NodeJS server to work.
* `next export` for full static build. It generates a 100% static application that does not require any NodeJS server. Note that it will not work if there are any routes, server-side pages, or cache revalidation involved.

In our case, Vercel will use `next build` by default.

## III. Add your project on Vercel

Vercel can fetch your code from a Git repository. You can push your code to platforms like GitHub, GitLab, or BitBucket.

* Sign in to [vercel.com](https://vercel.com/) and link the account where your code is hosted.
* Select the repository that contains your code. If the root path is not the main project, select the appropriate directory (for example, to deploy this application, you need to select the [20-deploy-app-to-vercel](.) directory).
* Set your environment variables. You will likely need to specify `MONGODB_URI` with the URL you should have set in `.env.production.local`. This is a sensitive information as it contains all your credentials, which is why you should specify them here and not directly in a file within your repository.
* In the Vercel interface, there should be a field where you can replace the build command. You should either remove [package-lock.json](package-lock.json) from your repository or replace the build command with the following : `npm install --no-package-lock`. Otherwise, the build will fail.

> As an example, I have deployed the code in the [20-deploy-app-to-vercel](.) directory. You can find the deployment status here : https://github.com/Atrimilan/nextjs-demo-apps/deployments.

**⚠️ Ensure you have allowed access from everywhere to your MongoDB Atlas database, or at least allowed your IP address. Otherwise, neither your local nor your deployed application will be able to connect to the database.**
