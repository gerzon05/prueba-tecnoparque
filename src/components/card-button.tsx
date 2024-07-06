'use client'
import Image from 'next/image';
import { Button } from './ui/button';
import { toast } from 'sonner';

export default function CardButton({src, name, move}: {src: string, name: string, move: string}){
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, ataque: string): void => {
        e.preventDefault();
        toast.info(`Usara el ataque de ${ataque}`);
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