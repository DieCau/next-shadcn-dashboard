'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy } from 'lucide-react';

export default function Page() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Compartir</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Compartir Enlace</DialogTitle>
            <DialogDescription>
              Cualquiera que tenga este enlace podrá verlo.
            </DialogDescription>
          </DialogHeader>
          <div className='flex items-center gap-2'>
            <div className='grid flex-1 gap-2'>
              <Label htmlFor='link' className='sr-only'>
                Link
              </Label>
              <Input
                id='link'
                defaultValue='https://ui.shadcn.com/docs/installation'
                readOnly
              />
            </div>
            <Button
              type='submit'
              size='sm'
              className='px-3'
              onClick={() =>
                navigator.clipboard.writeText(
                  'https://ui.shadcn.com/docs/installation'
                )
              }
            >
              <span className='sr-only'>Copy</span>
              <Copy className='size-4' />
            </Button>
          </div>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                cerrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
