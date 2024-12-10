import React from "react"; 

export default function Story({ postData, token }) { 
    console.log(postData); 
    return ( 
    <header 
        className="flex gap-6 bg-white border p-2 overflow-hidden mb-6"> 
        <div className="flex flex-col justify-center items-center"> 
            <img src={postData.user.image_url} alt={postData.user.alt_text || "Profile Picture"} 
             className="rounded-full border-4 border-gray-300" /> 
            <p className="text-xs text-gray-500">
            {postData.user.username}</p> 
        </div> 
    </header> 
            );
 }