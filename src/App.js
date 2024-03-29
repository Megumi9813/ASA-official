import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import About from "./pages/About";
import Footer from "./components/Footer";
import useContentful from "./useContentful";
import Programs from "./pages/Programs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "./pages/Book";
import ScrollBackToTop from "./ScrollBackToTop";
import ProgramIntro from "./pages/ProgramIntro";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import Calendar from "./pages/Calendar";
import Contact from "./components/Contact";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Teachers from "./components/Teachers";
import BlogPage from "./pages/BlogPage";
import Nav from "./components/Nav";

function App() {
  ScrollBackToTop();
  const [teachers, setTeachers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);
  const { getData } = useContentful();

  useEffect(() => {
    const fetchTeachers = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "teachers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setTeachers(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeachers();
    const fetchBlogs = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
    const fetchTestimonials = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setReviews(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    getData().then((res) => {
      // setTeachers(res.teacherSanitizedResponse);
      // setBlogs(res.blogSanitizedResponse);
      setTestimonials(res.testimonialSanitizedResponse);
    });
  }, [blogs]);

  return (
    <div className="App">
      <Contact contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <ScrollToTop />
      <Nav contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <Routes>
        <Route
          path="/"
          element={<Home teachers={teachers} reviews={reviews} />}
        />
        <Route
          path="/About"
          element={<About teachers={teachers} testimonials={testimonials} />}
        />
        <Route
          path="/Programs"
          element={<Programs testimonials={testimonials} />}
        />
        <Route path="/Booking" element={<Book teachers={teachers} />} />
        <Route path="/Blog" element={<Blogs blogs={blogs} />} />
        <Route path="/ProgramIntro" element={<ProgramIntro />} />
        <Route path="/Booking/calendar" element={<Calendar />} />
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <Route
              path={"/Blog/" + blog.id}
              element={<BlogPage blog={blog} />}
            />
          ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
