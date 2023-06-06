import React, { useEffect } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'react-router-dom'

function Blog({blog}) {

  // useEffect(() => {
  //   console.log(blog);
  // }, [])

  return (
    <Link to={blog.id} style={{textDecoration: "none"}}>
      <li className="blog_item">
        <img src={blog.img} alt="" />
        <div className="blog_info-wrapper">
          <p className="date color02 font01">{blog.date}</p>
          <h3 className="blog_title font02 color02">{blog.title}</h3>
          <div className="blog_body">
            {documentToReactComponents(blog.body)}
          </div>
          <button>Continue Reading</button>
        </div>
      </li>
    </Link>
  );
}

export default Blog