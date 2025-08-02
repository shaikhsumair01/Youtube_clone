# 🎬 Streamly Frontend

Streamly is a YouTube-inspired video platform built with React. This is the frontend which handles video browsing, search, user interaction, and responsive UI.

## 🚀 Tech Stack

- **React** (with Hooks)
- **React Router**
- **Tailwind CSS**
- **Axios and Fetch API**
- **Moment.js**
- **JWT Decode**
- **Font Awesome Icons**

## 📦 Features

- 🔍 Search videos via YouTube Data API
- 📺 View video details and metadata
- 🗂 Sidebar navigation with category filtering
- 🧑‍💬 Comment section with create and update comments functionality (with jwt authentication)
- 🔐 login and registering the user (connected with backend)
- 🔐 JWT-based authentication display (name tag favicon)
- 📺 Creating your channel, performing crud operations on your channel videos.
- 📱 Responsive design using Tailwind


## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/streamly-frontend.git
   cd streamly-frontend
   npm install
 ## create your env file
 .env:
 VITE_Youtube_Api_key=your_youtube_api_key
## then run the dev server:
npm run dev

2. **folder structure**
--components
    --Pages
        --Authenticate.jsx
        --Channel.jsx
        --Error.jsx
        --Home.jsx
        --Search.jsx
        --VideoPage.jsx
    --Sections
        --ChannelForm.jsx
        --ChannelPage.jsx
        --CommentSection.jsx
        --Feed.jsx
        --FilterVids.jsx
        --Header.jsx
        --InitialPage.jsx
        --Layout.jsx
        --RecomendedVideos.jsx
        --SideBar.jsx
        --VideoLayout.jsx
        --VideoPlayer.jsx

--src
    --assets
        --api
            --Render-server.js (to deploy the project on vercel. Backend already deployed)
        --Context
            --CategoryContext.jsx
        --App.jsx
        --main.jsx
        --style.jsx
        --Utils.js
            --formatters.js

    Future Updates: 
    1) Will deploy the project on vercel and will connect the backend with the frontEnd.
    2) Will make the recommended videos functional
    3) Update the search.jsx so that it takes real-time details about the video and display it, 
    since it shows random data (video-thumbnail, channel-views etc) when the video is accessed through search functionality. 