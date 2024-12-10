import React from "react";

export default function Profile({ username }) {
    return (
        <header className="flex gap-4 items-center">
            <header class="flex gap-4 items-center">
            <img src="https://picsum.photos/60/60?q=11" class="rounded-full w-16" />
            <h2 class="font-Comfortaa font-bold text-2xl">{username}</h2>
        </header>
        </header>
    );
}
