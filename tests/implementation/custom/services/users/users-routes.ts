import type { BunRequest } from 'bun'
import { type BriocheRoute } from '../../../../src/brioche'

export const UserRoutes: BriocheRoute[] = [
  {
    route: '/users',
    GET: {
      resource: 'users',
      role: 'VIEW',
      handler: async (req) => {
        return new Response('User list')
      },
    },
    POST: {
      resource: 'users',
      role: 'CREATE',
      handler: async (req) => {
        const body = await req.json()
        return new Response('User created', { status: 201 })
      },
    },
  },
  {
    route: '/users/:id',
    GET: {
      resource: 'user',
      role: 'VIEW',
      handler: async (req: BunRequest<'/users/:id'>) => {
        const { id } = req.params
        return new Response(`User ${id}`)
      },
    },
    PATCH: {
      resource: 'user',
      role: 'UPDATE',
      handler: async (req) => {
        const { id } = req.params
        const body = await req.json()
        return new Response(`User ${id} updated`)
      },
    },
    DELETE: {
      resource: 'user',
      role: 'DELETE',
      handler: async (req) => {
        const { id } = req.params
        return new Response(`User ${id} deleted`, { status: 204 })
      },
    },
  },
]