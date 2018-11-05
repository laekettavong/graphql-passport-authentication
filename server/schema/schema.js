const graphql = require('graphql');
const { GraphQLSchema } = graphql;
import mutation from './mutations'

const RootQueryType = require('./types/root_query_type');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
  
});
