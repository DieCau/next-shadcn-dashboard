import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {"123456789".split("").map((item) => (
        <Card key={item}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant='outline'>info</Button>
            <Button variant='default'>saber más</Button>
          </CardFooter>
        </Card>
      ))}

      <Card className="col-span-1 sm:col-span-3">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription> 
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Name of your project"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant='outline'>
            cancel
          </Button>
          <Button variant="default">
            deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}