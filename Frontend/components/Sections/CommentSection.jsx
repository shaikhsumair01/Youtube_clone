import { useEffect, useState } from "react";
import formatters from "../../Utlis.js/formatters";
import moment from "moment";
import { jwtDecode } from "jwt-decode";

// Showing comments and adding edit mode for the comments
export default function CommentSection({ video }) {
    // The comments are stored in an array, Storing the comments list in array
  const [comments, setComments] = useState([]);
//   updating each comments
  const [newComment, setNewComment] = useState("");

//   for editing the comment body
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentBody, setEditedCommentBody] = useState("");
// getting the token and decoding it to get the username for each comment and userid  
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);
  const userName = decode.userName;
  const userId = decode.userId;

//   fetching all the comments based on the id
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3300/getComments/${video.id?.videoId || video.id}`);
        const data = await response.json();
        // setting the comments and showing them
        setComments(data);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }
    };
    // if video is present, only then will this function execute
    if (video?.id) {
      fetchComments();
    }
  }, [video]);

//   Saving the comments (adding new comments)
  const handleSubmit = async () => {
    // if newComment doesn't exist then we return
    if (!newComment.trim()) return;
    // Else we post the new comment
    try {
      const response = await fetch("http://localhost:3300/addComments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // Sending the payload
        body: JSON.stringify({
          videoId: video.id?.videoId || video.id,
          CommentBody: newComment,
          channelName: userName,
        }),
      });
    // getting the response 
      const data = await response.json();
    //   Setting the data
      setComments(prev => [data, ...prev]);
      setNewComment("");
    } catch (err) {
      console.error("Failed to post comment:", err);
    }
  };
//   Handling the update on comments 
// (passing the commentId and traversing the comment list based on id in the backend)
  const handleUpdate = async (commentId) => {
    if (!editedCommentBody.trim()) return;
    try {
      const response = await fetch(`http://localhost:3300/updateComment/${commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ CommentBody: editedCommentBody }),
      });

      const updatedComment = await response.json();

      setComments(prev =>
        prev.map(comment =>
          comment._id === commentId ? updatedComment : comment
        )
      );

      setEditingCommentId(null);
      setEditedCommentBody("");
    } catch (err) {
      console.error("Failed to update comment:", err);
    }
  };

  return (
    <>
      <h1 className="Comments-section-title">
        {comments.length
          ? formatters(comments.length)
          : formatters(video.statistics?.commentCount || Math.floor(Math.random() * 90000 + 10000))}{" "}
        Comments:
      </h1>

      {/* New Comment Input */}
      <div className="Comment-input-section">
        <textarea
          className="Comment-textarea"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="Comment-submit-btn" onClick={handleSubmit}>
          Post
        </button>
      </div>

      {/* Render Comments */}
      {comments.map((comment) => (
        <div key={comment._id} className="Comment-layout">
          <div className="comment-inner-div">
            <i className="fa-solid fa-circle-user Comment-logo"></i>
            <div className="Comment">
              <p className="User-Name">{comment.user?.username || comment.channelName}</p>

              {editingCommentId === comment._id ? (
                <>
                  <textarea
                    className="Comment-textarea"
                    value={editedCommentBody}
                    onChange={(e) => setEditedCommentBody(e.target.value)}
                  />
                  <div className="button-div">
                  <button className="Comment-submit-btn" onClick={() => handleUpdate(comment._id)}>
                    Save
                  </button>
                  <button className="Comment-cancel-btn" onClick={() => setEditingCommentId(null)}>
                    Cancel
                  </button>
                  </div>
                </>
              ) : (
                <p className="Comment-text">{comment.CommentBody}</p>
              )}

              <p className="Comment-date">{moment(comment.createdAt).fromNow()}</p>

              {/* Show Edit Button if user owns the comment */}
            {(comment.user?._id === userId || comment.channelName === userName) &&
            editingCommentId !== comment._id && (
            <button
            className="Comment-edit-btn"
            onClick={() => {
            setEditingCommentId(comment._id);
            setEditedCommentBody(comment.CommentBody);
            }}
            >
            Edit
        </button>
)}

            </div>
          </div>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      ))}
    </>
  );
}
