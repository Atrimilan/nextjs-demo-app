import fs from 'fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() { // "async" is used to wrap response into a Promise
    // throw new Error('Could not fetch meals!'); // Simulate error
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay for the demo
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    // Prevent SQL injection by using '?' and passing the slug in the .get()
    // Do not do "... WHERE slug = ${slug}"
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true }); // Create a slug (trim spaces, accents, hyphens, etc.)
    meal.instructions = xss(meal.instructions); // Sanitize 'instructions' form field which will be used as innerHTML

    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }

        meal.image = `/images/${filename}`; // This use the public folder by default

        db.prepare(`
            INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
            VALUES
            (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `).run(meal);
    });
}