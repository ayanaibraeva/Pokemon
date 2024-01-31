import React, { useEffect } from 'react';
import classes from "./Pokemon.module.css";
import axios from "axios";

const Pokemon = ({ pokemonList }) => {

    const getPokemonDetails = async (url) => {
        try {
            const response = await axios.get(url);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPokemonDetails(pokemonList[0]?.url);
    }, [pokemonList]);

    return (
        <div className={classes.card}>
            {pokemonList.map(item => (
                <div className={classes.card_content} key={item.name}>
                    <p>{item.name}</p>
                    <div className={classes.photo}>
                        <img src={item.image} alt="" />
                    </div>
                    <button onClick={() => getPokemonDetails(item.url)}>ПОДРОБНЕЕ</button>
                </div>
            ))}
        </div>
    );
};

export default Pokemon;