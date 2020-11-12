const { ApolloServer, gql } = require("apollo-server");

//  Toda request é POST
//  Toda request bate no MESMO endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipulação dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "Hello word",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
// startar o servidor
server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
