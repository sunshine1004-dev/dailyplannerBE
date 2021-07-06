const { GraphQLObjectType } = require("graphql");
const DaysMutations = require("./days");
const UsersMutations = require("./users");

module.exports = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...DaysMutations,
    ...UsersMutations,
  },
});
