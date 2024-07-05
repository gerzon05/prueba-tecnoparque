import { getPokemonDetail, getPokemonForName } from '@/lib/data';
import fondo from '../../../../public/png/fondo.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default async function name({ params }: { params: { name: string } }) {
    const pokemondatails = await getPokemonForName(params.name);
    const pokemonabiliti = await getPokemonDetail(
        pokemondatails.abilities[0].ability.url
    );
    return (
        <>
            <Button
                className="absolute top-5 left-5 z-10 md:size-10"
                variant={'outline'}
                size={'icon'}
                asChild
            >
                <Link href={'/'}>
                    <MoveLeft className="md:size-8" />
                </Link>
            </Button>
            <div className='flex justify-center w-full z-10 fixed bottom-2'>
                <Button className='w-fit md:text-3xl' variant={'secondary'} asChild>
                    <Link href="/battleground">Battleground</Link>
                </Button>
            </div>
            <div className="md:px-20 md:h-screen relative overflow-hidden flex justify-center items-center">
                <Image
                    src={fondo}
                    alt="fondo de la pagina"
                    width={700}
                    height={0}
                    className="absolute top-0 left-0 bottom-0 right-0 object-fill -z-10 w-full object-center"
                />
                <Image
                    src={pokemondatails.sprites.other.home.front_default}
                    alt="fondo de la pagina"
                    width={700}
                    height={0}
                    className="object-cover m-auto w-10/12 lg:w-1/2"
                />
            </div>
            <section className="px-3 pt-10 text-center pb-4">
                <h2 className="text-center font-bold text-6xl md:text-9xl">
                    {params.name}
                </h2>
                <Badge className="text-lg md:text-5xl py-1 mt-4 px-4 md:px-10 bg-secondary text-black">
                    {pokemondatails.types[0].type.name}
                </Badge>
                <p className="pt-7 px-6 text-md md:text-3xl text-slate-500">
                    {pokemonabiliti.effect_entries[0].effect}
                </p>
            </section>
            <div className="grid md:grid-cols-2 p-5 gap-3">
                <section className="border rounded-md py-2 h-72 overflow-auto">
                    <h3 className="text-center text-xl md:text-2xl font-bold">
                        Abilities
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-4 mt-4">
                        {pokemondatails.abilities.map((ability: any, index: number) => (
                            <li key={index}>
                                <Badge className="text-sm py-1 px-4 bg-primary text-black">
                                    {ability.ability.name}
                                </Badge>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="border rounded-md py-2 h-72 overflow-auto">
                    <h3 className="text-center text-xl md:text-2xl font-bold">Moves</h3>
                    <ul className="flex flex-wrap justify-center gap-4 mt-4">
                        {pokemondatails.moves.map((move: any, index: number) => (
                            <li key={index}>
                                <Badge className="text-sm py-1 px-4 bg-primary text-black">
                                    {move.move.name}
                                </Badge>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <section className="border rounded-md p-2 m-4">
                <h3 className="text-center text-xl md:text-2xl font-bold">Stats</h3>
                <ul className="flex flex-col gap-4 mt-4">
                    {pokemondatails.stats.map((stat: any, index: number) => (
                        <li key={index} className='border-t pt-2'>
                            <Badge className="text-sm py-1 mb-2 px-4 bg-primary text-black">
                                {stat.stat.name}
                            </Badge>
                            <Progress
                                className="w-full"
                                value={stat.base_stat}
                                max={100}
                            ></Progress>
                            <span className="text-xs text-gray-500">{stat.base_stat}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
