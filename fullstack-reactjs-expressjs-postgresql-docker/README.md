# start all container
```sh
docker-compose up
```

# database
```sh
cd database
./script.sh create-db
./script.sh create-table
./script.sh insert-testdata
./script.sh check
```
