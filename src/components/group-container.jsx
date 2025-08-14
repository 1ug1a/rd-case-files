import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import RawLevel from "./raw-level";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { getAllKeys } from "@/utils/editor";

export default function GroupContainer(node) {
  return (
    <SortableContext
      items={getAllKeys(node)}
      strategy={verticalListSortingStrategy}
    >
      
    </SortableContext>
  )
}