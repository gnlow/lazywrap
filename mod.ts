export function Lw(loaderName: string) {
    return (target: {} | any, name: PropertyKey): any => {
        const propertyName = `__lw__${String(name)}`
        const descriptor = {
            async get(this: any) {
                if (!this[propertyName]) {
                    await this[loaderName]()
                }
                return this[propertyName]
            },
            set(this: any, value: any) {
                this[propertyName] = value
            },
            enumerable: true,
            configurable: true,
        }
        Object.defineProperty(target, name, descriptor)
    }
}

export type Lw<T> = Promise<T> | T