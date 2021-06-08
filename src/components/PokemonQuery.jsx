/* @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client';
import pokeballImg from '../assets/pokeball_closed.png'
import { Fragment } from 'react';
import { loadingPokeball, PokemonFragment } from '../style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`

export const PokemonQuery = (props) => {
  //graphQL fetch
  const { loading, error, data} = useQuery(GET_POKEMONS, {
    variables: props.gqlVariables,
  });

  if (loading) return <div style={{ width: "100%" }}>
    <img loading="lazy" alt={"pokeball"} css={loadingPokeball} src={pokeballImg} />
  </div>

  if (error) return `Error! ${error.message}`

  const myPokemonList = JSON.parse(localStorage.getItem("myPokemon") || "[]");

  
  return <Fragment>
    {
      data.pokemons.results.map((pokemon, idx) => {
        return <Link key={props.gqlVariables.offset + idx + 1} css={PokemonFragment} to={`/pokemon/${pokemon.name}`}>
          <div className="hover-div">
            <img loading="lazy" alt="pokeball" src={pokeballImg} />
            <b>Catch</b>
          </div>

          <img loading="lazy" alt={pokemon.name} src={pokemon.image} />
          <div>{`#${("" + (props.gqlVariables.offset + idx + 1)).padStart(3, "0")}`}</div>
          <b>{`${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`}</b>

          <div className="owned">
            <FontAwesomeIcon icon={faTabletAlt} />
            <b>{myPokemonList.filter(pokemon => pokemon.id === props.gqlVariables.offset+idx+1).length }</b>
          </div>

        </Link>
      })
    }
  </Fragment>
}