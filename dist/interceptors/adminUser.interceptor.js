"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUser = void 0;
const common_1 = require("@nestjs/common");
exports.AdminUser = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    console.log(request);
    console.log(request.userId);
    return 'hi there';
});
//# sourceMappingURL=adminUser.interceptor.js.map