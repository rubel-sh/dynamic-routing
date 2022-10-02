import React from "react";

const Post = ({ post }) => {
  const { title, body, id } = post;
  return (
    <div className="border border-2 rounded-md border-cyan-700 m-2 py-2 px-4 flex flex-col justify-between">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-lg">{body}</p>

      <button className="btn btn-wide mt-2">
        Read Post
        <span className="text-white border border-white p-2 rounded-full ml-2">
          {id < 10 ? "0" + id : id}
        </span>
      </button>
    </div>
  );
};

export default Post;
