import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LevelById from "./level-by-id"
import { Note } from "./note"

export default function Group({ group }) {
  return (
    <div>
      <Card className="bg-card/60 mb-4">
        <CardHeader>
          <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{group["name"]}</CardTitle>
          <CardDescription>
            {group["description"]}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {group["items"].map((item, idx) => {
            switch(item["type"]) {
              case "group":
                return <Group key={item["name"]} group={item} />
              case "level":
                return <LevelById key={item["id"] + "-" + idx} levelId={item["id"]} />
              case "note":
                return <Note key={item["name"]} note={item} />
              default:
                return
              }
            }
          )}
        </CardContent>
      </Card>
    </div>
  )
}
