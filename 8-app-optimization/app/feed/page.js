import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// See :
// - https://nextjs.org/docs/app/getting-started/metadata-and-og-images
// - https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export async function generateMetadata() { // Should be an async function
  const posts = await getPosts();
  const numberOfPosts = posts.length;

  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: 'Browse all our posts.',
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
