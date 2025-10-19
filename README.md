# Test01 - Docker Projekat

Test projekat koji koristi Docker i prikazuje se na portu 5000.

## Zahtevi

- Docker
- Docker Compose

## Pokretanje

### Korišćenjem Docker Compose (preporučeno)

```bash
docker-compose up -d
```

### Korišćenjem Docker-a

```bash
# Build image
docker build -t test01-app .

# Run container
docker run -d -p 5000:5000 --name test01-app test01-app
```

## Pristup aplikaciji

Otvori browser na: `http://localhost:5000`

## Zaustavljanje

```bash
# Docker Compose
docker-compose down

# Docker
docker stop test01-app
docker rm test01-app
```

## Struktura projekta

```
Test01/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── server.js
├── .dockerignore
└── README.md
```
