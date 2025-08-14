import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import LevelButtons from "./level-buttons";
import { Button } from "./ui/button";
import Link from "next/link"
import { Download } from "lucide-react";
import { DndContext, useDraggable} from '@dnd-kit/core';
import React from "react";

const RawLevel = React.memo(function RawLevel({ level, tagVisibility }) {
  return (
    <div 
      className="rounded-xl w-full min-w-0 h-full "  
      style={{background: `url(${level.image}) no-repeat center/cover`}}
    >
      <Card className="group dark bg-card/60 h-full">
        <CardHeader>
          <CardDescription className="relative truncate">
            <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">{level.artist}</span>
            <span className="inset-0 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out truncate">
              {level.authors.map((author, idx) => (
                author = author + ((idx != level.authors.length-1) ? ", " : "")
              ))}
            </span>
          </CardDescription>
          <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{level.song}</CardTitle>
        </CardHeader>
        <CardFooter className={(level.tags.length === 0) || (!tagVisibility) ? "p-[1px]" : ""}>
          <ScrollArea className="min-w-0">
            <div className="flex w-max space-x-1 min-w-0">
            {(tagVisibility === true) ? level.tags.map((tag, idx) => (
              <Badge key={level.id + '.' + tag + '.' + idx}>
                {tag}
              </Badge>
            )) : <></>}
            </div>
            <ScrollBar orientation="horizontal" className="no-scrollbar"/>
          </ScrollArea>
        </CardFooter>
      </Card>
    </div>
  )
})

export default RawLevel