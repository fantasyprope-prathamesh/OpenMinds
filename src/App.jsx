import { useState } from 'react'
import FrontPage from './components/FrontPage'
import DetailPage from './components/DetailPage'
import { BrowserRouter , Routes , Route }  from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FrontPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage/>}> </Route>
          <Route path='/detailPage' element={<DetailPage/>}></Route>
          {/* <Route path='/demo' element={<Demo/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
