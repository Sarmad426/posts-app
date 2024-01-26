"use client";

import PostProps from "@/types/Post";
import Image from "next/image";
import like from "../assets/thumb icon.svg";
import unlike from "../assets/unlike.svg";
import likedImg from "../assets/like.svg";
import unliked from "../assets/unlike black.svg";
import { useRouter } from "next/navigation";
import Edit from "./edit";
import { useState } from "react";
import DeleteModal from "./deleteModal";
const Post: React.FC<PostProps> = ({
  id,
  title,
  content,
  liked,
  hated,
  handleLike,
  handleNoLike,
  handleDisLike,
  handleNoHate,
  createdAt,
  updatedAt,
  editPost,
  deletePost,
}) => {
  const router = useRouter();
  const [openInfo, setOpenInfo] = useState(false);
  const handleLikeClient = (id: string) => {
    handleLike(id);
    router.refresh();
  };
  const handleNoLikeClient = (id: string) => {
    handleNoLike(id);
    router.refresh();
  };
  const handleDisLikeClient = (id: string) => {
    handleDisLike(id);
    router.refresh();
  };
  const handleNoHateClient = (id: string) => {
    handleNoHate(id);
    router.refresh();
  };
  const editDialog = (id: string) => {
    const editModal = document.getElementById(`${id}`);
    if (editModal) {
      //@ts-ignore
      editModal.showModal();
    }
  };
  const closeModal = (id: string) => {
    const editModal = document.getElementById(`${id}`);
    if (editModal) {
      //@ts-ignore
      editModal.close();
    }
  };
  const deletePostClient = (id: string): void => {
    const deleteModal = document.getElementById(`delete-${id}`);
    if (deleteModal) {
      //@ts-ignore
      deleteModal.showModal();
    }
    router.refresh();
  };
  const deletePostClientRefresh = (id: string) => {
    deletePost(id);
    const deleteModal = document.getElementById(`delete-${id}`);
    if (deleteModal) {
      //@ts-ignore
      deleteModal.close();
    }
    router.refresh();
  };
  const closeDeleteModal = () => {
    const deleteModal = document.getElementById(`delete-${id}`);
    if (deleteModal) {
      //@ts-ignore
      deleteModal.close();
    }
  };
  return (
    <div
      key={id}
      className="
      w-[30%] 
      h-[10rem]
          shadow-sm 
            shadow-gray-200
          rounded-md
           transition
           duration-500
           p-5
           hover:shadow-none
           bg-white
           relative
           text-black
            "
    >
      <h3 className="text-xl font-semibold text-center mb-6">{title}</h3>
      <button
        onClick={() => setOpenInfo(!openInfo)}
        className="text-3xl font-extrabold absolute right-5 top-0 p-2"
      >
        ...
      </button>
      {openInfo && (
        <div
          className="
        py-1
      shadow-md
      shadow-gray-600
      flex
      flex-col
      w-1/4
      text-center
      absolute
      top-10
      right-6
      rounded-md
      bg-gray-100
      "
        >
          <button
            className="py-1 px-2 text-black hover:bg-white  w-full transition duration-500"
            onClick={() => editDialog(id)}
          >
            Edit
          </button>

          <button
            className="py-1 px-2  text-black hover:bg-white  w-full transition duration-500"
            onClick={() => deletePostClient(id)}
          >
            Delete
          </button>
        </div>
      )}
      <p className="text-gray-600">{content}</p>

      <div className="flex justify-end gap-6 bg-gray-100 w-fit px-3 py-1 absolute right-1 bottom-[-40px] rounded-md">
        {!liked ? (
          <Image
            src={like}
            alt="like"
            width={30}
            height={25}
            onClick={() => handleLikeClient(id)}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={likedImg}
            alt="like"
            width={30}
            height={25}
            onClick={() => handleNoLikeClient(id)}
            className="cursor-pointer"
          />
        )}
        {!hated ? (
          <Image
            src={unlike}
            alt="like"
            width={30}
            height={25}
            onClick={() => handleDisLikeClient(id)}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={unliked}
            alt="like"
            width={30}
            height={25}
            onClick={() => handleNoHateClient(id)}
            className="cursor-pointer"
          />
        )}
      </div>

      <DeleteModal
        id={id}
        closeDeleteModal={closeDeleteModal}
        deletePostClientRefresh={deletePostClientRefresh}
      />
      <Edit
        id={id}
        title={title}
        content={content}
        closeModal={closeModal}
        editPost={editPost}
      />
    </div>
  );
};

export default Post;
