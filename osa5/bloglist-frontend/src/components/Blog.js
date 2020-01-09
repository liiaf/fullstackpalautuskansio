import React, { useState } from 'react'


const Blog = ({ blog, blogs}) => {
  const [blogVisible, setBlogVisible] = useState(true)
  const hideWhenVisible = { display: blogVisible ? 'none' : '' }
  const showWhenVisible = { display: blogVisible ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  let loggedUser = window.localStorage.getItem('loggedBlogappUser')
  let loggedUserParse = JSON.parse(loggedUser)

  const addLike = async (id) => {
    const blog = blogs.find(b => b.id === id)
    const changedBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id
    }
     
  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible} onClick={() => setBlogVisible(!blogVisible)}>
        <p>{blog.title}, {blog.author}, {blog.url}, {blog.likes} likes <button onClick={() => addLike(blog.id)}>like</button></p>
       
      </div>
      <div style={showWhenVisible} onClick={() => setBlogVisible(!blogVisible)}>
        <p>{blog.title}, {blog.author}</p>
      </div>
    </div>
  )
}

export default Blog