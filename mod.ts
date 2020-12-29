function lw(loader: (...args: any) => Promise<any>) {
    return (target: {} | any, name: PropertyKey): any => {
        const descriptor = {
            async get(this: any) {
                const propertyName = `__lw__${String(name)}`

                if (!this[propertyName]) {
                    this[propertyName] = await loader()
                }

                return this[propertyName]
            },
            enumerable: true,
            configurable: true,
        }
        Object.defineProperty(target, name, descriptor)
    }
}

type Lw<T> = Promise<T>

class User {
    @lw(User.prototype.load) id?: Lw<number>
    async log() {
        console.log("id", await this.id)
    }
    async load() {
        return Math.random()
    }
}

const user1 = new User
await user1.log()