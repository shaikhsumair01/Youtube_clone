import { useEffect, useState } from "react";
import formatters from "../../Utlis.js/formatters";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";
import instance from "../../src/api/Render-server";
import { jwtDecode } from "jwt-decode";

// Showing comments and adding edit mode for the comments
export default function CommentSection({ video }) {
    // The comments are stored in an array, Storing the comments list in array
  const [comments, setComments] = useState([]);
//   updating each comments
  const [newComment, setNewComment] = useState("");
// setting loading
const [loading, setLoading] = useState(false);

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
      setLoading(true);
      try {
        const response = await instance.get(`/getComments/${video.id?.videoId || video.id}`);
        const data = response.data;
        // setting the comments and showing them
        setComments(data);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }finally {
      setLoading(false);
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
    setLoading(true);
    try {
      const response = await instance.post("/addComments", 
        // Sending the payload
        {
          videoId: video.id?.videoId || video.id,
          CommentBody: newComment,
          channelName: userName,
        },
        {
          headers:{
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,

          }
        }
      );
    // getting the response 
      const data = response.data;
    //   Setting the data
      setComments(prev => [data, ...prev]);
      setNewComment("");
      toast.success("Comment posted!");

    } catch (err) {
      console.error("Failed to post comment:", err);
      toast.error("Failed to post comment.");

    }
    finally {
  setLoading(false);
  }

  };
//   Handling the update on comments 
// (passing the commentId and traversing the comment list based on id in the backend)
  const handleUpdate = async (commentId) => {
    if (!editedCommentBody.trim()) return;
     setLoading(true);
    try {
      const response = await instance.put(`/updateComment/${commentId}`, 
        { CommentBody: editedCommentBody },
        {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        
      });

      const updatedComment =response.data;

      setComments(prev =>
        prev.map(comment =>
          comment._id === commentId ? updatedComment : comment
        )
      );

      setEditingCommentId(null);
      setEditedCommentBody("");
       toast.success("Comment updated!");

    } catch (err) {
      console.error("Failed to update comment:", err);
       toast.error("Failed to update comment.");

    }
    finally {
  setLoading(false);
  }

  };
  // Handle delete

  const handleDelete = async (commentId) => {
    // fetching the delete request
     setLoading(true);
  try {
    const response = await instance.delete(`/deleteComment/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // if fetched
   if (response.status === 200) {
    // deletes the comment
  setComments(prev => prev.filter(comment => comment._id !== commentId));
   toast.success("Comment deleted!");

} else {
  // Sends the error message
  console.error("Failed to delete comment:", response.data);
  toast.error("Failed to delete comment.");

}

  } catch (err) {
    console.error("Delete error:", err);
    toast.error("Error deleting comment.");

  }
  finally {
  setLoading(false);
  }

};
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />

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
       {loading && <Loader />}

      {/* Render Comments */}
      {!loading &&
        comments.map((comment) => (
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
                     disabled={loading}
                  />
                  <div className="button-div">
                  <button className="Comment-submit-btn" onClick={() => handleUpdate(comment._id)}  disabled={loading}
>
                    Save
                  </button>
                  <button className="Comment-cancel-btn" onClick={() => setEditingCommentId(null)}  disabled={loading}
>
                    Cancel
                  </button>
                  </div>
                </>
              ) : (
                <p className="Comment-text">{comment.CommentBody}</p>
              )}

              <p className="Comment-date">{moment(comment.createdAt).fromNow()}</p>

              {/* Show Edit Button and delete button if user owns the comment */}
            {(comment.user?._id === userId || comment.channelName === userName) &&
            editingCommentId !== comment._id && (
              <>
              <div className="button-div">
            <button
            className="Comment-edit-btn"
            onClick={() => {
            setEditingCommentId(comment._id);
            setEditedCommentBody(comment.CommentBody);
            }}
             disabled={loading}

            >
            Edit
        </button>
         <button
      className="Comment-delete-btn"
      onClick={() => handleDelete(comment._id)}
       disabled={loading}

    >
      Delete
    </button>
    </div>
</>
)}

            </div>
          </div>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      ))}
    </>
  );
}
