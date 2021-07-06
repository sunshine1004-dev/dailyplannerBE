const qraphql = require("graphql");
const getUserId = require("../utils/getUserId");
const { DateScalarType } = require("../schema/types");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = qraphql;

const Day = require("../models/day");

const AddOrderResponseType = new GraphQLObjectType({
  name: "AddOrderResponseType",
  fields: () => ({
    userId: { type: GraphQLID },
    gratefulFor: { type: GraphQLString },
    createdAt: {
      type: DateScalarType,
    },
  }),
});

module.exports = {
  addDay: {
    type: AddOrderResponseType,
    args: {
      gratefulFor: { type: GraphQLString },
    },

    async resolve(_, args) {
      try {
        const { gratefulFor } = args;
        const userId = getUserId(req);
        const now = new Date();
        const day = {
          userId,
          gratefulFor,
          createdAt: now,
        };

        const newDay = new Day(day);
        await newDay.save();

        return day;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
