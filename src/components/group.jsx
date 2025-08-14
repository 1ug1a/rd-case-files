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
import GroupItem from "./group-item"

export default function Group({ node, onChange }) {
  // console.log(node)
  return (
    <div className="tree-group">
      <Card className="bg-card/60 mb-4 mt-4">
        <CardHeader>
          <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{node["name"]}</CardTitle>
          <CardDescription>
            {node["description"] || ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {node.items.map(child => {
            return child.type === "group" ? (
              <Group
                key={child.key}
                node={child}
              />
            ) : (
              <GroupItem
                key={child.key}
                item={child}
              />
            )
          }
          )}
        </CardContent>
      </Card>
    </div>
  )
}
