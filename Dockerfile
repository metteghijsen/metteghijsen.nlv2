# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Install deps (better layer caching)
COPY package*.json ./
RUN npm ci || npm install

# Copy the rest and generate static site
COPY . .
# Nuxt 3:
RUN npx nuxi generate -y
# Nuxt 2 (instead): 
# RUN npx nuxt generate

# --- Runtime stage: Apache httpd ---
FROM httpd:2.4

# Optional: replace base httpd.conf with our own to include vhost + SPA fallback
COPY ./apache/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./apache/metteghijsen.nl.conf /usr/local/apache2/conf/extra/metteghijsen.nl.conf

# Copy Nuxt output into htdocs
# Nuxt 3:
COPY --from=build /app/.output/public/ /usr/local/apache2/htdocs/
# Nuxt 2 (instead):
# COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
