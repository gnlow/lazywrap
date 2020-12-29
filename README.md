# lazywrap
Lazy-load async properties
## Use
```ts
import {Lw, LwInterface} from "https://denopkg.com/gnlow/lazywrap@main/mod.ts"

class User {
    @Lw("load") id!: Lw<number>
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
// Apply `Lw` to optional properties
/*
    {
        id: number
        title: Lw<string>
    }
*/
```