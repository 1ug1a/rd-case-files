'use client'

import Group from '@/components/group';
import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"

export default function SimpleEditor() {
  const initialJson = {
    "type": "group",
    "name": "Group 1",
    "description": "oh wow haha awesome",
    "items": [
      {
        "type": "group",
        "name": "Group 2",
        "description": "toxy! toxy! toxy!",
        "items": [
          {
            "type": "level",
            "id": "toxy-5ABtN28ouNr"
          },
          {
            "type": "level",
            "id": "toxy-5ABtN28ouNr"
          },
          {
            "type": "level",
            "id": "toxy-5ABtN28ouN"
          }
        ]
      },
      {
        "type": "note",
        "name": "testing!",
        "description": "this is a test"
      },
      {
        "type": "level",
        "id": "espresso-8vyjFwpWUNc"
      }
    ]
  }

  const errorJson = {
    "type": "group",
    "name": "",
    "items": [
      {
        "type": "note",
        "name": "Invalid Data",
        "description": "JSON could not be parsed."
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

      console.log("Parsed JSON:", parsedData);
  };
  
  return (
    <div>
      <Textarea 
        value={jsonData}
        onChange={handleTextAreaChange}
        className="w-full mb-5 h-[150px]"
      />

      <Group group={tryParse(jsonData)} />
    </div>
  )
}
