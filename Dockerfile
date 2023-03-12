FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production && npm cache clean --force && npm install -g typescript
COPY . .
CMD ["npm", "run", "start"]
# Expose port
EXPOSE 8080:8080