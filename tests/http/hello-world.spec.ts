import { test, describe } from 'bun:test'
const { LOCAL_URL = '' } = process.env

describe('HTTP Tests', () => {
  test('hello world', async () => {
    const response = await fetch(`${LOCAL_URL}/`)
    const text = await response.text()
    console.log(text)
  })

  test('payload', async () => {
    const response = await fetch(`${LOCAL_URL}/payload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
    })
    const data = await response.json()
    console.log(data)
  })
})

describe('users', () => {
  test('get users', async () => {
    const response = await fetch(`${LOCAL_URL}/users`)
    const data = await response.json()
    console.log(data)
  })
  test('post user', async () => {
    const response = await fetch(`${LOCAL_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: 3 }),
    })
    const data = await response.json()
    console.log(data)
  })
})

