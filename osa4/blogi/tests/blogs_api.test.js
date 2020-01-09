const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app);
const Blog = require('../models/blog.js')
const User = require('../models/user.js')
const blogData = require('./blogData.js')

const { getBlogs } = require('./apu.js')



beforeAll(async () => {
    await Blog.remove({});

    const blogObjects = blogData.blogs.map(blog => new Blog(blog));
    const promiseArray = blogObjects.map(blog => blog.save());
    await Promise.all(promiseArray);
})



describe('GET request to /api/blogs', () => {

    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all blogs are returned', async () => {
        const response = await api.get('/api/blogs')

        expect(response.body.length).toBe(blogData.blogs.length)
    })



})

test('a valid blog can be added ', async () => {

    const newBlog = {
        id: "6",
        title: "Testiblogi",
        author: "Testaaja",
        url: "Testiblogi-sivusto",
        likes: 0

    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    
      const response = await api.get('/api/blogs')
    
      expect(response.body.length).toBe(blogData.blogs.length+1)
})

    test('likes will be defaulted to zero', async () => {
        const response = await api
            .post('/api/blogs')
            .send(blogData.noLikes);

        const blog = response.body;
        expect(blog.likes).toBe(0);
    })

    test('blog with no title will be responded with code 400', async () => {
        await api
            .post('/api/blogs')
            .send(blogData.noTitle)
            .expect(400);
    })

    test('blog with no url will be responded with code 400', async () => {
        await api
            .post('/api/blogs')
            .send(blogData.noUrl)
            .expect(400);
    })





afterAll(() => {
    mongoose.connection.close()
})