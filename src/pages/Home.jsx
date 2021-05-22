/* @jsxImportSource @emotion/react */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { PokemonQuery } from '../components/PokemonQuery'
import { flexContainer, page } from '../style'
import { Link } from 'react-router-dom';

export const Home = () => {

  document.title = 'Pokemon'
  const [pokemons, setPokemons] = useState([])
  const [nameQuery, setNameQuery] = useState("")

  const nameQueryHandler = (event) => {
    setNameQuery(event.target.value)
  }

  const gqlVariables = {
    limit: undefined,
    offset: 0,
  };

  const handleScroll = () => {
    const currentScrollY = window.innerHeight + window.scrollY
    const halfPageY = document.body.offsetHeight
    if (currentScrollY >= halfPageY) {
      gqlVariables.offset += 20
      const param = { ...gqlVariables }
      pokemons.push(<PokemonQuery gqlVariables={param} />)
      setPokemons([...pokemons])
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const param = { ...gqlVariables }
    pokemons.push(<PokemonQuery gqlVariables={param} />)
    setPokemons([...pokemons])

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return <div css={page}>
    <div className="flex-center-column">
      <b>Find By Name</b>
      <div>
        <input placeholder={"Ditto"} onChange={nameQueryHandler} />
        <Link to={`/pokemon/${nameQuery.toLowerCase()}`}><FontAwesomeIcon icon={faSearch} style={{cursor:"Pointer"}} /></Link>
      </div>
    </div>
    <div css={flexContainer}>
      {pokemons.map((pokemon, __) => (<Fragment key={__}>{pokemon}</Fragment>))}
    </div>

  </div>
}