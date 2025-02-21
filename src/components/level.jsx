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
import CopyButton from "./copy-button";
import { Button } from "./ui/button";
import Link from "next/link"
import { Download } from "lucide-react";

export default function Level({ level, levelId, tagVisibility }) {
  if (level !== "")
  return (
    <div className="flex space-x-1 mb-1 last:mb-0 w-full">
      <div className="flex flex-col space-y-1">
        <CopyButton levelId={level.id} />
      </div>
      <div className="rounded-xl w-full min-w-0" style={{background: `url(${level.image}) no-repeat center/cover`}}>
        <Card className="bg-card/60 h-full">
          <CardHeader>
            <CardDescription className="truncate">
              <span className="mr-5">{level.artist}</span>
              <span className="float-right">
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
                <Badge key={level.id + '-' + tag + '-' + idx}>
                  {tag}
                </Badge>
              )) : <></>}
              </div>
              <ScrollBar orientation="horizontal" className="no-scrollbar"/>
            </ScrollArea>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
  else
  return (
    <div className="rounded-xl mb-1 last:mb-0 max-w-full" style={{background: `url(${level.image}) no-repeat center/cover`}}>
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