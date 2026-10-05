const UNSPLASH_BASE_URL = "https://api.unsplash.com"

const normalizeText = (text = "") => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean)
}

const scorePhoto = (photo, query) => {
    const queryWords = normalizeText(query)

    const searchableText = normalizeText([
        photo.alt_description,
        photo.description,
        photo.location?.name,
        photo.location?.city,
        photo.location?.country,
        photo.user?.location
    ].filter(Boolean).join(" "))

    let score = 0

    for (const word of queryWords) {
        if (searchableText.includes(word)) {
            score += 1
        }
    }

    return score
}

const fetchUnsplashPhotos = async (query) => {
    const url = new URL(`${UNSPLASH_BASE_URL}/search/photos`)

    url.searchParams.set("query", query)
    url.searchParams.set("per_page", "10")
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
        return []
    }

    const data = await response.json()
    return data.results || []
}

export const searchUnsplashImage = async (query) => {
    try {
        if (!query) {
            return null
        }

        // First try the exact query
        let photos = await fetchUnsplashPhotos(query)

        // If nothing found, try a broader query
        if (photos.length === 0) {
            const broaderQuery = normalizeText(query).slice(-3).join(" ")
            photos = await fetchUnsplashPhotos(broaderQuery)
        }

        if (photos.length === 0) {
            return null
        }

        // Choose the most relevant result
        const rankedPhotos = photos
            .map(photo => ({
                photo,
                score: scorePhoto(photo, query)
            }))
            .sort((a, b) => b.score - a.score)

        return rankedPhotos[0].photo.urls.regular

    } catch (error) {
        console.error("Unsplash search error:", error)
        return null
    }
}
