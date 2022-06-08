# Tokari
One stop solution to all your crypto investments.

## How to run?

In order to run your app, use docker-compose to start the containers for `mongodb`, `nodejs` and `react`.
```bash 
docker-compose up -d 
```
If you have made any changes in the `docker-compose.yml`, you have to rebuild it as following:
```bash 
docker-compose up -d --build
```

To shutdown the containers:
```bash 
docker-compose down
```

To restart the containers use:
```bash
docker-compose restart
```

## Folder structure

    .
    ├── client                          # React code source
    │   ├── Dockerfile
    │   ├── nginx
    │   │   └── default.conf
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   └── manifest.json
    │   └── src
    │       ├── App.css
    │       ├── App.js
    │       ├── components
    │       ├── constants
    │       ├── index.css
    │       └── index.js
    ├── docker-compose.yml              # docker-compose to start and stop the containers
    ├── LICENSE
    ├── README.md
    └── server                          # NodeJs code source
        ├── Dockerfile
        ├── index.js
        ├── node_modules
        ├── package.json
        ├── package-lock.json
        └── src
            ├── db.js                   # Connecting and setting up the mongo database
            ├── models                  # Defining the schema for the database
            └── routes                  # Defining the set of routes for the websites