const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const schema2 = require('./graphql/schema');
const resolver = require('./graphql/resolvers')

const app = express();
const { graphqlHTTP } = require('express-graphql');
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))
app.use('/graphql2', expressGraphQL({
    schema: schema2,
    resolver: resolver
}));


app.listen(4000, ()=> {
    console.log('listening');
})