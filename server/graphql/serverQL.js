const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("./resolvers");
const LaunchAPI = require("./datasources/launch");
const typeDefs = gql(
  fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")
);

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
  }),
  // introspection: false,
  // playground: false,
});
