'use client'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();

  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
          Aquí Click Derecho
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuItem inset onClick={ 
            () => router.back() }>
            Atras
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Adelante
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Recargar
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>Más Herramientas</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuItem>Guardar página...</ContextMenuItem>
              <ContextMenuItem>Crear Acceso directo...</ContextMenuItem>
              <ContextMenuItem>Ventana...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Herramientas del Desarrollador</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">Eliminar</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Mostrar Marcadores
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Mostrar Todas las URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>Personas</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">David Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}