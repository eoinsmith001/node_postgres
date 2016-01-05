# Node/Express API with PostGres backend

Mostly from [here](http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#postgres-setup)

## Preliminary
- `node models/create_db.js`
- `node models/create_table.js`

## Postgres

- To have launchd start postgresql at login: `ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents`
- Then to load postgresql now: `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist`
- Or, if you don't want/need launchctl, you can just run: `postgres -D /usr/local/var/postgres`

- connect with psql (mac)
- psql [cheat sheet](http://www.postgresonline.com/downloads/special_feature/postgresql83_psql_cheatsheet.pdf)

### `psql` commands

- `\l`: list all dbs
- `\connect __dbname__`: use that db 
- `\c __dbname__`: use that db (short) 
- `\dt`: list tables
- `\d+ __tablename__`: describe a table
