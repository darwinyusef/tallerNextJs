import React from 'react'
import styles from "./pkm_card.module.css";

type Props = {
    name: string,
    url: string
}

const PkmCardComponent: React.FC<Props>  = (props: Props) => {
    const { name, url } = props
    return (
        <div className={styles.card} >
            <h3>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png`} alt={name} />
        </div>
    )
}

export default PkmCardComponent; 