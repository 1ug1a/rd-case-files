import { useState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { stripKeys } from "@/utils/editor";

export default function JsonEditor({ tree, onJsonChange }) {
  const [text, setText] = useState("");
  
  useEffect(() => {
    try {
      const pure = stripKeys(tree);
      setText(JSON.stringify(pure, null, 2));
    } catch {
      // ignore
    }
  }, [tree, stripKeys]);

  function handleChange(e) {
    const next = e.target.value;
    setText(next);

    try {
      const parsed = JSON.parse(next);
      onJsonChange(parsed);
    } catch {
      // invalid JSON
    }
  }

  const [isJsonCopied, setIsJsonCopied] = useState(false)
  const handleJsonCopy = async () => {
    if (text) {
      try {
        await navigator.clipboard.writeText(text)
        setIsJsonCopied(true)
        setTimeout(() => setIsJsonCopied(false), 2000)
      }
      catch {}
    }
  }

  const [isLevelCopied, setIsLevelCopied] = useState(false)
  const handleLevelCopy = async () => {
    if (text) {
      try {
        const re = /(?<="id": ")(.+)(?=")/g
        const idArray = text.match(re)
        const uniqueIds = [...new Set(idArray)];
        const idString = uniqueIds.map(i => "https://codex.rhythm.cafe/" + i + ".rdzip").join('\n')
        await navigator.clipboard.writeText(idString)
        setIsLevelCopied(true)
        setTimeout(() => setIsLevelCopied(false), 2000)
      }
      catch {}
    }
  }

  return (
    <>
      <Textarea 
        value={text}
        onChange={handleChange}
        className="w-full mb-5 h-[150px]"
      />

      <div className="flex mb-5 space-x-4">
        <Button variant="outline" className="w-full flex-1" onClick={handleJsonCopy}>
          {isJsonCopied ? ("Copied!") : ("Copy Case File JSON")}
        </Button>
        <Button className="w-full flex-1" onClick={handleLevelCopy}>
          {isLevelCopied ? ("Copied!") : ("Copy Level Downloads")}
        </Button>
      </div>
    </>
  )
}