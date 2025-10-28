'use client'

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Page() {

  const [terms, setTerms] = useState(false)

  return (
    <div>
      <div className="flex items-start gap-3">
        <Checkbox 
          id="terms"
          checked={terms}
          onCheckedChange={(value:boolean) =>setTerms(value)} 
        />
        <div className="grid gap-2">
          <Label htmlFor="terms">Aceptar Términos y Condiciones</Label>
          <p className="text-muted-foreground text-sm">
           Usted acepta nuestros Términos de Servicio y Política de Privacidad
          </p>
          {
            terms ? (
              <Badge variant='success'>Excelente!</Badge>
            )
            : (
              <Badge variant='destructive'>Advertencia</Badge>
            )
          }
        </div>
      </div>
    </div>
  );
}