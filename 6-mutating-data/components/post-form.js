"use client";

import { useFormState } from "react-dom";
import FormSubmit from "./form-submit";

export default function PostForm({ action }) {

    // In newer versions, this hook becomes 'useActionState' from 'react'
    const [state, formAction] = useFormState(action, {});

    return (
        <>
            <h1>Create a new post</h1>
            <form action={formAction}> {/* https://react.dev/reference/react-dom/components/form */}
                <p className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </p>
                <p className="form-control">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                    />
                </p>
                <p className="form-control">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows="5" />
                </p>
                <p className="form-actions">
                    <FormSubmit /> {/* This component must be used between <form> tags */}
                </p>
                {state.errors &&
                    <ul className="form-errors">
                        {state.errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                }
            </form>
        </>
    );
}