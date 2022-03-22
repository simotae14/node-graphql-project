const express = require('express');

const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
  type Query {
    description: String
    price: Float
  }
`);

const root = {
  description: 'Red Shoe',
  price: 42.12,
};

const app = express();

// use the express-graphql middleware
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root
}));

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});
