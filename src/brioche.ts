import { Glob, type BunRequest } from 'bun'

export type Role = 'VIEW' | 'CREATE' | 'UPDATE' | 'DELETE'

export type RouteMethod = {
  resource: string
  role: Role
  handler: (req: BunRequest) => Promise<Response> | Response
}

export type BriocheRoute<T = BunRequest> = {
  route: string
  role: Role
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  handler: (req: T) => Promise<Response> | Response
}

export type BriocheConfig = {
  prepend: string
  port: number
  glob: string
  glob_path: string
}

export const BRIOCHE_DEFAULT_CONFIG: BriocheConfig = Object.freeze({
  prepend: '/api',
  port: 3000,
  glob: '**/*.route.ts',
  glob_path: './',
})

const briocheRoute: BriocheRoute = {
  route: 'users',
  role: 'VIEW',
  method: 'GET',
  handler: async (req: BunRequest) => {
    return new Response('GET response')
  }
}

export default async function bake_brioche(options: Partial<BriocheConfig> = {}) {
  const config = Object.assign({}, BRIOCHE_DEFAULT_CONFIG, options)
  const g = new Glob(config.glob)
  for await (const file of g.scan(config.glob_path)) {
    console.log(file)
  }
}

// const test: BriocheRoute = {
//   route: '/path/to/route',
//   GET: {
//     resource: 'users',
//     role: 'VIEW',
//     handler: async (req: BunRequest) => {
//       return new Response('GET response')
//     },
//   },
//   POST: {
//     resource: 'users',
//     role: 'CREATE',
//     handler: async (req: BunRequest) => {
//       return new Response('POST response')
//     }
//   }
// }

// 'users:VIEW'
// 'users:CREATE'