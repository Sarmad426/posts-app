import AddPost from "@/components/addpost";
import { addPost } from "@/utils/utils";
const Page = () => {
  return (
    <div className="font-semibold text-center mt-6">
      <h2 className="text-2xl">Add New Post</h2>
      <AddPost addNewPost={addPost} />
    </div>
  );
};

export default Page;
