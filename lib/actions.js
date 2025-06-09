'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text || text.trim().length === 0;
}

export async function shareMeal(previousState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('creator'),
        creator_email: formData.get('creator_email')
    };

    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input.'
        };
    }

    await saveMeaf(meal);
    
    // Revalidate the cache, otherwise the new meal won't be displayed.
    // This step is important for production !
    revalidatePath('/meals', 'layout'); // By default it's only "page", not "layout"

    redirect('/meals');
}