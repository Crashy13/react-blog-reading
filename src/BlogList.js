import { Component } from 'react';

function BlogList(props) {

  const blogs = props.blogs.map((blog) =>(
    <li key={blog.title}>
    <p>{blog.title}</p>
    <p>{blog.article}</p>
    </li>
  ));
  return(
    <ul>{ blogs }</ul>
  )
}


export default BlogList
