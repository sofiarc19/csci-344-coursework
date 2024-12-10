import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({ token, LikeId, postId }) {
  const [stateLikeId, setStateLikeId] = useState(LikeId);

  async function createLike() {
    const sendData = {
      post_id: postId,
    };

    const responseData = await postDataToServer(token, "/api/likes/", sendData);
    console.log(responseData);
    setStateLikeId(responseData.id);
  }

  async function deleteLike() {
    console.log("deleting a Like...");

    const responseData = await deleteDataFromServer(
      token,
      "/api/likes/" + stateLikeId
    );
    console.log(responseData);
    setStateLikeId(null);
  }

  if (stateLikeId) {
    return (
      <button onClick={deleteLike}>
        <i className="far fa-heart"></i>
      </button>
    );
  } else {
    return (
      <button onClick={createLike}>
        <i className="fas text-red-700 fa-heart"></i>
      </button>
    );
  }
}
