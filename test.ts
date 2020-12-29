import {Lw} from "./mod.ts"

class User {
    @Lw("load") id!: Lw<number>
    async log() {
        console.log("id", await this.id)
    }
    async load() {
        this.id = Math.random()
    }
}
const user1 = new User
await user1.log()