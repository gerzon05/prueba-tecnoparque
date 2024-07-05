import Image from 'next/image';
import LogoPokemones from '../../public/png/pokemon-pokemongo-icon.png';
import LogoPokemonesMini from '../../public/png/pokemon logo mini.png';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <>
    <div className='relative h-full min-h-screen px-10'>
      <section className='w-1/2 mt-5 md:mt-0 pl-2 md:pl-10 pt-2 md:pt-10'>
        <p className='text-lg md:text-2xl'>Select Your</p>
        <h1 className='text-4xl md:text-6xl font-bold text-center flex w-full gap-2 items-center'>Pokèmon <Image src={LogoPokemonesMini} alt='logo de Pokemones' className='object-contain size-10' width={50} height={50} /></h1>
      </section>
      <div className='px-14 py-10'>
      <Carousel className="w-full mt-5 md:mt-0">
      <CarouselContent className='-m-1'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

      </div>
    </div>
      <Image src={LogoPokemones} className='absolute top-0 -z-10' alt='logo de Pokemones' width={400} height={300} />
      <figure className='absolute bottom-10 left-10 w-32 text-lg'>12 Pokèmons in your Pokèdex</figure>
    </>
  );
}
