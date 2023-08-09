import prisma from "@/db";
import Post from "@/components/post";
import FormMsg from "@/components/formMsg";
import {
  handleLike,
  handleNoLike,
  handleDisLike,
  handleNoHate,
  editPost,
  deletePost,
} from "@/utils/utils";

async function getPosts() {
  return await prisma.posts.findMany();
}

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
