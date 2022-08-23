import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Blog({blog}) {
  return (
    <li className="blog_item">
        <img src={blog.img} alt="" />
        <div className="blog_info-wrapper">
            <p className="date color02 font01">{blog.date}</p>
            <h3 className='blog_title font02 color02'>{blog.title}</h3>
            <div className='blog_body'>{documentToReactComponents(blog.body)}</div>
            <button>Read More</button>
        </div> 
    </li>
  )
}

export default Blog