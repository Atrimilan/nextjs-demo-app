"use server"; // Make the client form action become a server action

import { revalidatePath } from "next/cache";
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { redirect } from "next/navigation";

// Neither the name of this folder nor the name of this file are conventional

export async function createPost(prevState, formData) { // Server actions must be async
    const title = formData.get('title'); // Should pass the name of the input as parameter
    const image = formData.get('image');
    const content = formData.get('content');

    let errors = [];

    if (!title || title.trim().length === 0) {
        errors.push("Title is required.");
    }
    if (!content || content.trim().length === 0) {
        errors.push("Content is required.");
    }
    if (!image || image.size === 0) {
        errors.push("Image is required.");
    }

    if (errors.length > 0) {
        return { errors };
    }

    let imageUrl;

    try {
        imageUrl = await uploadImage(image); // Upload to Cloudinary (needs an API key specified in .env.local)
    } catch (error) {
        throw new Error(`Image upload failed : ${error}\nPost was not created, please try again later.`);
    }

    await storePost({
        imageUrl,
        title,
        content,
        userId: 1
    });

    revalidatePath('/', 'layout'); // Revalidating all pages is not necessary (and inefficient), but it's easier for this demo
    redirect('/feed');
}

export async function togglePostLikeStatus(postId) {
    await updatePostLikeStatus(postId, 2); // User ID is hardcoded for this demo
    
    revalidatePath('/', 'layout'); // Refresh cached page data, otherwise the like status won't be updated
    // See : https://nextjs.org/docs/app/api-reference/functions/revalidatePath
}