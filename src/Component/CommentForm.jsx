import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { AuthContext } from "../Context/AuthProvider";
import ThemeContext from "../Context/ThemeContext";
import Lottie from "lottie-react";
import animation from "../../public/noComment.json";

const CommentForm = ({ postId, blog }) => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API}/comments/${postId}`
      );
      setComments(res.data);
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

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
      await fetchComments();
      setNewComment("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-[#DB2777]" : "text-green-900"}`}>
        Comments
      </h3>

      {user?.email === blog?.authorEmail ? (
        <p className="mb-8 text-red-500 font-medium">
          You cannot comment on your own blog.
        </p>
      ) : (
        <div className="flex gap-4 items-start mb-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#DB2777]"
          />
          <form onSubmit={handleCommentSubmit} className="flex gap-2 w-full">
            <input
              type="text"
              className={`p-2 rounded-md w-full shadow-md border focus:outline-none transition 
                ${isDark ? "bg-[#1a1a2e]  border-[#DB2777]" : "bg-white text-gray-800 border-gray-300"}`}
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="submit"
              className={`text-xl px-4 py-2 rounded-full transition hover:scale-105 
                ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-[#525e04] text-white"} 
                disabled:opacity-40`}
              disabled={submitting}
            >
              <IoIosSend />
            </button>
          </form>
        </div>
      )}

      {submitting && (
        <p className={`text-sm mb-4 ${isDark ? "" : "text-gray-500"}`}>
          Posting comment...
        </p>
      )}

      <div className="space-y-6 max-h-60 overflow-y-auto pr-2">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="flex items-start gap-3" key={comment._id}>
              <img
                src={comment?.userImage}
                alt="User"
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <p className={`text-sm ${isDark ? "" : "text-gray-500"}`}>
                  {comment.username}
                </p>
                <p className={`${isDark ? "" : "text-gray-800"}`}>
                  {comment.commentText}
                </p>
                <small className={`${isDark ? "" : "text-gray-500"}`}>
                  {comment?.createdAt
                    ? new Date(comment.createdAt).toLocaleString()
                    : "Just now"}
                </small>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <Lottie style={{ width: 200, height: 200 }} animationData={animation} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
