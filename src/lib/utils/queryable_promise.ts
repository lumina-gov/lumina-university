

export class QueryablePromise<T> extends Promise<T> {
    status: "pending" | "fulfilled" | "rejected"
    constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => void) {
        super((resolve, reject) => executor(
            data => {
                this.status = "fulfilled"
                resolve(data)
            },
            err => {
                this.status = "rejected"
                reject(err)
            }
        ))

        this.status = "pending"
    }
}