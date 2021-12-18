# graphql-using-apollo-server-express

This is a test project with randomly generated mock data.
In a real-world case we could use any sort of db to get data.
With the use of graphql we expose our db under a single endpoint.
I use apollo server for this solution. In this project i implemented a 
solution where our classic rest APIs can be hosted side to side with our graphql server.
Download the project, run `npm install` and `node app.js` and query the data using graphql 
in `http://localhost:4000/graphql/`. The classic APIs will be hosted on `http://localhost:4000/rest`.
The project is not complete, i have a lot of things to add to mutations and resolvers, so you can 
mutate the data with graphql queries. :boom:
