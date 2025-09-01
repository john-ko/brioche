import type { BunRequest } from 'bun'

export const UserRoutes = {
  '/users': {
    GET: async (req: BunRequest) => {
      const users = [{ user: 1 }, { user: 2 }]
      return Response.json(users)
    },
    POST: async (req: BunRequest) => {
      const body = await req.json() as Record<string, unknown>
      return Response.json({ created: true, ...body })
    }
  }
}