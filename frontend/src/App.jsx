 import { Route, Routes } from "react-router-dom"
 import Home from "./Components/Home"
 import School from "./Components/School"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/school" element={<School/>} />
     
    </Routes>
  )
}

export default App