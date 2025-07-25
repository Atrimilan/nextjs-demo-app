import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
    const newsSlug = params.slug; // This property depends on the folder name
    const news = DUMMY_NEWS.find(dn => dn.slug === newsSlug);

    if (!news) {
        notFound(); // Will redirect to the closest not-found page
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${news.slug}/image`}>
                    <img src={`/images/news/${news.image}`} alt={news.title} />
                </Link>
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
    );
}