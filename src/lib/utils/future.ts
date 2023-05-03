export default async <T>(promise: Promise<T> | T, subscriber: (value: boolean) => T) => {
    subscriber(true)
    try {
        await promise
        subscriber(false)
    } catch (err) {
        subscriber(false)
        throw err
    }
}