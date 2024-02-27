import { useContext, useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from "./components/Blogs"
import Header from './components/Header'
import Pagination from "./components/Pagination"
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
// import { useLocation } from 'react-router'
import { AppContext } from './context/AppContext'
import { Routes ,Route, useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'

function App() {

    const {fetchPosts} = useContext(AppContext)
    const location = useLocation()
    const [searchParams] = useSearchParams();

    useEffect(() => {
      const page = searchParams.get("page") ?? 1;
      if (location.pathname.includes("tags")) {
        const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
        fetchPosts(Number(page), tag);
      } else if (location.pathname.includes("categories")) {
        const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
        fetchPosts(Number(page), null, category);
      } else {
        fetchPosts(Number(page));
      }
    }, [ location.pathname, searchParams]);
  

     
      return (
        // <div className='w-full h-full flex flex-col justify-center items-center'> 
        //     <Header></Header>
        //     <Blogs></Blogs>
        //     <Pagination></Pagination>
        // </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog/:blogId' element={<BlogPage/>}/>
          <Route path='/tags/:tag' element={<TagPage/>}/>
          <Route path='/categories/:category' element={<CategoryPage/>}/>
        </Routes>
      )
}

export default App
