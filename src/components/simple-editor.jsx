'use client'

import Group from '@/components/group';
import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button';

export default function SimpleEditor() {
  const initialJson = {
    type: "group",
    name: "Group 1",
    description: "oh wow haha awesome",
    items: [
      {
        type: "group",
        name: "Group 2",
        description: "toxy! toxy! toxy!",
        items: [
          {
            type: "level",
            id: "toxy-5ABtN28ouNr"
          },
          {
            type: "level",
            id: "toxy-5ABtN28ouNr"
          },
          {
            type: "level",
            id: "toxy-5ABtN28ouNr"
          }
        ]
      },
      {
        type: "note",
        name: "testing!",
        description: "this is a test"
      },
      {
        type: "level",
        id: "espresso-8vyjFwpWUNc"
      }
    ]
  }

  const errorJson = {
    type: "group",
    name: "",
    items: [
      {
        type: "note",
        name: "Invalid Data",
        description: "JSON could not be parsed."
      }
    ]
  }
  
  const [jsonData, setJsonData] = useState(JSON.stringify(initialJson, null, 2));

  const tryParse = (data) => {
    let returnData = errorJson
    try {
      returnData = JSON.parse(data)
    }
    catch {
      returnData = errorJson
    }
    return returnData
  }

  const handleTextAreaChange = (event) => {
      const parsedData = tryParse(event.target.value);
      setJsonData(event.target.value);

      // console.log("Parsed JSON:", parsedData);
  };
  
  const [isJsonCopied, setIsJsonCopied] = useState(false)
  const handleJsonCopy = async () => {
    if (jsonData) {
      try {
        await navigator.clipboard.writeText(jsonData)
        setIsJsonCopied(true)
        setTimeout(() => setIsJsonCopied(false), 2000)
      }
      catch {}
    }
  }

  const [isLevelCopied, setIsLevelCopied] = useState(false)
  const handleLevelCopy = async () => {
    if (jsonData) {
      try {
        const re = /(?<="id": ")(.+)(?=")/g
        const idArray = jsonData.match(re)
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
    <div>
      <Textarea 
        value={jsonData}
        onChange={handleTextAreaChange}
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

      <Group group={tryParse(jsonData)} />
    </div>
  )
}
