"use client";
import { useState } from "react";
import FormMsg from "./formMsg";
interface Props {
  addNewPost: (title: string, content: string) => void;
}

const AddPost: React.FC<Props> = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const closeModal = () => {
    const msg = document.querySelector("#msg");
    if (msg) {
      msg.style.display = "none";
    }
  };
  const showMsg = () => {
    const msg = document.querySelector("#msg");
    if (msg) {
      msg.style.display = "block";
      setTimeout(closeModal, 3000);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    setTitle("");
    setContent("");
    showMsg();
  };
  return (
    <form
      className="m-12 relative"
      method="post"
      action={() => addNewPost(title, content)}
      onSubmit={handleSubmit}
    >
      <FormMsg />
      <div className="flex w-1/2 mx-auto">
        <label htmlFor="title" className="tracking-wider mt-3 mr-3">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="mx-6 rounded-md border-none outline-none w-[80%] py-3 px-4 focus:border-none focus:outline-none text-gray-800"
          maxLength={40}
          minLength={4}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex w-1/2 mx-auto my-12">
        <label htmlFor="content" className="tracking-wider mr-3">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          cols={30}
          rows={10}
          className="text-gray-800 p-2 w-[80%] font-medium rounded-md border-none outline-none focus:border-none focus:outline-none"
          required
          maxLength={120}
          minLength={12}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-700 to-orange-700 cursor-pointer py-2 px-4 rounded-md border-none text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default AddPost;
