export default function Sidebar(){
  return (
    <aside className="w-[10%] h-full bg-gray-100 text-black p-2 z-10">
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


