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

export default function Browse() {
  return (
    <div className="flex h-screen w-full overflow-hidden p-4">
      <LevelSearch />
    </div>
  )
}
