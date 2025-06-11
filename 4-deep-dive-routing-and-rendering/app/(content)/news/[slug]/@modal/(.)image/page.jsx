"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import classes from './image.module.css';

// This page will be intercepted :
// - This page will be shown ONLY to users navigating internally within the app.
// - It WON'T be shown to users coming from an external website or reloading the page.
// See : https://nextjs.org/docs/app/api-reference/file-conventions/intercepting-routes

export default function InterceptedImagePage({ params }) {
    const router = useRouter();

    const newsItemSlug = params.slug;
    const news = DUMMY_NEWS.find(dn => dn.slug === newsItemSlug);

    if (!news) {
        notFound(); // Will redirect to the closest not-found page
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div>
                    <img className={classes["modal-image"]} src={`/images/news/${news.image}`} alt={news.title} />
                </div>
            </dialog>
        </>
    )
}