const UNSPLASH_BASE_URL = "https://api.unsplash.com"

export const searchUnsplashImage = async (query) => {
    try {
        if (!query) {
            return null
        }

        const url = new URL(`${UNSPLASH_BASE_URL}/search/photos`)

        url.searchParams.set("query", query)
        url.searchParams.set("per_page", "1")
        url.searchParams.set("orientation", "landscape")

        const response = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
                "Accept-Version": "v1"
            }
        })

        if (!response.ok) {
            console.error(
                "Unsplash API error:",
                response.status,
                await response.text()
            )
            return null
        }

        const data = await response.json()

        if (!data.results || data.results.length === 0) {
            return null
        }

        return data.results[0].urls.regular

    } catch (error) {
        console.error("Unsplash search error:", error)
        return null
    }
}
