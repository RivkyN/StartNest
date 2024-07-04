"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false,
    database: {
        host: 'localhost',
        port: 5432,
        username: 'username',
        password: 'password',
        database: 'my_database',
    },
    api: {
        baseUrl: 'https://api.example.com',
        timeout: 5000,
    },
    server: {
        port: process.env.PORT || 3000,
    },
};
//# sourceMappingURL=environment.js.map