const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    notes(parent, args, ctx, info) {
      return ctx.db.query.posts({ }, info)
    },
    note(parent, args, ctx, info) {
      return ctx.db.query.post({ where: { id: args.id } }, info)
    },
    users(parent, args, ctx, info) {
      return ctx.db.query.users({ }, info )
    }, 
    user(parent, args, ctx, info) {
      return ctx.db.query.user({where: {id: args.id}}, info)
    }
  },
  Mutation: {
    createNote(parent, { text, user }, ctx, info) {
      return ctx.db.mutation.createNote(
        {
          data: {
            text,
            user: user.id
          },
        },
        info,
      )
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './generated/prisma.graphql', // the generated Prisma DB schema
      endpoint: 'https://us1.prisma.sh/brandon-dd6787/app-sandbox/dev',          // the endpoint of the Prisma DB service
      //secret: 'mysecret123',                    // specified in database/prisma.yml
      debug: true,                              // log all GraphQL queries & mutations
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))