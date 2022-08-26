import React, {useEffect, useState}from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.scss'
import About from './pages/About'
import Footer from './components/Footer'
import useContentful from './useContentful'
import Programs from './pages/Programs'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Book from './pages/Book'
import ScrollBackToTop from './ScrollBackToTop'
import ProgramIntro from './pages/ProgramIntro'
import Blogs from './pages/Blogs'
import ScrollToTop from './components/ScrollToTop'
import Calendar from './pages/Calendar'
import Contact from './components/Contact'

function App() {
  ScrollBackToTop();
  const [teachers, setTeachers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const {getData} = useContentful();

  useEffect(() => {
    getData().then((res) => {
      setTeachers(res.teacherSanitizedResponse);
      setBlogs(res.blogSanitizedResponse);
      setTestimonials(res.testimonialSanitizedResponse);
    });
  });

  return (
    <div className="App">
      <Contact />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home teachers={teachers} />} />
        <Route path='/About' element={<About teachers={teachers} testimonials={testimonials} />} />
        <Route path='/Programs' element={<Programs testimonials={testimonials} />} />
        <Route path='/Booking' element={<Book teachers={teachers} />}  />
        <Route path='/Blog' element={<Blogs blogs={blogs} />}  />
        <Route path='/ProgramIntro' element={<ProgramIntro />}  />
        <Route path='/Booking/calendar' element={<Calendar />}  />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
