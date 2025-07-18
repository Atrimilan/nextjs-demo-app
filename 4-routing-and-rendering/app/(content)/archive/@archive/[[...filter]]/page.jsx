import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

// [[...filter]] is a catch-all route (the name can be changed)

export default function FilteredNewPage({ params }) {
    const filter = params.filter; // filter is an array of all path segments

    const selectedYear = filter?.[0]; // Same as `filter ? filter[0] : undefined`
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear) ||
        selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)) {
        throw new Error('Invalid filter.');
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    )
}