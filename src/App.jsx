import { useState } from "react"
import Nav from "./Components/Nav"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"

const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <Nav setCategory={setCategory}/>
      <NewsBoard category={category}/>
      
    </div>
  )
}

export default App