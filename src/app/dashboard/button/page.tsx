'use client';

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner";
import { CircleFadingArrowUpIcon, GitBranch } from "lucide-react";

const page = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant='destructive'>destructive</Button>
      <Button variant='ghost'>ghost</Button>
      <Button variant='outline'>outline</Button>
      <Button variant='link'>link</Button>
      <Button variant='secondary'>secondary</Button>
      <Button disabled>disabled</Button>
      <Button variant='success' onClick={() => console.log('Hola!')}>click Me</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">
        <CircleFadingArrowUpIcon />
      </Button>
      <Button variant="success" size="sm">
        <GitBranch /> Rama Nueva
      </Button> 
      <Button size='sm' variant='outline' capitalize={ false }>
        <Spinner />
        Espere por favor...
      </Button>
    </div>
  )
}

export default page