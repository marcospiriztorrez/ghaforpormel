FROM --platform=linux/amd64 node:18 AS deps
WORKDIR /app
COPY package.json .
RUN npm install

FROM --platform=linux/amd64 node:18 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM --platform=linux/amd64 node:18 AS runner
WORKDIR /app
COPY package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3001

CMD ["npm", "run", "start"]