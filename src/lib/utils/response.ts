
export function json_as_response(json: unknown) {
    return new Response(JSON.stringify(json), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export async function response_as_json<T>(response: Response): Promise<T> {
    return await response.json()
}

export async function fetch_as_json<T>(
    fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
    url: RequestInfo | URL,
    options?: RequestInit
): Promise<T> {
    return await response_as_json<T>(await fetch(url, options))
}