import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import PropTypes from 'prop-types'

const NewBlogForm = ({
  handleBlog,
  newtitle,
  newauthor,
  newurl,
  setNewAuthor,
  setNewTitle,
  setNewUrl
}) => (
  <form onSubmit={handleBlog}>
    <div>
      Title
      <input
        value={newtitle}
        onChange={({ target }) => setNewTitle(target.value)} />
    </div>
    <div>
      Author
      <input
        value={newauthor}
        onChange={({ target }) => setNewAuthor(target.value)} />
    </div>
    <div>
      Url
      <input
        value={newurl}
        onChange={({ target }) => setNewUrl(target.value)}/>
    </div>
    <button type="submit">tallenna</button>
  </form>
)

NewBlogForm.propTypes = {
  handleBlog: PropTypes.func.isRequired,
  newtitle: PropTypes.func.isRequired,
  newauthor: PropTypes.func.isRequired,
  newurl: PropTypes.func.isRequired,
  setNewAuthor: PropTypes.func.isRequired,
  setNewTitle: PropTypes.func.isRequired,
  setNewUrl: PropTypes.func.isRequired
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [newauthor, setNewAuthor] = useState('')
  const [newtitle, setNewTitle] = useState('')
  const [newurl, setNewUrl] = useState('')
  const [FormVisible, setFormVisible] = useState(false)
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleAddBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newtitle,
      author: newauthor,
      url: newurl,
      likes: 0,
      userId: user.id
    }

    blogService
      .create(blogObject).then(r => {
        setBlogs(blogs.concat(r))
        setNewAuthor('')
        setNewTitle('')
        setNewUrl('')
      })
  }

  const newBlogform = () => {
    const hideWhenVisible = { display: FormVisible ? 'none' : '' }
    const showWhenVisible = { display: FormVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setFormVisible(true)}>Lisää uusi blogi</button>
        </div>
        <div style={showWhenVisible}>
          <NewBlogForm
            handleBlog = {handleAddBlog}
            newtitle = {newtitle}
            newauthor = {newauthor}
            newurl = {newurl}
            setNewAuthor = {setNewAuthor}
            setNewTitle = {setNewTitle}
            setNewUrl = {setNewUrl}
          />
          <button onClick={() => setFormVisible(false)}>peruuta</button>
        </div>
      </div>
    )
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('käyttäjätunnus tai salasana virheellinen')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    console.log('logging in with', username, password)
  }
  const handleLogOut = () => {
    window.localStorage.removeItem('loggedBlogappUser')
  }

  if (user === null) {
    return (
      <div>
        <h2>Kirjaudu Blogilistaan</h2>
        <form onSubmit={handleLogin}>
          <div>
          käyttäjätunnus
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
          salasana
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">kirjaudu</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h1>Blogilista</h1>
      <p>Kirjautuneena nimellä: {user.name}</p>
      <form onSubmit={handleLogOut}>
        <button type = "submit">Kirjaudu ulos</button>
      </form>
      <h2>Add new Blog</h2>
      {newBlogform()}
      <h2>Blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}

    </div>
  )
}

export default App
