import Image from 'next/image';
import LogoPokemones from '../../public/png/pokemon-pokemongo-icon.png';
import LogoPokemonesMini from '../../public/png/pokemon logo mini.png';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { getPokemon, getPokemonDetail } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Pokemon {
  name: string;
  url: string;
}

export default async function Home() {
  const responde = await getPokemon()
  return (
    <>
    <div className='relative px-10'>
      <section className='w-1/2 mt-5 md:mt-0 pl-2 md:pl-10 pt-2 md:pt-10'>
        <p className='text-lg md:text-2xl'>Select your two</p>
        <h1 className='text-4xl md:text-6xl font-bold text-center flex w-full gap-2 items-center'>Pokemon <Image src={LogoPokemonesMini} alt='logo de Pokemones' className='object-contain size-10' width={50} height={50} /></h1>
      </section>
      <div className='p-5 md:px-14 md:py-10'>
      <Carousel className="w-full mt-5 md:mt-0 h-auto">
      <CarouselContent className='-m-1'>
        {responde.map(async (pokemon:Pokemon, index:number) => {
          const pokemondatails = await getPokemonDetail(pokemon.url)
          return (
            <>
                <CarouselItem key={index} className="pl md:basis-1/3">
          <div className="p-1">
            <Card className='bg-transparent' >
              <CardContent className="flex flex-col p-0 aspect-square items-center justify-center size-fit relative">
                <h1 className='text-white py-4 text-3xl font-semibold'>{pokemon.name}</h1>
              <Image src={pokemondatails.sprites.other.home.front_default} alt={pokemon.name} width={1000} height={1000}
              className='object-contain' />
              <div className='py-4 flex justify-evenly w-full'>
                <Link href={`/pokemon/${pokemon.name}`} ><Button>Info</Button></Link>
                <Button>Select</Button>
              </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
            </>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    </div>
    <figure className='pl-10 mb-10 w-40 text-lg'>12 Pokemon in your Pokèdex</figure>
    <Image src={LogoPokemones} className='absolute top-0 -z-10' alt='logo de Pokemones' width={400} height={300} />
    </>
  );
}
