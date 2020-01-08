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


  
  module.exports = {
    dummy,
    totalLikes
  }


