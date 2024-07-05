import { AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getPokemonForName } from '@/lib/data';
import { Avatar } from '@radix-ui/react-avatar';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page({ params }: { params: { name: string } }) {
    const pokemondatails = await getPokemonForName(params.name);
    const pokemonAuto = await getPokemonForName(Math.floor(Math.random() * 60) + 1)

    return (
        <>
            <Button
                className="absolute top-1 md:top-5 md:left-5 z-5 md:size-10 bg-muted"
                variant={'outline'}
                size={'icon'}
                asChild
            >
                <Link href={'/'}>
                    <MoveLeft className="size-4 md:size-8" />
                </Link>
            </Button>
            <h1 className="absolute top-7 text-center text-3xl md:text-7xl w-full font-semibold">
                Battleground
            </h1>
            <div className="relative flex gap-10 justify-between items-center mt-10 font-bold">
                <article>
                    <Image
                        src={pokemonAuto.sprites.other.home.front_default}
                        alt={pokemonAuto.name}
                        width={600}
                        height={0}
                        className="object-contain fondo w-20 mt-12 md:mt-3"
                    />
                    <div className='mt-10 flex flex-col gap-2'>
                        <figure className='w-full flex justify-between items-center'>
                            <Badge variant={'outline'} className='hidden md:block text-md'>Life 80%</Badge>
                            <div className='flex gap-4 items-center text-sm md:text-3xl'>
                            Player 1
                            <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='w-16 rounded-full' />
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
                <article>
                    <Image
                        src={pokemondatails.sprites.other.home.front_default}
                        alt={pokemonAuto.name}
                        width={600}
                        height={0}
                        className="object-contain fondo w-20 mt-12 md:mt-3"
                    />
                    <div className='mt-10 flex flex-col gap-2'>
                        <figure className='flex justify-between w-full items-center'>
                            <Badge variant={'outline'} className='hidden md:block text-md'>Life 100%</Badge>          
                            <div className='flex gap-4 items-center md:text-3xl'>
                                You
                            <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='w-16 rounded-full' />
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
            <hr className='my-4'/>
        </>
    );
}
