import { get } from 'http';
import { toast } from 'sonner';

export async function getPokemon() {
  try {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=30');
    const response = await data.json();
    const pokemons = response.results;
    return pokemons;
  } catch (error) {
    toast.error('Error al obtener los Pokemones');
  }
}

export async function getPokemonDetail(url: string) {
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch (error) {
    toast.error('Error al obtener los detalles del Pokemon');
  }
}
export async function getPokemonForName(name: string | number) {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const response = await data.json();
    return response;
  } catch (error) {
    toast.error('Error al encontrar el Pokemon');
  }
}