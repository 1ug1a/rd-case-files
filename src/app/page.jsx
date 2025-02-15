import api from '@/utils/api'
import Level from '@/components/level'

export default async function Index() {
  const q = "test"
  const showingNonPRLevels = false

  const searchParameters = {
    q: q.trim(),
    query_by: 'song, authors, artist, tags, description',
    query_by_weights: '12, 8, 6, 5, 4',
    per_page: 5,
    page: 1,
    filter_by: showingNonPRLevels
      ? 'approval:=[-1..20]'
      : 'approval:=[10..20]',
    sort_by: showingNonPRLevels
      ? '_text_match:desc,last_updated:desc'
      : '_text_match:desc,indexed:desc,last_updated:desc',
    num_typos: '2, 1, 1, 1, 0'
  }
  
  let response = await api.get("/search", {
    params: searchParameters
  })

  let levels = response.data.hits.map((level) => (
    level.document
  ))

  return (
    <div>
      {levels.map((level) => (
        <Level key={level.id} level={level} />
      ))}
    </div>
  );
}
