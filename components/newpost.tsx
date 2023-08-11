"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface Props {
  newPost: (title: string, content: string) => void;
}
const NewPost: React.FC<Props> = ({ newPost }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const closeModal = () => {
    const closeNewPostModal = document.getElementById("new-post");
    if (closeNewPostModal) {
      closeNewPostModal.close();
    }
  };
  const handleSubmit = () => {
    closeModal();
    setTitle("");
    setContent("");
  };
  const NewPostClient = (title: string, content: string): void => {
    newPost(title, content);
    router.refresh();
  };
  return (
    <dialog
      id="new-post"
      className="py-6 px-10 rounded-lg bg-black text-white w-1/3 shadow-sm shadow-gray-100 absolute top-[15%]"
    >
      <h2 className="text-2xl font-semibold text-center">Add Post</h2>
      <button
        className="
      absolute right-2 top-2
       text-white rounded-full
        bg-gray-600 py-2 px-4 
        font-extrabold text-lg
        hover:bg-gray-500
        transition-all
        duration-500
        "
        onClick={() => closeModal()}
      >
        X
      </button>
      <form
        onSubmit={handleSubmit}
        action={() => NewPostClient(title, content)}
        className="mt-5"
        method="dialog"
      >
        <label htmlFor="edit-title" className="block">
          Title
        </label>
        <input
          type="text"
          name="edit-title"
          id="edit-title"
          value={title}
          className="
           text-black
           font-medium
           py-3
           px-4
           mt-1
           mb-5
           mx-auto
           w-[90%]
           outline-none
           border-none
           focus:outline-none
           rounded-md
           "
          minLength={4}
          maxLength={40}
          required
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="edit-content" className="block">
          Content
        </label>
        <textarea
          name="edit-content"
          id="edit-content"
          value={content}
          className="
           text-black
           font-medium
           py-3
           px-4
           mt-1
           mb-5
           mx-auto
           w-[90%]
           outline-none
           border-none
           focus:outline-none
           rounded-md
           "
          minLength={12}
          maxLength={120}
          required
          autoComplete="off"
          cols={40}
          rows={10}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-white text-gray-800 rounded-md py-2 px-5 text-lg text-center hover:bg-gray-200 cursor-pointer transition-all duration-700"
        >
          Add
        </button>
      </form>
    </dialog>
  );
};

export default NewPost;
