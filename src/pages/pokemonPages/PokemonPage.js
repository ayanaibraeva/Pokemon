import React, { useEffect, useState } from 'react';
import classes from "./PokemonPage.module.css";
import axios from "axios";
import Pokemon from "../../components/pokemon/Pokemon";

const PokemonPages = () => {
    const [pokemonList, setPokemonList] = useState([]);
    console.log(pokemonList, "pokemon");

    const getPokemon = async () => {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const updatedPokemonList = await Promise.all(
            data.results.map(async (pokemon) => {
                const response = await axios.get(pokemon.url);
                return {
                    name: pokemon.name,
                    image: response?.data?.sprites?.other?.dream_world?.front_default,
                    url: pokemon.url,
                };
            })
        );
        setPokemonList(updatedPokemonList);
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div className={classes.pokemon}>
            <Pokemon pokemonList={pokemonList} />
        </div>
    );
};

export default PokemonPages;