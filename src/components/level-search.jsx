'use client'

import api from '@/utils/api'
import Level from "@/components/level"
import search from '@/utils/search'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function LevelSearch() {
  const [query, setQuery] = useState("")
  const [minApproval, setMinApproval] = useState(10)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const nextPage = () => setPage((page == totalPages) ? page : page+1)
  const prevPage = () => setPage((page == 1) ? page : page-1)

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
  const fetchLevels = async () => {
    const response = await search(searchParameters)
    setLevels(response.hits)
    setTotalPages(Math.ceil(response.found/perPage))
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchLevels()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query, page, perPage])

  return (
    <div className="w-full">
      <div className="mb-2 ml-4 mr-4 mt-0 flex space-x-1">
        
        <Input className="" type="text" value={query} placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div className="mb-2 mx-4 space-x-1">
        <Button onClick={prevPage} variant="outline" className="w-9 relative top-[3px]"><ChevronLeft /></Button>
        <Button variant="outline">{page}/{totalPages}</Button>
        <Button onClick={nextPage} variant="outline" className="w-9 relative top-[3px]"><ChevronRight /></Button>
        <div className="inline-flex text-sm px-1">Per page:</div>
        <Select className="flex" onValueChange={setPerPage}>
          <SelectTrigger className="w-[70px] inline-flex">
            <SelectValue placeholder={perPage}/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="48">48</SelectItem>
              <SelectItem value="72">72</SelectItem>
              <SelectItem value="120">120</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={toggleTags}>Toggle Tags</Button>
      </div>
      <ScrollArea className="h-[calc(100vh-7rem)] w-full p-4">
        <div className="@container">
          <div className="grid grid-cols-1 @3xl:grid-cols-2 @6xl:grid-cols-3 gap-x-4">
            {(levels.length !== 0) ? levels.map((level) => (
              <Level key={"search"+level.id} level={level} tagVisibility={tagVisibility} />
            )):""}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}