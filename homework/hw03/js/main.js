import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "sofia";
let password = "password";

async function initializeScreen() {
    token = await getAccessToken(rootURL, username, password);;
    showNav();
    getPosts();
    getsuggestions();
    getuserProfile();
    getstories();
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:

async function getPosts() {
    // get the HTTP response header:
    const endpoint =
        "https://photo-app-secured.herokuapp.com/api/posts/?limit=10";
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    // get the HTTP body (JSON object):
    const posts = await response.json();

    // print the data to the console:
    console.log(posts);

    showPosts(posts);
}

function showPosts(posts) {
    const mainEl = document.querySelector("main");

    posts.forEach(post => {
        const template = `        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${post.image_url}" alt="${post.alt_text}" width="300" height="300"
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${ getLikeButton(post)}  
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${ getBookmarkButton(post)} 
                    </div>
                </div>
                <p class="font-bold mb-3"> ${post.likes.length} Likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${post.user.username}</strong>
                        ${post.caption} <button class="button">more</button>
                    </p>
                </div>
                ${ showComments(post.comments) }
                <p class="uppercase text-gray-500 text-xs">1 day ago</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
        `;

        mainEl.insertAdjacentHTML("beforeend",template );

    });
}

async function getuserProfile() {
    const endpoint = 
        "https://photo-app-secured.herokuapp.com/api/profile/";
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
    });
    const userProfile = await response.json();

    console.log(userProfile);

    showuser(userProfile);
}

function showuser(userProfile) {
    const mainEl = document.querySelector("#user");

    userProfile.forEach(userProfile => {
        const template = `
            <aside class="fixed top-[100px] left-[63vw] w-70 hidden md:block">
        <header class="flex gap-4 items-center">
            <img src="${user.image_url}" alt="Profile Pocture"class="rounded-full w-16" />
            <h2 class="font-Comfortaa font-bold text-2xl">${user.username}</h2>
        </header>
        <div class="mt-4"></div>
            <p class="text-base text-gray-400 font-bold mb-4">Suggestions for you</p>`

        mainEl.insertAdjacentHTML("beforeend",template );

    });
}

async function getsuggestions() {
    const endpoint = 
        "https://photo-app-secured.herokuapp.com/api/suggestions/";
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    });
    const suggestions = await response.json();

    console.log(suggestions);

    showSuggestions(suggestions);
}

function showSuggestions(suggestions) {
    const mainEl = document.querySelector(".mt-4");

    suggestions.forEach(suggestions => {
        const template = `
            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="https://picsum.photos/40/40?q=${suggestions.image_url}" alt="profile picture" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">${suggestions.username}</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>
            `;

            mainEl.insertAdjacentHTML("beforeend",template );

    });
}

async function getstories() {
    const endpoint = 
        "https://photo-app-secured.herokuapp.com/api/stories/";
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        }
    });
    const stories = await response.json();

    console.log(stories);

    showStories(stories);

}

function showStories(stories){
    const mainEl = document.querySelector("#stories");
    stories.forEach(stories => {
        const template = `
       
        <div class="flex flex-col justify-center items-center">
                <img src="https://picsum.photos/50/50?q=${stories.user.image_url}" alt="Profile Picture"
                class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">${stories.user.username}</p>
            </div>
        
        `;

        mainEl.insertAdjacentHTML("beforeend",template);

    });
}

function showComments(comments) {
    if(comments.length > 1) {
        const lastComment = comments[comments.length-1];
        return `
            <button class="text-sm mb-3">view all ${comments.length} comments</button>
            <p class="text-sm mb-3">
                <strong>${lastComment.user.username}</strong> ${lastComment.text}
            </p>
        `;
    }
    if(comments.length === 1) {
        const lastComment = comments[0];
        return `<p class="text-sm mb-3">
                <strong>${lastComment.user.username}</strong> ${lastComment.text}
                </p>`
}

    return ` `;
}

function getLikeButton(post) {
    let iconClass = "far"
    if (post.current_user_like_id) {
        iconClass = "fa-solid text-red-700"
        return `<button onclick="deleteLike(${post.current_user_like_id})">
            <i class="${iconClass} fa-heart"></i></button>`
    } else {
        return `
        <button onclick='addALike(${post.id})'>
            <i class="far fa-heart"></i>
        </button>
        `;
    }
}

// iconClass = "fa-solid text-red-700"

// return `<button><i class="${iconClass} fa-heart"></i></button>`

window.addALike = async function(postID){
    const postData = {
        post_ID: postID,
    };
        const response = await fetch("https://photo-app-secured.herokuapp.com/api/likes/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`    
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        console.log(data);
}

window.deleteLike = async function(likeID) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/likes/${likeID}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`    
        }
    });
    const data = await response.json();
    console.log(data);
}


function getBookmarkButton(post) {
    if (post.current_user_bookmark_id) {
        return `<button onclick="deleteBookmark(${post.current_user_bookmark_id})">
            <i class="fa-solid fa-bookmark"></i></button>`
    } else {
        return `
        <button onclick="createBookmark(${post.id})">
            <i class="far fa-bookmark"></i>
        </button>`;
    }
}

window.createBookmark = async function(postID){
    const postData = {
        post_id: postID,
    };

    const response = await fetch(
        "https://photo-app-secured.herokuapp.com/api/bookmarks/", 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        console.log(data);
}

window.deleteBookmark = async function(bookmarkId) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();
    console.log(data);
}

// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();
