import { useDraggable } from "@dnd-kit/core";
import RawLevel from "./raw-level";
import { useRef } from "react";

export default function DndLevel({ level, tagVisibility }) {
  const draggableId = useRef(null);
  if (draggableId.current === null) {
    draggableId.current = level.id + "." + crypto.randomUUID();
  }
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: draggableId,
    data: level,
  });

  const style = {
    opacity: isDragging ? 0 : 1,
    transition: isDragging ? undefined : 'opacity 0.25s ease-in-out',
  };
  
  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="rounded-xl w-full min-w-0"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onMouseDown={handleMouseDown}
      style={style}
    >
      <RawLevel level={level} tagVisibility={tagVisibility} />
    </div>
  )
}