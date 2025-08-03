import Layout from "../components/Sections/Layout"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import CategoryContext from "./Context/CategoryContext"
function App() {
  // initially the category will be set to 0 so that the user can get mixed categories of videos
const [category, setCategory] = useState(0)

  return (
    // Wrapping Layout and Outlet in contextProvider so that user can get filtered videos
    <CategoryContext.Provider value = {{category,setCategory}}>
    <Layout />
     <Outlet/>
    </CategoryContext.Provider>
  )
}

export default App
