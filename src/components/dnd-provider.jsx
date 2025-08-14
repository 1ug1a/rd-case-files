'use client'

import { 
  DndContext,
  DragOverlay,
  closestCorners
} from "@dnd-kit/core";
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { createPortal } from "react-dom";
import { useState } from "react";
import DualView from "./dual-view";
import RawLevel from "./raw-level";

export default function DndProvider() {
  const [activeId, setActiveId] = useState(null);
  const [levelData, setLevelData] = useState(null);
  const [tagVisibility, setTagVisibility] = useState(true)

  function handleDragStart(event) {
    setActiveId(event.active.id.current);
    console.log(event.active.id.current)
    setLevelData(event.active.data.current);
    const storedTagVisibility = localStorage.getItem("tagVisibility");
    if (storedTagVisibility !== null) {
      setTagVisibility(storedTagVisibility === "true");
    }
  }
  
  function handleDragEnd() {
    setActiveId(null);
    setLevelData(null);
  }

  const dropFadeAnim = {
    keyframes({ transform }) {
      return [
        { opacity: 1 },
        { opacity: 0 }
      ];
    }
  };

  return (
    <DndContext 
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      {typeof document !== 'undefined' ? createPortal(
        <DragOverlay dropAnimation={dropFadeAnim} modifiers={[restrictToWindowEdges]}>{
          activeId && levelData ? <RawLevel level={levelData} tagVisibility={false} /> : null
        }</DragOverlay>,
        document.body,
      ) : null}
      <DualView />
    </DndContext>
  )
}