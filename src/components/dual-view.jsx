import LevelSearch from '@/components/level-search'
import DndEditor from '@/components/dnd-editor'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
function DualView() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={30} className="m-4 h-full">
          <h1 className="text-3xl font-bold">Rhythm Doctor Case Files</h1>
          <p className="text-md mb-3">Created by <a className="font-semibold underline" href="https://bsky.app/profile/did:plc:4ob4f4b6bvh25rtqgztzdufk">@1ug1a</a></p>
          <ScrollArea className="h-[calc(100vh-100px)] w-full">
            <DndEditor />
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

export default React.memo(DualView)