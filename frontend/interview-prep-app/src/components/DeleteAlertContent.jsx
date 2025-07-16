import React from "react";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-2">
      <p className="text-[14px]"> {content}</p>

      <div className="flex justify-end m-4">
        <button type="button" className="btn-small pb-2" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
