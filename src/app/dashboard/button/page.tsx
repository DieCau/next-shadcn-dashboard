'use client';

import { Button } from "@/components/ui/button"

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
      <Button variant='success' onClick={()=> console.log('Hola!')}>click Me</Button>
      <Button capitalize={false}>capitalize false</Button>
    </div>
  )
}

export default page