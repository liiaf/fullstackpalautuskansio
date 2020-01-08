const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog.js');
const blogData = require('./blogdata.js');


beforeAll(async () => {
    await Blog.remove({});

    const blogObjects = blogData.blogs.map(blog => new Blog(blog));
    const promiseArray = blogObjects.map(blog => blog.save());
    await Promise.all(promiseArray);
})

const api = supertest(app)

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
            .expect(200)
            .expect('Content-Type', /application\/json/)
        
          const response = await api.get('/api/blogs')
        
          expect(response.body.length).toBe(blogData.blogs.length+1)
    })

})




afterAll(() => {
    mongoose.connection.close()
})