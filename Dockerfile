# Koristi Node.js kao baznu sliku
FROM node:18-alpine

# Postavi radni direktorijum
WORKDIR /app

# Kopiraj package.json i package-lock.json
COPY package*.json ./

# Instaliraj zavisnosti
RUN npm install --production

# Kopiraj ostatak aplikacije
COPY . .

# Otvori port 5000
EXPOSE 5000

# Pokreni aplikaciju
CMD ["npm", "start"]
