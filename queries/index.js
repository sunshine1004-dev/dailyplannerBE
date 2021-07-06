const qraphql = require("graphql");
const UserQueries = require("./users");
const DayQueries = require("./days");
const { GraphQLObjectType } = qraphql;

module.exports = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...UserQueries,
    ...DayQueries,
  },
});
