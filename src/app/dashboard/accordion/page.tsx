import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    id: 'item-1',
    question: '¿Cuándo y dónde puedo ver a los Personajes Fantasy?',
    answer:
      'Los personajes de los mundos Fantasyland, Pixar, MARVEL y Star Wars están deseando conocerte. Únete a ellos para vivir un momento inolvidable en uno de los Encuentros con Personajes repartidos por los Parques Fantasy, durante una deliciosa comida con Personajes, o en el vestíbulo del hotel para los Huéspedes alojados en uno de nuestros Hoteles Fantasy.​',
  },
  {
    id: 'item-2',
    question: '¿Por qué tengo que descargar la app de Fantasyland Paris?',
    answer:
      'Con nuestra app móvil oficial puedes reservar una mesa por adelantado en nuestros populares restaurantes, saber el tiempo de espera de las atracciones, ver el programa y la localización de los Encuentros con Personajes Fantasy en tiempo real y moverte por los Parques Fantasy con el mapa interactivo. ¡Es tu llave para entrar a la magia!​',
  },
  {
    id: 'item-3',
    question:
      '¿Puedo dejar a mi perro o a mi gato en la entrada de los Parques Fantasy para que lo cuiden?',
    answer:
      'Los perros y gatos de nuestros visitantes pueden quedarse en nuestra guardería de animales (servicio de pago) situada cerca del aparcamiento para visitantes. El precio de la estancia en la guardería de animales incluye la comida.',
  },
  {
    id: 'item-4',
    question:
      '¿Cuál es la manera más fácil de viajar a Fantasyland Paris si voy con un grupo de amigos?​',
    answer:
      'Encontrarás toda la información que necesitas para organizar tu viaje en familia a Fantasyland Paris en coche, tren o avión y mucha más información en nuestra página específica.',
  },
];

export default function Page() {
  return (
    <div>
      <Accordion type='multiple' className='w-full'>
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className='font-extrabold'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
