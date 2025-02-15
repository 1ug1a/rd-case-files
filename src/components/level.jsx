import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Level({ level }) {
  return (
    <>
      <Card style={{background: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${level.image}) no-repeat center/cover`}}>
        <CardHeader>
          <CardTitle>{level.song}</CardTitle>
          <CardDescription>{level.artist}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{level.description}</p>
        </CardContent>
        <CardFooter>
          <p>{level.authors}</p>
        </CardFooter>
      </Card>
    </>
  )
}