#!/bin/sh

if [ "$1" == "create-db" ]; then
    docker exec -it app-db dropdb -U postgres management-app
    docker exec app-db createdb -U postgres management-app
elif [ "$1" == "create-table" ]; then
    docker cp ./table.sql app-db:/table.sql
    docker exec -it app-db psql -U postgres -d management-app -f ./table.sql
elif [ "$1" == "insert-testdata" ]; then
    docker cp ./testdata.sql app-db:/testdata.sql
    docker exec -it app-db psql -U postgres -d management-app -f ./testdata.sql
elif [ "$1" == "check" ]; then
    docker exec -it app-db psql -U postgres -d management-app -c "SELECT * FROM products"
else
    echo "syntax error."
fi
