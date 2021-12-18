
const { ApolloServer } = require("apollo-server-express");

const express = require("express");
require("dotenv").config();
const users = require("./SingletonDataObjects/UsersSingleton");
const comments = require("./SingletonDataObjects/CommentsSingleton");
const posts = require("./SingletonDataObjects/PostsSingleton");

//graphql server

//types query/mutation/subscription
const typeDefs = `
    type Company {
        name: String
        catchPhrase: String
        bs: String
    }
    
    type Geo {
        lat: String
        lng: String
    }
    
    type Address {
        street: String
        suite: String
        city: String
        zipcode: String
        geo: Geo
    }
    
    type User {
        id: Int
        name: String
        username: String
        email: String
        phone: String
        website: String
        company: Company
        address: Address
    }

    type Post {
        userId: Int
        id: Int
        title: String
        body: String
      }

    
    type Comment {
    postId: Int
    id: Int
    name: String
    email: String
    body: String
    }
    
    type Query {
        users: [User],
        posts: [Post],
        comments: [Comment]
    }

    `;

//resolvers
const resolvers = {
  Query: {
    users: () => {
        return users
    },
    posts: () => {
        return posts
    },
    comments: () => {
        return comments
    }
  },
};

const startServer = async () =>  {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer();

//express server
const app = express();


app.get("/rest", (req, res) => {
  res.json({
    data: "API is working...",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
});