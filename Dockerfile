# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Copy only the Nuxt frontend folder
COPY ./frontend/package*.json ./
RUN npm ci || npm install

# Copy the full frontend source
COPY ./frontend ./

# Generate static site (Nuxt 3)
RUN npx nuxi generate -y
# If you're using Nuxt 2, comment the line above and uncomment below:
# RUN npx nuxt generate

# --- Runtime stage (Apache) ---
FROM httpd:latest

# Copy Apache configuration files
COPY ./apache/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./apache/metteghijsen.nl.conf /usr/local/apache2/conf/extra/metteghijsen.nl.conf

# Copy generated static site from build stage to Apache's htdocs
# Nuxt 3 output:
COPY --from=build /app/.output/public/ /usr/local/apache2/htdocs/
# Nuxt 2 output (fallback):
# COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# --- Add curl for health checks (Debian-based httpd image) ---
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl \
 && rm -rf /var/lib/apt/lists/*

# Optional, but recommended: verify the index exists (fail fast if build broke)
RUN test -f /usr/local/apache2/htdocs/index.html || (echo "index.html missing; did Nuxt generate succeed?" && exit 1)

# --- Built-in healthcheck: Swarm will only route traffic when this passes ---
HEALTHCHECK --interval=15s --timeout=3s --retries=3 --start-period=10s \
  CMD curl -fsS http://localhost/ || exit 1

# Expose port (not strictly required for Docker, but clarifies intent)
EXPOSE 80

