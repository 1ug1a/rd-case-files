'use client'

import Group from '@/components/group';
import { useId } from 'react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useDroppable } from '@dnd-kit/core';
import { initialJson, initTree } from '@/utils/editor'
import { useState } from 'react';
import JsonEditor from './json-editor';

export default function DndEditor() {
  const [tree, setTree] = useState(() => initTree(initialJson));
  function handleJsonChange(pureJson) {
    // Re-initialize keys and overwrite the tree:
    setTree(initTree(pureJson));
  }
  // console.log(tree)
  return (
    <div>
      <JsonEditor tree={tree} onJsonChange={handleJsonChange} />

      <Group node={tree} />
    </div>
  )
}
