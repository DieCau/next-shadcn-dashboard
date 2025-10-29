'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

export default function Page() {

  const [open, setOpen] = useState(false)

  return (
    <div className="grid grid-cols-2 gap-2">
      <Button onClick={() => setOpen(true)}>Abrir</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">abrir</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Editar perfil</SheetTitle>
            <SheetDescription>
              Realiza los cambios en tu perfil aquí. Haz clic en guardar cuando hayas terminado.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Nombre</Label>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Usuario</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">guardar cambios</Button>
            <SheetClose asChild>
              <Button variant="outline">cerrar</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}