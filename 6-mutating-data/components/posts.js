"use client";

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';
import { useOptimistic } from 'react';

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            {/* .bind() is a kind of preconfiguration function */}
            <form action={action.bind(null, post.id)} className={post.isLiked ? 'liked' : ''} >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  // Optimistic updating : updates data in client-side until the change has been processed on the server-side
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);

    if (updatedPostIndex === -1) { // The post wasn't found
      return prevPosts;
    }

    const updatedPost = { ...prevPosts[updatedPostIndex] }; // Copy of the post, in order to update it
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1); // New number of likes
    updatedPost.isLiked = !updatedPost.isLiked; // Whether the post was liked by the user or not

    const newPosts = [...prevPosts]; // Copy of the array of posts
    newPosts[updatedPostIndex] = updatedPost; // Replace the post with the updated one
    return newPosts;
  });

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
