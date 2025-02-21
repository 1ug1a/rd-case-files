import Group from '@/components/group'
import LevelSearch from '@/components/level-search'
import LevelById from '@/components/level-by-id'
import SimpleEditor from '@/components/simple-editor'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Index() {
  const placeholder = {
    "type": "group",
    "name": "Group 1",
    "description": "oh wow haha awesome",
    "items": [
      {
        "type": "group",
        "name": "Group 2",
        "description": "toxy! toxy! toxy!",
        "items": [
          {
            "type": "level",
            "id": "toxy-5ABtN28ouNr"
          },
          {
            "type": "level",
            "id": "toxy-5ABtN28ouNr"
          },
          {
            "type": "level",
            "id": "toxy-5ABtN28ouN"
          }
        ]
      },
      {
        "type": "note",
        "name": "testing!",
        "description": "this is a test"
      },
      {
        "type": "level",
        "id": "espresso-8vyjFwpWUNc"
      }
    ]
  }
  
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={50} className="m-4">
          <ScrollArea className="h-full w-full">
            <SimpleEditor />
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} className="m-4">
          <ScrollArea className="h-full w-full">
            <LevelSearch />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
