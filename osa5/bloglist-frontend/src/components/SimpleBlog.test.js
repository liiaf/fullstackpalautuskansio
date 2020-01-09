import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders title', () => {
  const blog = {
    title: 'Otsikko tulee oikein',
    author: 'Kirjoittaja tulee oikein',
    url: 'url tulee oikein',
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  expect(component.title).toHaveTextContent(
    'Otsikko tulee oikein'
  )
  expect(component.author).toHaveTextContent(
    'Kirjoittaja tulee oikein'
  )
  expect(component.url).toHaveTextContent(
    'url tulee oikein'
  )
})