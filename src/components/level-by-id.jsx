'use client'

import Level from "./level"
import api from '@/utils/api'
import search from "@/utils/search"
import { useState, useEffect } from 'react'

export default function LevelById({ levelId }) {
  const [levels, setLevels] = useState([])

  const searchParameters = {
    q: "",
    query_by: 'song',
    filter_by: `id:=${levelId}`
  }

  useEffect(() => {
    const fetchLevels = async () => {
      const response = await search(searchParameters)
      setLevels(response.hits)
    }
    
    fetchLevels()
  }, [])

  if (levels.length != 0)
  return (
    <>
      {levels.map((level, idx) => (
        <Level key={level.id + "-" + idx} level={level} />
      ))}
    </>
  );
  else
  return <Level level="" levelId={levelId} />
}