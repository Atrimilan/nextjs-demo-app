import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

// This file is a fallback to prevent redirection to the not-found.jsx page when using parallel
// routes with different nested folders.
// > Here, the @archive folder contains a [year] folder, and the @latest folder does not.
// > As the layout tries to display both parallel routes, it will redirect to the not-found.jsx
// > because a [year] folder is missing. This is where default.jsx is useful, and page.jsx is
// > not required (especially when the content is the same in both files).

export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    );
}