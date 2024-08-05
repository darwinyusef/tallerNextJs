import ButtonComponent from "../../../components/ButtonComponent";
import styles from "./page.module.css";
import { Metadata } from 'next'
import Link from "next/link";
import PkmCardComponent from "@/components/pokemonCardComponent/PkmCardComponent";

type params = {
    name: string,
    url: string
}

export const metadata: Metadata = {
    title: 'Pokemons',
    description: 'Pagina de abot lista',
}

export async function generateStaticParams() {
    const posts = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`).then((res) => res.json());

    return posts.results.map((post: params) => {
        return { params: { name: post.name, url: post.url } };
    });
}


export default async function Pokemons() {
    const info = await generateStaticParams();
    return (
        <>
            {/* creación de un component */}
            <h1 className={styles.contenido}>Pokemons</h1>
            <div className={styles.cards}>
                {
                    info.map((res: { params: params }) => {
                        return (
                            <Link href={`/only/${res.params.url.split('/')[6]}`} key={res.params.name}>
                                <PkmCardComponent name={res.params.name} url={res.params.url} />
                            </Link>
                        )
                    })
                }
            </div>
            <ButtonComponent name="Perrito" />
        </>
    );
}
