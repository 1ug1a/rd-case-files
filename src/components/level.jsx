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

export default function Level({ level }) {
  return (
    <div className="mb-1 max-w-full">
      <Card className="" style={{background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${level.image}) no-repeat center/cover`}}>
        <CardHeader>
          <CardDescription>
            <span>{level.artist}</span>
            <span className="float-right">
              {level.authors.map((author, idx) => (
                author = author + ((idx != level.authors.length-1) ? ", " : "")
              ))}
            </span>
          </CardDescription>
          <CardTitle>{level.song}</CardTitle>
        </CardHeader>
        <CardFooter className="footer">
          <ScrollArea className="scroll">
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
  )
}