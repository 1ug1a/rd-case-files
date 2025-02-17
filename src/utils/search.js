import api from "./api"

export default async function search(searchParameters) {
    try {
        const response = await api.get("/search", { params: searchParameters })
        const r = response.data.hits.map((level) => (level.document))
        // console.log(r)
        return r
    }
    catch(error) {
        console.error(error)
        return []
    }
}