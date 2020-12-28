function rand() {
    return (target: {} | any, name: PropertyKey): any => {
        const descriptor = {
            get(this: any) {
                const propertyName = `__${String(name)}`

                if (!this[propertyName]) {
                    this[propertyName] = Math.random()
                }

                return this[propertyName]
            },
            enumerable: true,
            configurable: true,
        }
        Object.defineProperty(target, name, descriptor)
    }
}

class User {
    @rand() id?: number
    log() {
        console.log("id", this.id)
    }
}

const user1 = new User
user1.log()