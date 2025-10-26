import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon, CircleCheckBig } from "lucide-react";

export default function Page() {
  return (
    <div className="grid gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <CircleCheckBig />
        <AlertTitle>Su pago fue procesado!</AlertTitle>
        <AlertDescription>
          <p>Verifique sus datos de facturación.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Verfique los datos de su tarjeta</li>
            <li>Asegúrese del descuento acordado</li>
            <li>Verifique la dirección de facturación</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}