const { ApolloServer, gql } = require("apollo-server");

//  Toda request é POST
//  Toda request bate no MESMO endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipulação dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID

// types
const typeDefs = gql`
  # Typs
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }
  type Post {
    _id: ID!
    title: String!
    content: String!
    author: [User!]!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }

  # Multation
  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  {
    _id: String(Math.random()),
    name: "Rayza",
    email: "rayza.ocr@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()),
    name: "Rayza2",
    email: "rayza.ocr2@gmail.com",
    active: false,
  },
  {
    _id: String(Math.random()),
    name: "Rayza3",
    email: "rayza.ocr3@gmail.com",
    active: true,
  },
];

const resolvers = {
  // queries
  Query: {
    hello: () => "Hello word",
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    },
  },
  // mutations
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true,
      };

      user.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
// startar o servidor
server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));

// 1 - Para que serve, conceitos e Hello World
// 2 - Types,Queries e Multation no GraphQL
// 3 - API GraphQL: Configurando seridor com Apollo Server e MongoDB com Mongoose
// 4 - API GraphQL: Criando os Schemas e Resolvers
// 5 - Real-time (WebSockets) com GraphQL Subscriptions
