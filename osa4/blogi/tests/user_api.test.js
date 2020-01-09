const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const initialUsers = [
    {
        username: "1",
        name: "Name 1",
        password: "password1"
    },
    {
        username: "2",
        name: "Name 2",
        password: "password2"
    },
    {
        username: "3",
        name: "Name 3",
        password: "password3"
    }
]

beforeEach(async () => {
    await User.remove({})
    const saltRounds = 10
    let passWordHash = await bcrypt.hash(initialUsers[0].password, saltRounds)
    let userObject = new User({
        username: initialUsers[0].username,
        name: initialUsers[0].name,
        passWordHash,
    })
    await userObject.save()
    passWordHash = await bcrypt.hash(initialUsers[1].password, saltRounds)
    userObject = new User({
        username: initialUsers[1].username,
        name: initialUsers[1].name,
        passWordHash,
    })
    userObject.save()
    passWordHash = await bcrypt.hash(initialUsers[2].password, saltRounds)
    userObject = new User({
        username: initialUsers[2].username,
        name: initialUsers[2].name,
        passWordHash,
    })
    await userObject.save()
})

describe('get all', () => {
    test('all users are returned as json', async () => {
      const response = await api.get('/api/users')
      expect(response.type).toEqual("application/json")
      expect(response.body.length).toBe(initialUsers.length)
    })
})
afterAll(() => {
    mongoose.connection.close()
})