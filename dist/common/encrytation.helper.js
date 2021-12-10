"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
class Encryptation {
    static async encryptPassword(pass) {
        return await bcrypt.hash(pass, 10);
    }
    static async comparePassword(pass, hash) {
        return await bcrypt.compare(pass, hash);
    }
}
exports.default = Encryptation;
//# sourceMappingURL=encrytation.helper.js.map