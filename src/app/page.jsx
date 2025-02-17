import Group from '@/components/group'
import LevelSearch from '@/components/level-search'
import LevelById from '@/components/level-by-id'

export default function Index() {
  const placeholder = {
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
  
  return (
    <div>
      <Group group={placeholder} />
      <LevelSearch />
    </div>
  )
}
