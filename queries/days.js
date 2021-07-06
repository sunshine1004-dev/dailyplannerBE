const { GraphQLList, GraphQLID, GraphQLString } = require("graphql");
const { DayType } = require("../schema/types");
const Day = require("../models/day");

module.exports = {
  day: {
    type: DayType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(_, args) {
      return Day.findById(args.id);
    },
  },
};
