import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

// This page will not be shown in some cases, because there exists an intercepting route
// folder named "(.)image" (located inside the parallel route folder "@modal").
// See : https://nextjs.org/docs/app/api-reference/file-conventions/intercepting-routes

export default async function ImagePage({ params }) {
    const newsItemSlug = params.slug;
    const news = await getNewsItem(newsItemSlug);

    if (!news) {
        notFound(); // Will redirect to the closest not-found page
    }

    return (
        <div>
            <img  src={`/images/news/${news.image}`} alt={news.title} />
        </div>
    )
}