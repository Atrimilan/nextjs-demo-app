import { notFound } from "next/navigation";
import classes from './image.module.css';
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

// This page will be intercepted :
// - This page will be shown ONLY to users navigating internally within the app.
// - It WON'T be shown to users coming from an external website or reloading the page.
// See : https://nextjs.org/docs/app/api-reference/file-conventions/intercepting-routes

export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const news = await getNewsItem(newsItemSlug);

    if (!news) {
        notFound(); // Will redirect to the closest not-found page
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div>
                    <img className={classes["modal-image"]} src={`/images/news/${news.image}`} alt={news.title} />
                </div>
            </dialog>
        </>
    )
}