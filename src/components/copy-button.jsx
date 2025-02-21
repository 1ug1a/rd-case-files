'use client'

import { ClipboardCopy, Download, Check } from "lucide-react";
import { Button, buttonVariants  } from "./ui/button";
import { useState } from 'react';

export default function CopyButton({ levelId }) {
  const [isLevelCopied, setIsLevelCopied] = useState(false)
  const handleLevelCopy = async () => {
    await navigator.clipboard.writeText("https://codex.rhythm.cafe/" + levelId + ".rdzip")
    setIsLevelCopied(true)
    setTimeout(() => setIsLevelCopied(false), 2000)
  }
  return (
    <>
      <Button variant="outline" className="flex-1 w-9" onClick={handleLevelCopy}>
        {(isLevelCopied) ? (
          <Check className="h-4 w-4" />
        ) : (
          <ClipboardCopy className="h-4 w-4" />
        )}
      </Button>
      <a href={"https://codex.rhythm.cafe/" + levelId + ".rdzip"} className={buttonVariants({ variant: "outline" }) + " flex-2 w-9"}>
        <Download className="h-4 w-4" />
      </a>
    </>
  )
}