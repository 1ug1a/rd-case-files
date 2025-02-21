import { StickyNote } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function Note({ note }) {
  return (
    <Alert className="mb-4 bg-blue-200 dark:bg-blue-950">
      <StickyNote className="h-4 w-4" />
      <AlertTitle className="font-semibold leading-none tracking-tight">{note["name"]}</AlertTitle>
      <AlertDescription>
        {note["description"]}
      </AlertDescription>
    </Alert>
  )
}
