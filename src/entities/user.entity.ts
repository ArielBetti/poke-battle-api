import { provide } from "inversify-binding-decorators";
import { randomUUID } from "node:crypto";

@provide(User)
class User {
    public name: string;
    public email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

export { User };
