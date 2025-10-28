'use client'

import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import { useState } from 'react';

export default function Page() {

  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className='grid grid-cols-2 gap-4'>
      <AlertDialog open={dialogOpen}
        // onOpenChange={(open) => console.log({ open })}>
        onOpenChange={setDialogOpen}>

        <AlertDialogTrigger asChild>
          <Button variant='outline'>mostrar dialogo</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás completamente seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Eliminará permanentemente su cuenta y eliminará sus datos de nuestros servidores.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>Continuar</AlertDialogAction>
          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialog>

      <Button onClick={() => setDialogOpen(true)} >abrir dialogo manualmente</Button>
    </div>
  );
}
