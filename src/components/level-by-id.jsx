'use client'

import Level from "./level"
import api from '@/utils/api'
import { useState, useEffect } from 'react'

export default function LevelById({ levelId }) {
  const [levels, setLevels] = useState([])

  const searchParameters = {
    q: "",
    query_by: 'song',
    filter_by: `id:=${levelId}`
  }

  const fetchLevels = async () => {
    await api.get("/search", { params: searchParameters })
    .then((response) => setLevels(response.data.hits.map((level) => (level.document))))
    .catch((error) => console.error(error))
  }
  
  useEffect(() => {
    fetchLevels()
  }, [])

  if (levels.length != 0)
  return (
    <>
      {levels.map((level) => (
        <Level key={level.id} level={level} />
      ))}
    </>
  );
  else
  return <Level level="" levelId={levelId} />
}