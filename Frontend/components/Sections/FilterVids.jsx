// filterButtons shown to filter based on category
import CategoryContext from "../../src/Context/CategoryContext"
import { useContext } from "react"
export default function FilterVids(){
    const {category,setCategory} = useContext(CategoryContext) 
    return(<>
    <ul className="Filter-buttons">
        <li className={`Filter-button ${category===0?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(0)}>All</li>
        <li className={`Filter-button ${category===22?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(22)}>Shorts</li>
        <li className={`Filter-button ${category===20?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(20)}>Gaming</li>
        <li className={`Filter-button ${category===2?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(2)}>Automobiles</li>
        <li className={`Filter-button ${category===17?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(17)}>Sports</li>
        <li className={`Filter-button ${category===25?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(25)}>News</li>
        <li className={`Filter-button ${category===24?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(24)}>Entertainment</li>
        <li className={`Filter-button ${category===1?"text-cyan-700 active-Link":""}`} onClick={()=> setCategory(1)}>Movies</li>
    </ul>
    </>)
}