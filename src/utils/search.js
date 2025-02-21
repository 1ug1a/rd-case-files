import api from "./api"

export default async function search(searchParameters) {
    try {
        const response = await api.get("/search", { params: searchParameters })
        const hits = response.data.hits.map((level) => (level.document))
        const found = response.data.found
        return {hits, found}
    }
    catch(error) {
        console.error(error)
        return []
    }
}