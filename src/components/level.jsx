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

export default function Level({ level, levelId }) {
  if (level !== "")
  return (
    <div className="rounded-xl mb-1 last:mb-0 max-w-full" style={{background: `url(${level.image}) no-repeat center/cover`}}>
      <Card className="bg-card/60">
        <CardHeader>
          <CardDescription>
            <span className="mr-5">{level.artist}</span>
            <span className="float-right">
              {level.authors.map((author, idx) => (
                author = author + ((idx != level.authors.length-1) ? ", " : "")
              ))}
            </span>
          </CardDescription>
          <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{level.song}</CardTitle>
        </CardHeader>
        <CardFooter className={level.tags.length !== 0 ? "" : "p-[1px]"}>
          <ScrollArea className="">
            <div className="flex w-max space-x-1">
            {level.tags.map((tag) => (
              <Badge key={tag}>
                {tag}
              </Badge>
            ))}
            </div>
            <ScrollBar orientation="horizontal" className="no-scrollbar"/>
          </ScrollArea>
        </CardFooter>
      </Card>
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