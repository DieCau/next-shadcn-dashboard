import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return '123456789'.split('');
}

export default async function Page() {

  const data = await getData()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {
        data.map(item => (
          <Card key={item}>
            <CardHeader className="flex flex-row items-center">
              <Image
                src='https://github.com/shadcn.png'
                alt='Shadcn'
                width={40}
                height={40}
                className="rounded-full mr-2 size-10"
              />
              <div>
                <CardTitle>Titulo Card</CardTitle>
                <CardDescription>Descripcion Card</CardDescription>
              </div>
            </CardHeader>

            <CardFooter className="flex justify-end">
              <Button>Más</Button>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}