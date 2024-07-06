import CardButton from '@/components/card-button';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getPokemonForName } from '@/lib/data';
import { Avatar } from '@radix-ui/react-avatar';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';

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
            <div className="relative flex gap-10 justify-between items-center mt-5 font-bold">
                <article className='w-2/5'>
                    <Image
                        src={pokemonAuto.sprites.other.home.front_default}
                        alt={pokemonAuto.name}
                        width={1000}
                        height={0}
                        className="object-contain fondo"
                    />
                    <div className='mt-10 flex flex-col gap-2 px-4'>
                        <figure className='w-full flex justify-between items-center'>
                            <Badge variant={'outline'} className='hidden md:block text-md'>Life 80%</Badge>
                            <div className='flex gap-4 items-center text-sm md:text-xl'>
                            Player 1
                            <Avatar>
                            <AvatarFallback className='size-5 p-4 md:size-10 rounded-full' >PY</AvatarFallback>
                            </Avatar>
                            </div>
                        </figure>
                        <Progress
                            max={100}
                            className="bg-red-500"
                            value={80}
                        />
                    </div>
                </article>
                <span className="text-sm md:text-3xl p-1 md:p-4 rounded-md bg-muted">V/S</span>
                <article className='w-2/5'>
                    <Image
                        src={pokemondatails.sprites.other.home.front_default}
                        alt={pokemonAuto.name}
                        width={600}
                        height={0}
                        className="object-contain fondo"
                    />
                    <div className='mt-10 flex flex-col gap-2 px-4'>
                        <figure className='flex justify-end md:justify-between w-full items-center'>
                            <Badge variant={'outline'} className='hidden md:block text-md'>Life 100%</Badge>          
                            <div className='flex gap-4 items-center md:text-xl'>
                                You
                            <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='w-6 md:w-10 rounded-full' />
                            </Avatar>
                            </div>
                        </figure>
                        <Progress
                            max={100}
                            className="bg-yellow-500"
                            value={100}
                        />
                    </div>
                </article>
            </div>
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
