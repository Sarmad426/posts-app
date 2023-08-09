"use client";
import { FormEvent, useState } from "react";
import FormMsg from "./formMsg";
import { useRouter } from "next/navigation";
interface Props {
  id: string;
  title: string;
  content: string;
  closeModal: (id: string) => void;
  editPost: (id: string, title: string, content: string) => void;
}
const Edit: React.FC<Props> = ({
  id,
  title,
  content,
  closeModal,
  editPost,
}) => {
  const router = useRouter();
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const handleSubmit = (formEvent: React.FormEvent) => {
    closeModal(id);
  };
  const editPostClient = (id: string, title: string, content: string): void => {
    editPost(id, title, content);
    router.refresh();
  };
  return (
    <dialog
      id={id}
      className="relative py-6 px-10 rounded-lg bg-black text-white w-1/3 shadow-sm shadow-gray-100"
    >
      <h2 className="text-2xl font-semibold text-center">Edit Post</h2>
      <FormMsg />
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
        onClick={() => closeModal(id)}
      >
        X
      </button>
      <form
        onSubmit={handleSubmit}
        action={() => editPostClient(id, editTitle, editContent)}
        className="mt-5"
        method="post"
      >
        <label htmlFor="edit-title" className="block">
          Title
        </label>
        <input
          type="text"
          name="edit-title"
          id="edit-title"
          value={editTitle}
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
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="edit-content" className="block">
          Content
        </label>
        <textarea
          name="edit-content"
          id="edit-content"
          value={editContent}
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
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
        <button className="bg-white text-gray-800 rounded-md py-2 px-5 text-lg text-center hover:bg-gray-200 cursor-pointer transition-all duration-700">
          Edit
        </button>
      </form>
    </dialog>
  );
};

export default Edit;
