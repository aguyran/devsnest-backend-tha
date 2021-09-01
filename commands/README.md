## Redis

`redis-cli` to start redis Terminal

### To set a key with a value

`SET KEY VALUE`

### To delete a key

`DEL KEY`

### To check if a key exists in the store returns 1 for true 0 for false

`EXISTS KEY`

### To check the keys inside the store

`KEYS*`

### To delete all the keys

`FLUSHALL`

### Check Time to live or expiration time

`ttl KEY`

### Set TTL or expiration time on existing key

`expire KEY timeInSeconds`

### Set key with TTL

`SETEX KEY timeInSeconds VALUE`

### Push a value from the left or before 0 index

`LPUSH KEY VALUE`

### Push a value from the right or after last index

`RPUSH KEY VALUE`

### Pop a value from the left or pop 0 index

`LPOP KEY VALUE`

### Pop a value from the right or pop last index

`RPOP KEY VALUE`

Display an array type as GET only works on string can use -1 for last element like python

`LRANGE KEY startingIndex endingIndex`

### Add value in set

`SADD KEY value`

### Display all members in a key of Set Type

`SMEMBERS KEY`

### Set a key value inside a key

`HSET ParentKEY KEY VALUE`

### Get a key value inside a key

`HGET ParentKEY KEY VALUE`

### Get all the keys and their value inside a key

`HGETALL ParentKey`

### Delete a key inside a key

`HDEL parentKey Key`

### check if a key has a key

`HEXISTS parentKey key`

## PostG res

Note- ( All commands are usually written in uppercase in postgres but with newer version you can type in lower case too )

Write a semicolon after every command

### Login in Postgres

`psql -U username`

### Create User

`create user <username> with password <yourpassword>`

### Create database

`create database <databaseName>`

### Grant all privileges to a user

`grant all privileges on database <databaseName> to <username>`

### Grant separate privilege to a user

`grant <privilege> on database <databaseName> to <username>`

### Connect to a database

`\c <databaseName>`

### List databases

`\l`

### List all users in postgres

`\du`

### Drop a database or a table or empty schema

`drop database <databaseName>`

`drop table <tableName>`

`drop schema <schemaName>`

### Create table in a database (make sure you are connected to the right database)

`create table <tableName>( <column> Type Key/Constraint, <column> . . . )`

### Describe a table/relation schema/structure

`\d <tableName>`

### Quit postgres

`\q` or `quit`

### Conditional drop

`drop <type> if exists <Name>`

### Create Schema inside a database

`create schema <schemaName>`

### Create table inside a schema

`create table <schemaName>.<tableName>( <column> Type Key/Constraint, <column> . . . )`

### Drop a schema if it is not empty

`drop schema <schemaName> cascade`

### Insert values inside a table/relation

`insert into <tableName>(<columnName>,<columnName>,....) values(<value>,<value>,...)`

### Display every column in a table/relation

`select * from <tableName>`

### Give alias to a select result (exists only for duration of a query)

`Select (10+10) as example`

### Count number of records in a table/relation

`select count(*) from <tableName>`

### Get current time

`select CURRENT_TIMESTAMP`

### Where clause or how to add a condition

`select * from <tableName> where <columnName> <condition>`

`ex- select * from ex where age>=10 and name!=NULL;`

### Where clause with is

`select * from <tableName> where <columnName> <condition>`

`ex- select * from ex where age>=10 and name is not NULL;`

### Where clause with like

`select * from <tableName> where <columnName> like <query>`

queries:

- match starting letter but not rest assuming P

  `P%`

- match any character at a fixed position and length

  `P___`

### Find values in a range

`select * from <tableName> where <columName> between <value> and <value>`

### Find values in a provided list or a set of values

`select * from <tableName> where <columnName> in (value,value,...)`

### Update values in a table with a condition

`update <tableName> set <columnName> = <value> <condition>`

### Delete values in a table with a condition

`delete from <tableName> where <condition>`

In case id is not provided if we set the constraint to generated always as identity it will auto generate
ex-
`create table hello (customer_id int generated always as identity)`


### Type casting

`select * from <tableName> where <columnName>::<Type>`

### Foreign Key

Create two tables and when creating second table you can add after last column after a comma

`foreign_key(<columnName>) references <table1name>(<columnName>) on <condition>`

condition example

- delete from second table too if the key is deleted in the table the key is referenced from

  `on delete cascade`