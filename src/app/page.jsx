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
        <ResizablePanel defaultSize={30} className="m-4 h-full">
          <h1 className="text-3xl font-bold">Rhythm Doctor Case Files</h1>
          <p className="text-md mb-3">Created by <a className="font-semibold underline" href="https://bsky.app/profile/did:plc:4ob4f4b6bvh25rtqgztzdufk">@1ug1a</a></p>
          <ScrollArea className="h-[calc(100vh-100px)] w-full">
            <SimpleEditor />
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70} className="m-4">
          <LevelSearch />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
