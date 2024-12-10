import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Post from "./Post"

export default function Posts({ token }) {

    // State variables: every time a state variable get's set, it 
    // redraws the comment.
    const [posts, setPosts] = useState([]);

    async function getPosts() { 
        const data = await getDataFromServer(token, "/api/posts");
        setPosts(data); // state variables setters always redraw the screen
    }
    // useEffect is a built-in function designed to handle "side effects" when the page 
    //first loads:
    useEffect(() => {
        getPosts();
    }, []);

    function outputPost(postObj){
        return <Post token={token} key={postObj.id} postData={postObj} />
    }

    return (
        <div>
            {
                posts.map(outputPost)
            }
        </div>
    );
}
