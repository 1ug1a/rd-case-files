import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import LevelById from "./level-by-id";
import { Note } from "./note";

export default function GroupItem({ item, onRemove }) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: item.key
  });
  const style = { transform: CSS.Transform.toString(transform) };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="tree-item"
    >
      {item.type === "level" && 
        <LevelById levelId={item.id} />
      }
      {item.type === "note" &&
        <Note key={item["name"]} note={item} />
      }
    </div>
  );
}