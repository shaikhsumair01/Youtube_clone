// UseContext for passing category of the videos in Sidebar and Feed.jsx
import { createContext } from "react";
const CategoryContext = createContext({
    category: '',
  setCategory: () => {},

}
);
export default CategoryContext;