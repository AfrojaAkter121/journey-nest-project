import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { AuthContext } from "../Context/AuthProvider";

const CommentForm = ({ postId, blog }) => {
  const { user } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // 🔁 Load comments from MongoDB
  const fetchComments = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/comments/${postId}`);
      setComments(res.data);
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  // 📨 Submit comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentData = {
      postId,
      username: user.displayName,
      userImage: user?.photoURL,
      commentText: newComment,
    };

    try {
      setSubmitting(true);
      await axios.post(`${import.meta.env.VITE_API}/comments`, commentData);
      await fetchComments(); // 🔄 Reload comments after submission
      setNewComment("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>

      {user?.email === blog?.authorEmail ? (
        <p className="mb-8 text-red-600 font-medium">
          You cannot comment on your own blog.
        </p>
      ) : (
        <div className="flex gap-4 items-start mb-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <form onSubmit={handleCommentSubmit} className="flex gap-5 w-full">
            <textarea
              className="border border-gray-300 p-2 rounded w-full resize-none"
              rows="1"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-[#525e04] text-white px-4 rounded hover:bg-orange-600 disabled:opacity-50"
              disabled={submitting}
            >
              <IoIosSend />
            </button>
          </form>
        </div>
      )}

      {/* Posting loader */}
      {submitting && (
        <p className="text-sm text-gray-500 mb-4">Posting comment...</p>
      )}

      {/* Comment list */}
      <div className="space-y-6 max-h-60 overflow-y-auto">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="flex items-center" key={comment._id}>
              <img
                src={comment?.userImage}
                alt="User"
                className="w-12 h-12 rounded-full mr-5"
              />
              <div>
                <p className="text-gray-500 text-sm">{comment.username}</p>
                <p className="text-gray-800">{comment.commentText}</p>
                <small className="text-gray-500">
                  {comment?.createdAt
                    ? new Date(comment.createdAt).toLocaleString()
                    : "Just now"}
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
