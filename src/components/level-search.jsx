'use client'

import api from '@/utils/api'
import Level from "@/components/level"
import search from '@/utils/search'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

export default function LevelSearch() {
  const [query, setQuery] = useState("")
  const [minApproval, setMinApproval] = useState(10)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(48)
  const [tagVisibility, setTagVisibility] = useState(true)
  const toggleTags = () => setTagVisibility(!tagVisibility)

  const searchParameters = {
    q: query.trim(),
    query_by: 'song, authors, artist, tags, description',
    query_by_weights: '12, 8, 6, 5, 4',
    per_page: perPage,
    page: page,
    filter_by: `approval:=[${minApproval}..20]`,
    sort_by: (minApproval >= 10)
      ? '_text_match:desc,last_updated:desc'
      : '_text_match:desc,indexed:desc,last_updated:desc',
    num_typos: '2, 1, 1, 1, 0'
  }
  
  const [levels, setLevels] = useState([])

  useEffect(() => {
    const fetchLevels = async () => {
      const response = await search(searchParameters)
      setLevels(response)
    }
    
    const delayDebounceFn = setTimeout(() => {
      fetchLevels()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <div className="w-full">
      <Input className="w-full mb-2 ml-4 mr-4 mt-0" type="text" value={query} placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
      <div className="mb-2 mx-4">
        <Button onClick={toggleTags}>Toggle Tags</Button>
      </div>
      <ScrollArea className="h-[calc(100vh-6rem)] w-full p-4">
        <div className="@container">
          <div className="grid grid-flow-dense grid-cols-1 @3xl:grid-cols-2 @6xl:grid-cols-3 gap-x-4">
            {levels.map((level) => (
              <Level key={"search"+level.id} level={level} tagVisibility={tagVisibility} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}