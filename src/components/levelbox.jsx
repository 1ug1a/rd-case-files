'use client'

import api from '@/utils/api'
import Level from "@/components/level"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'

export default function LevelBox() {
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
  const fetchLevels = async () => {
      try {
        const response = await api.get("/search", {
          params: searchParameters
        })
        setLevels(response.data.hits.map((level) => (
          level.document
        )))
      } catch (error) {
        console.error('Error fetching levels:', error)
      }
    }
  
  const [levels, setLevels] = useState([])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchLevels()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <div className="w-[50vw]">
      <Input className="mb-5" type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <ScrollArea className="w-full h-[30rem]">
        {levels.map((level) => (
          <Level key={level.id} level={level} />
        ))}
      </ScrollArea>
    </div>
  );
}