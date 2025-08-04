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
- **Render** (for deployment)
- **Vercel** (for deployment)

## 📦 Features

- 🔍 Search videos via YouTube Data API
- 📺 View video details and metadata
- 🗂 Sidebar navigation with category filtering
- 🧑‍💬 Comment section with create and update comments functionality (with jwt authentication)
- 🔐 login and registering the user (connected with backend)
- 🔐 JWT-based authentication display (name tag favicon)
- 📺 Creating your channel, performing crud operations on your channel videos.
- 📱 Responsive design using Tailwind

## 🌐 Deployment Status

✅ **Live Backend:** [https://youtube-clone-backend-6b23.onrender.com]
📦 **Frontend Repo:** [https://github.com/shaikhsumair01/Youtube_clone-frontEnd.git]
🚀 **Frontend Deployment:** [https://streamly-vgcb.vercel.app/]

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/shaikhsumair01/Youtube_clone-FrontEnd.git
   cd FrontEnd
    npm init -y
   npm install
   <!-- install these dependencies -->
- npm install react react-dom react-router-dom toastify dotenv tailwind jwtdecode axios moment

 ## create your env file
 .env:
 VITE_Youtube_Api_key=your_youtube_api_key
## then run the dev server:
npm run dev
## then start the server in backend (Refer to Youtube_clone-BackEnd Readme (In the router folder))
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

# 🔗 Backend Integration
- The backend files are running at port 3300 ("https://youtube-clone-backend-6b23.onrender.com" on render) and supports the following endpoints:
- (## Please check out my Youtube_clone-Backend for reference as well)
- Post: /register : to regsiter new user
- Get: /getAllVideos : to fetch all the videos
- Get:/getMyChannel : to get the current logged in user's channel
- Delete: /deleteComment/:commentId: deleting the comment from it's id

# 🧪 Testing
- Used Chrome developer tools for testing the responsiveness of the UI and Api connectivity. You can also test the backend through postman or thunderClient

# 📌 Future Improvements: 
    1) Will make the recommended videos section (side-bar(video-navigation)) functional
    2) Update the search.jsx so that it takes real-time details about the video's channel desciption and display it, 
    since it shows random data (video-thumbnail, channel-views etc) when the video is accessed through search functionality. 
    3) Show videos based on audience preferences and filter them accordingly 
    4) Plans on implementing lazy loading in the future

#   📄 License
This project is licensed under the MIT License.

#   🙌 Acknowledgments
Inspired by YouTube’s UI/UX and built to practice full-stack development with React and Express.
