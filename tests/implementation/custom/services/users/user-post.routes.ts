export const UserGetRoute = {
  path: '/api/users',
  method: 'GET',
  validation: {
    query: () => true,
    body: () => true,
  },
  handler: () => new Response('list users')
}
