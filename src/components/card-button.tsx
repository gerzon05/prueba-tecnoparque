'use client'
import Image from 'next/image';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useBearStore, useBearStore2 } from '@/state/battleground';

export default function CardButton({src, name, move}: {src: string, name: string, move: string}){
    const {increase} = useBearStore()
    const {increaseAuto} = useBearStore2()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, ataque: string): void => {
        e.preventDefault();
        increase(0)
        increaseAuto(0)
        toast.info(`Usaste el ataque de ${ataque}`);
        setTimeout(() => {
            increase(Math.floor(Math.random() * 10) + 1);
        }, 1000);
        setTimeout(() => {
            increaseAuto(Math.floor(Math.random() * 10) + 1);
        }, 4000);
    }
    return(
        <Button className='border rounded-md p-4 flex flex-col items-center w-fill hover:bg-secondary/20 h-auto bg-transparent focus-within:bg-secondary/20' onClick={(e)=> handleClick(e,move)}>
        <Image src={src} alt={name} width={100} height={0} className="object-contain fondo" />
        <p>
        {move}
        </p>
    </Button>
    )
}