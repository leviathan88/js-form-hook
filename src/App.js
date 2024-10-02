import { Route, Routes } from "react-router-dom"
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Data } from './pages/Data.jsx'
import { Found } from './pages/Found.jsx'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/data" element={<Data />} />
      <Route path="*" element={<Found />} />
    </Routes>
  )
}