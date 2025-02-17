import { StickyNote } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function Note({ note }) {
  return (
    <Alert className="mb-4">
      <StickyNote className="h-4 w-4" />
      <AlertTitle>{note["name"]}</AlertTitle>
      <AlertDescription>
        {note["description"]}
      </AlertDescription>
    </Alert>
  )
}
