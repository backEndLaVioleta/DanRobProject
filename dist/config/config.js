"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    database: {
        type: 'mongodb',
        url: process.env.MONGODB_CONNECTION_STRING,
        port: process.env.DB_PORT || 27017,
        database: process.env.DATABASE || 'recetario-blossh',
        entities: ['dist/**/entities/*.entity.js'],
        ssl: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
});
//# sourceMappingURL=config.js.map