"use client";
import { useState } from "react";
const Navbar = () => {
  const newPost = () => {
    const newPostModal = document.getElementById(`new-post`);
    if (newPostModal) {
      newPostModal.show();
    }
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header
      className="
      flex
      justify-end
      items-center
      gap-12
      m-6
      p-5
      text-2xl
      "
    >
      <button
        className="
       font-bold
       pb-3 
       text-center 
       px-4 rounded-full
        bg-white border-none cursor-pointer text-5xl"
        onClick={newPost}
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {open && (
          <div className="transition duration-700 bg-white font-normal text-black px-3 py-2 text-sm rounded-sm absolute top-4 right-20 opacity-75">
            Add New Post
          </div>
        )}
        +
      </button>
    </header>
  );
};

export default Navbar;
