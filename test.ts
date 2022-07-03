import {Lw, LwInterface} from "./mod.ts"

class User {
    @Lw("load") declare id: Lw<number>
    async log() {
        console.log("id", await this.id)
    }
    async load() {
        await new Promise(r => setTimeout(r, 1000))
        this.id = Math.random()
    }
}
const user1 = new User
await user1.log()

interface Music {
    id: number
    title?: string
}
type LwMusic = LwInterface<Music>