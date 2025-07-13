import React from "react";

export default function Sidebar(){
  return (
    <aside className="w-fit bg-gray-100 text-black p-4">
      {/* Sidebar content */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Trending</li>
          <li>Subscriptions</li>
        </ul>
      </nav>
    </aside>
  );
};


