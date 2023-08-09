import Post from "@/components/post";
import FormMsg from "@/components/formMsg";
import {
  handleLike,
  handleNoLike,
  handleDisLike,
  handleNoHate,
  editPost,
  deletePost,
  getPosts,
} from "@/utils/utils";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="p-12 mx-auto">
      <div className="flex justify-start flex-wrap items-center gap-12">
        {posts.map((post) => (
          <Post
            key={post.id}
            {...post}
            handleLike={handleLike}
            handleNoLike={handleNoLike}
            handleDisLike={handleDisLike}
            handleNoHate={handleNoHate}
            editPost={editPost}
            deletePost={deletePost}
          />
        ))}
      </div>
      <FormMsg />
    </main>
  );
}
