// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import './tailwind.css';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Outlet />
      </div>
      <Footer />
      {/* <div><a target="_blank" href="https://icons8.com/icon/67673/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div> */}
    </>
  )
}

export default App
