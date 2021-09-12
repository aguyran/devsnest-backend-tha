# Notes

Middlewares can be said as something which runs in the middle of the desired action or before it.
Like we can have a middleware which can check if the user has correct permissions run before every call

We can use app.use() to apply middleware to all the routes but it should be before declaring the route or it won't work

We can also pass multiple functions in params of routes and they would be executed in order and we can use next argument passed in the callback to jump from one function to other

Paths are relative on express.use so might use path.join to get absolute

Multiple ways to make queries like in json, form data ,graphql, binary mostly json and form data are use.

We can use body_parser to parse req.body which is also a middleware

Body parser constructor is depreceated use express.urlencoded or express.json in express 4.16^
