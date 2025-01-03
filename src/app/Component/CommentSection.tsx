"use client";
import { useState, FormEvent, ChangeEvent } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]); // Explicitly typing  comments array
  const [commentInput, setCommentInput] = useState<string>(""); // Explicitly typing input state

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!commentInput.trim()) {
      alert("Please write a comment before submitting.");
      return;
    }

    setComments([...comments, commentInput]);
    setCommentInput("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentInput(e.target.value);
  };

  return (
    <div className="mt-10 p-5 border-t border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={commentInput}
          onChange={handleInputChange}
          placeholder="Write your comment here..."
          required
          className="w-full h-20 mb-4 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 text-lg text-black bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg   hover:to-blue-500 "
        >
          Post Comment
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-4">Comments:</h3>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 border border-gray-300 rounded-lg"
            >
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
