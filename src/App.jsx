import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Layout from "./components/layout/Layout"


const App = () => {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout> 
    </>
  )
}

export default App