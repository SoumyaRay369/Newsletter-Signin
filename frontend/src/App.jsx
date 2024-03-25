import { LeftSide } from "./components/LeftSide"
import { RightSide } from "./components/RightSide"
import { useState } from "react"
function App() {
  const [page, setPage] = useState('login')
  return (
    <>
      <div className="bg-green-300 text-white h-dvh w-dvw flex justify-center items-center">
        <div className="flex flex-col md:flex-row bg-white text-black w-full sm:w-7/8 lg:w-3/4 h-3/4  pb-2 rounded-lg shadow-xl shadow-green-600 justify-center items-center">
          <LeftSide setPage = {setPage}></LeftSide>
          <RightSide page = {page}></RightSide>
        </div>
      </div>
    </>
  )
}

export default App;