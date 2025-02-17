'use client'

import api from '@/utils/api'
import Level from "@/components/level"
import search from '@/utils/search'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'

export default function LevelSearch() {
  const [query, setQuery] = useState("")
  const showingNonPRLevels = false

  const searchParameters = {
    q: query.trim(),
    query_by: 'song, authors, artist, tags, description',
    query_by_weights: '12, 8, 6, 5, 4',
    per_page: 25,
    page: 1,
    filter_by: showingNonPRLevels
      ? 'approval:=[-1..20]'
      : 'approval:=[10..20]',
    sort_by: showingNonPRLevels
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
    <div className="">
      <Input className="mb-5" type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <ScrollArea className="w-full">
        {levels.map((level) => (
          <Level key={level.id} level={level} />
        ))}
      </ScrollArea>
    </div>
  );
}