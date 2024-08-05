import ButtonComponent from "@/components/ButtonComponent";
import styles from "../../../page.module.css";
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Nuevo post',
    description: 'Pagina de post lista',
}



export default async function Only({ params }: { params: { id: string } }) {
    const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`, { next: { revalidate: 3600 } }).then((res) => res.json());
    return (
        <>
            <h1 className={styles.contenido}>{info.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`} alt="Picture of the author" width={100} height={100} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${info.id}.png`} alt="Picture of the author" width={100} height={100} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${info.id}.png`} alt="Picture of the author" width={100} height={100} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${info.id}.png`} alt="Picture of the author" width={100} height={100} />
            <ButtonComponent name="Pokemones" />
        </>
    );
}