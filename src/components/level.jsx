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
import RawLevel from "./raw-level";
import DndLevel from "./dnd-level";
import React from "react";

function Level({ level, levelId, tagVisibility }) {  
  if (level !== "")
  return (
    <div className="flex space-x-1 mb-1 w-full">
      <div className="flex flex-col space-y-1">
        <LevelButtons levelId={level.id} />
      </div>
      <DndLevel level={level} tagVisibility={tagVisibility}/>
    </div>
  );
  else
  return (
    <div className="rounded-xl mb-1 max-w-full" style={{background: `url(${level.image}) no-repeat center/cover`}}>
      <Card className="bg-card/60">
        <CardHeader className="mb-1">
          <CardDescription>
            <span className="mr-5">{levelId}</span>
          </CardDescription>
          <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">Unknown Level</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}

export default React.memo(Level)