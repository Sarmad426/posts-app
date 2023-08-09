import React from "react";
interface Props {
  id: string;
  closeDeleteModal: () => void;
  deletePostClientRefresh: (id: string) => void;
}

const DeleteModal: React.FC<Props> = ({
  id,
  closeDeleteModal,
  deletePostClientRefresh,
}) => {
  return (
    <dialog
      id={`delete-${id}`}
      className="
      w-1/3
      py-10
    px-5
    bg-black
    text-white
    shadow-sm
    shadow-gray-100
    rounded-md
    "
    >
      <h2 className="text-lg font-semibold">
        Do you want to delete this post?
      </h2>
      <div className="flex justify-end gap-12 mt-6">
        <button
          onClick={() => deletePostClientRefresh(id)}
          className="bg-rose-600 text-white hover:bg-rose-500 transition-all duration-500 text-base rounded-md border-none px-3 py-2"
        >
          Delete
        </button>
        <button
          className="text-black bg-white text-base rounded-md border-none px-3 py-2 hover:bg-gray-200 transition-all duration-500 "
          onClick={closeDeleteModal}
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
};

export default DeleteModal;
