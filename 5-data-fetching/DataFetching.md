# Data fetching

When following the [Udemy course](https://www.udemy.com/course/nextjs-react-the-complete-guide/) (Section 5), Next.js data fetching is explained with different approaches :
1. Client-side data fetching (with an external Express.js backend)
2. Server-side data fetching (with the same Express.js external backend)
3. Server-side data fetching (directly from source)

The best approach in Next.js is to fetch data server-side, this is also an advantage for SEO because the fetched data is inside the source code rendered on the client.

Then, as we don't need an external API for this project, the 3rd approach has been chosen. Thus we don't need to run the Express.js backend when running the Next.js application, and the **data.db** file in [the root folder](./) is used as is in the Next.js code.

## Trying out the two other approaches

First, initialize and start the Express.js backend :
* `cd backend/`
* `npm install`
* `npm start`

### Client-side data fetching using the Express.js backend :

Replace the [page.jsx](app/(content)/news/page.jsx) code with the following :

```jsx
"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/news');

            if (!response.ok) {
                setError('Failed to fetch news');
                setIsLoading(false);
            }

            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }
        fetchNews();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    let newsContent;

    if (news) {
        newsContent = <NewsList news={news} />
    }

    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>
    );
}
```

### Server-side data fetching using the Express.js backend :

Replace the [page.jsx](app/(content)/news/page.jsx) code with the following :

```jsx
import NewsList from "@/components/news-list";

export default async function NewsPage() {

    const response = await fetch('http://localhost:8080/news');

    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }

    const news = await response.json();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    );
}
```
