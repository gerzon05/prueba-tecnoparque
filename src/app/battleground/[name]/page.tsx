import Battle from '@/components/battle';
import CardButton from '@/components/card-button';
import { Button } from '@/components/ui/button';
import { getPokemonForName } from '@/lib/data';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export default async function Page({ params }: { params: { name: string } }) {
    const pokemondatails = await getPokemonForName(params.name);
    const pokemonAuto = await getPokemonForName(Math.floor(Math.random() * 60) + 1)

    return (
        <>
            <Button
                className="absolute top-1 left-1 md:top-5 md:left-5 z-20 md:size-10 bg-muted"
                variant={'outline'}
                size={'icon'}
                asChild
            >
                <Link href={'/'}>
                    <MoveLeft className="size-4 md:size-8" />
                </Link>
            </Button>
            <h1 className="absolute top-5 z-10 text-center text-3xl md:text-7xl w-full font-semibold">
                Battleground
            </h1>
            <Battle pokemonAuto={pokemonAuto} pokemondatails={pokemondatails} />
            <hr className='my-4 h-1 bg-destructive/40 border-0'/>
            <h2 className="text-center text-3xl md:text-7xl w-full font-semibold">Choose Your Attack</h2>
            <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-3 p-6 h-80 overflow-auto'>
                {
                    pokemondatails.moves.map((move: any, index: number) => (
                        <CardButton key={index} src={pokemondatails.sprites.other.showdown.front_shiny} name={pokemondatails.name} move={move.move.name} />
                    ))
                }
            </section>
        </>
    );
}
