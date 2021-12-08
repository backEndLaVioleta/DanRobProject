import * as bcrypt from 'bcrypt';

class Encryptation {
  static async encryptPassword(pass: string) {
    return await bcrypt.hash(pass, 10);
  }

  static async comparePassword(pass: string, hash: string) {
    return await bcrypt.compare(pass, hash);
  }
}

export default Encryptation;