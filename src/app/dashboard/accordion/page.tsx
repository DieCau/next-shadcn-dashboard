import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Page() {
  return (
    <div>
      <Accordion
        type='multiple'        
        className='w-2xl'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='font-extrabold'>¿En qué Parque de Fantasy están estas atracciones?</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='font-extrabold'>¿Están abiertas todas las atracciones?</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='font-extrabold'>¿Puedo dejar a mi perro o a mi gato en la entrada de los Parques Disney para que lo cuiden?</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger className='font-extrabold'>¿Cuál es la manera más fácil de viajar a Fantasyland Paris si voy con un grupo de amigos?​</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <p>
              Encontrarás toda la información que necesitas para organizar tu viaje en familia a Fantasyland Paris en coche, tren o avión y mucha más información en <a href='#' className='text-sky-500 hover:underline'>nuestra página específica.</a>  
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
