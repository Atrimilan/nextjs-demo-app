import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

// Generate dynamic metadata : https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }) {
    const meal = getMeal(params.slug);
    
    if (!meal) {
        notFound(); // Will redirect to the closest not-found page
    }

    return {
        title: meal.title,
        description: meal.summary
    };
}

export default function MealDetailsPage({ params }) {
    const meal = getMeal(params.slug);

    if (!meal) {
        notFound(); // Will redirect to the closest not-found page
    }

    meal.instructions = meal.instructions.replaceAll(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>

            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}></p>
            </main>
        </>
    );
}