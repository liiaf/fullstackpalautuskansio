const dummy = () => {
    return 1
}

const totalLikes = (blogs) => {
    if (blogs.length === 0){
      return 0
    }
    const summa = (sum, blog) => {
        return sum + blog.likes
    }
    const total = blogs.reduce(summa, 0);
    return total
  }

  const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
      return null;
    }
  
    let suosikkiBlog = blogs[0]

    blogs.forEach((blog) => {
      if (blog.likes > suosikkiBlog.likes) {
        suosikkiBlog = blog;
      }
    })
  
    return {
      title: suosikkiBlog.title,
      author: suosikkiBlog.author,
      likes: suosikkiBlog.likes
    }
  }


  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }


