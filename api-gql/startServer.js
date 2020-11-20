import { ApolloServer } from "apollo-server";

function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolver });
  server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
}
