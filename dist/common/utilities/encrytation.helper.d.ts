declare class Encryptation {
    static encryptPassword(pass: string): Promise<string>;
    static comparePassword(pass: string, hash: string): Promise<boolean>;
}
export default Encryptation;
