# Test01 - Docker & Cloudflare Workers Projekat

Test projekat koji koristi Docker za lokalni development i Cloudflare Workers za production deployment.

## Zahtevi

- Docker i Docker Compose (za lokalni development)
- Node.js 18+ (za Cloudflare Workers deployment)
- Wrangler CLI (Cloudflare Workers CLI)

## Pokretanje lokalno (Docker)

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

### Pristup aplikaciji

Otvori browser na: `http://localhost:5000`

### Zaustavljanje

```bash
# Docker Compose
docker-compose down

# Docker
docker stop test01-app
docker rm test01-app
```

## Cloudflare Workers Deployment

### Instalacija Wrangler-a

```bash
npm install
```

### Testiranje lokalno

```bash
npm run dev:worker
```

### Deploy na Cloudflare

```bash
# Prvo se uloguj u Cloudflare
wrangler login

# Deploy worker-a
npm run deploy
```

### Konfiguracija

Uredi `wrangler.toml` fajl sa tvojim Cloudflare podacima:
- `name` - naziv worker-a
- `account_id` - tvoj Cloudflare account ID (opciono)

## Struktura projekta

```
Test01/
├── Dockerfile              # Docker image konfiguracija
├── docker-compose.yml      # Docker Compose konfiguracija
├── package.json           # Node.js zavisnosti i skripte
├── server.js              # Express server (lokalni development)
├── worker.js              # Cloudflare Worker (production)
├── wrangler.toml          # Cloudflare Workers konfiguracija
├── .dockerignore          # Docker ignore fajlovi
└── README.md              # Dokumentacija
```

## Razlike između Docker i Cloudflare verzija

- **Docker verzija** (`server.js`): Pun Express server za lokalni development
- **Cloudflare verzija** (`worker.js`): Lightweight edge worker sa istim dizajnom

Obe verzije prikazuju istu stranicu sa lepim dizajnom.
