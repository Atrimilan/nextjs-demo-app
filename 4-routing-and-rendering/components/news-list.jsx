import Link from "next/link";

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            {news.map(n => (
                // If your want to use relative paths in href, a workaround
                // is to add "trailingSlash: true" in next.config.mjs
                <li key={n.id}>
                    <Link href={`/news/${n.slug}`}>
                        <img src={`/images/news/${n.image}`} alt={n.title} />
                        <span>{n.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}