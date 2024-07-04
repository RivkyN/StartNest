// src/environment.ts

export const environment = {
    production: false, // Set to true in production environment
  
    // Example database configuration
    database: {
      host: 'localhost',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'my_database',
    },
  
    // Example API configuration
    api: {
      baseUrl: 'https://api.example.com',
      timeout: 5000, // milliseconds
    },
  
    // Example server configuration
    server: {
      port: process.env.PORT || 3000,
    },
  };
  