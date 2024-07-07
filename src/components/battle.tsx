'use client';

import { useBearStore, useBearStore2 } from '@/state/battleground';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { on } from 'events';
import { Button } from './ui/button';

export default function Battle({
  pokemondatails,
  pokemonAuto,
}: {
  pokemondatails: any;
  pokemonAuto: any;
}) {
  const increment = useBearStore((state) => state.bears);
  const increment2 = useBearStore2((state) => state.bears);
  const [one, setOne] = useState(100);
  const [two, setTwo] = useState(100);

  useEffect(() => {
    if (two <= 0) {
      return;
    }
    setOne(one - increment);
  }, [increment]);
  useEffect(() => {
    if (one <= 0) {
      return;
    }
    setTwo(two - increment2);
  }, [increment2]);

  const handelClick = () => {
    setOne(100);
    setTwo(100);
  };

  return (
    <>
      <div className="relative flex gap-10 justify-between items-center mt-5 font-bold">
        <article className="w-2/5 relative">
          <Image
            src={pokemonAuto.sprites.other.home.front_default}
            alt={pokemonAuto.name}
            width={1000}
            height={0}
            className="object-contain fondo"
          />
          {two <= 0 && (
            <div className="text-center text-2xl animate-pulse font-bold">
              Winnern
            </div>
          )}
          <div className="mt-10 flex flex-col gap-2 px-4">
            <figure className="w-full flex justify-between items-center">
              <Badge variant={'outline'} className="hidden md:block text-md">
                Life {one >= 0 ? one : 0}%
              </Badge>
              <div className="flex gap-4 items-center text-sm md:text-xl">
                Player 1
                <Avatar>
                  <AvatarFallback className="size-5 p-4 md:size-10 rounded-full">
                    PY
                  </AvatarFallback>
                </Avatar>
              </div>
            </figure>
            <Progress
              max={100}
              className="bg-red-500"
              value={one >= 0 ? one : 0}
            />
          </div>
        </article>
        <span className="text-sm md:text-3xl p-1 md:p-4 rounded-md bg-muted">
          V/S
        </span>
        <article className="w-2/5">
          <Image
            src={pokemondatails.sprites.other.home.front_default}
            alt={pokemonAuto.name}
            width={600}
            height={0}
            className="object-contain fondo"
          />
          {one <= 0 && (
            <div className="text-center text-2xl animate-pulse font-bold">
              Winnern
            </div>
          )}
          <div className="mt-10 flex flex-col gap-2 px-4">
            <figure className="flex justify-end md:justify-between w-full items-center">
              <Badge variant={'outline'} className="hidden md:block text-md">
                Life {two >= 0 ? two : 0}%
              </Badge>
              <div className="flex gap-4 items-center md:text-xl">
                You
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-6 md:w-10 rounded-full"
                  />
                </Avatar>
              </div>
            </figure>
            <Progress
              max={100}
              className="bg-yellow-500"
              value={two >= 0 ? two : 0}
            />
          </div>
        </article>
      <figure className='fixed z-50 bottom-3 w-full flex justify-center'>
      {
        one <= 0 && <Button className="w-fit " onClick={handelClick}>Start a new BallataHaz clic para usar esta alternativa</Button>
      }
      {
        two <= 0 && <Button className="w-fit" onClick={handelClick}>Start a new BallataHaz clic para usar esta alternativa</Button>
      }
      </figure>
      </div>
    </>
  );
}
