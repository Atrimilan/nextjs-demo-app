// This is not useful in this project, but it might be useful for other clients
// that want to consume the API, for example a mobile app.
// See :
// - https://nextjs.org/docs/app/api-reference/file-conventions/route
// - https://nextjs.org/docs/app/building-your-application/routing/route-handlers

/**
 * Return "Hello!" when sending a GET request to http://localhost:3000/api
 */
export function GET(request) { // Can also handle POST, PUT, PATCH, DELETE, HEAD and OPTIONS
    console.log(request);
    return new Response("Hello!"); // Can also return a Response.json()
}
