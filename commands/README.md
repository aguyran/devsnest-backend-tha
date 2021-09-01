## Day 1

### Redis

redis-cli to start redis Terminal

To set a key with a value

`SET KEY VALUE`

To delete a key

`DEL KEY`

To check if a key exists in the store returns 1 for true 0 for false

`EXISTS KEY`

To check the keys inside the store

`KEYS*`

To delete all the keys

`FLUSHALL`

Check Time to live or expiration time

`ttl KEY`

Set TTL or expiration time on existing key

`expire KEY timeInSeconds`

Set key with TTL

`SETEX KEY timeInSeconds VALUE`

Push a value from the left or before 0 index

`LPUSH KEY VALUE`

Push a value from the right or after last index

`RPUSH KEY VALUE`

Pop a value from the left or pop 0 index

`LPOP KEY VALUE`

Pop a value from the right or pop last index

`RPOP KEY VALUE`

Display an array type as GET only works on string can use -1 for last element like python

`LRANGE KEY startingIndex endingIndex`

Add value in set

`SADD KEY value`

Display all members in a key of Set Type

`SMEMBERS KEY`

Set a key value inside a key

`HSET ParentKEY KEY VALUE`

Get a key value inside a key

`HGET ParentKEY KEY VALUE`

Get all the keys and their value inside a key

`HGETALL ParentKey`

Delete a key inside a key

`HDEL parentKey Key`

check if a key has a key

`HEXISTS parentKey key`

### POSTGRES

Note- ( All commands are usually written in uppercase in postgres but with newer version you can type in lower case too )

Write a semicolon after every command

Login in Postgres

`psql -U username`

Create User

`create user <username> with password <yourpassword>`

Create database

`create database <databaseName>`

Grant all privileges to a user

`grant all privileges on database <databaseName> to <username>`

Grant separate privilege to a user

`grant <privilege> on database <databaseName> to <username>`

Connect to a database

`\c <databaseName>`

List databases

`\l`

List all users in postgres

`\du`

Drop a database

`drop database <databaseName>`

Create table in a database (make sure you are connected to the right database)

`create table <tableName>( <column> Type Key/Constraint, <column> . . . )`

Describe a table/relation schema/structure

`\d <tableName>`

Quit postgres

`\q`
