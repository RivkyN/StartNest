"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const environment_1 = require("./environment");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(environment_1.environment.server.port || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map