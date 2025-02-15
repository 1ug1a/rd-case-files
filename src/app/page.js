import api from '@/utils/api'
import axios from 'axios'

export default async function Index() {
  const q = "test"
  const showingNonPRLevels = false

  const searchParameters = {
    q: q.trim(),
    query_by: 'song, authors, artist, tags, description',
    query_by_weights: '12, 8, 6, 5, 4',
    per_page: 10,
    page: 1,
    sort_by: showingNonPRLevels
        ? '_text_match:desc,last_updated:desc'
        : '_text_match:desc,indexed:desc,last_updated:desc',
    num_typos: '2, 1, 1, 1, 0'
  }
  
  let response = await api.get("/search", {
    params: searchParameters
  })

  return (
    <div>
      <p>{response.data.hits.map((level) => (
        <ul key={level.document.id}>{JSON.stringify(level.document)}</ul>
      ))}</p>
    </div>
  );
}
