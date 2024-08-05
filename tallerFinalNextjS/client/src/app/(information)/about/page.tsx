import ButtonComponent from "../../../components/ButtonComponent";
import styles from "../../page.module.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'Pagina de abot lista',
}

export default function About() {
    return (
        <>
            {/* creación de un component */}
            <h1 className={styles.contenido}>About</h1>
            <ButtonComponent name="Perrito" />
        </>
    );
}
