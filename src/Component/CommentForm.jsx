import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { AuthContext } from "../Context/AuthProvider";

const CommentForm = ({ postId, blog }) => {
  const { user } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  console.log(newComment);
  console.log(comments);
  // Load comments from MongoDB
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/comments/${postId}`).then((res) => {
      console.log(res.data);
      setComments(res.data);
    });
  }, [postId]);

  // Submit comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const commentData = {
      postId,
      username: user.displayName,
      userImage: user?.photoURL,
      commentText: newComment,
    };
    const res = await axios.post(
      `${import.meta.env.VITE_API}/comments`,
      commentData
    );
    setComments([res.data, ...comments]); // Show new comment instantly
    setNewComment("");
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>

      {user?.email === blog?.authorEmail ? (
        <p className="mb-8"> "Can not comment on own blog"</p>
      ) : (
        <div className="flex gap-4 items-start mb-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <form onSubmit={handleCommentSubmit} className="flex gap-5">
            <input
              className="border border-gray-300 p-2  rounded"
              rows="3"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="bg-[#525e04] text-white px-4 py-2 rounded hover:bg-orange-600">
              <IoIosSend />
            </button>
          </form>
        </div>
      )}

      {/* Comment list */}
      <div className="space-y-6 max-h-60 overflow-y-auto">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="flex items-center" key={comment._id}>
              <div>
                <img
                  src={comment?.userImage}
                  alt="User"
                  className="w-12 h-12 rounded-full mr-5"
                />
              </div>
              <div>
                <h4>{comment.commentText}</h4>
                <small className="text-gray-500 mr-5">{comment.username}</small>
                <small className="text-gray-500">
                  {comment?.createdAt && !isNaN(new Date(comment.createdAt))
                    ? new Date(comment.createdAt).toLocaleString()
                    : "Loading..."}
                </small>
              </div>
            </div>
          ))
        ) : (
          <p>No comments found</p>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
