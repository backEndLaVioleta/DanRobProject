"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api/v1';
    app.setGlobalPrefix(globalPrefix);
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('Blossh Recipes')
        .setDescription('Dan & Rob Api and MongoDB')
        .setVersion('1.0')
        .addTag('Hospitality App')
        .build();
    const docSwagger = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('test', app, docSwagger);
    try {
        const port = process.env.PORT;
        await app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    }
    catch (error) {
        throw new Error(`${error.message}`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map