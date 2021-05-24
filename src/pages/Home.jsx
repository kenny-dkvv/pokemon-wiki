/* @jsxImportSource @emotion/react */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { PokemonQuery } from '../components/PokemonQuery'
import { flexContainer, page } from '../style'
import { Redirect } from 'react-router-dom';

export const Home = (props) => {

  document.title = 'Pokemon-wiki'
  const [pokemons, setPokemons] = useState([])
  const [nameQuery, setNameQuery] = useState("")
  const [redirectByQuery, setRedirectByQuery] = useState(false)

  const nameQueryHandler = (event) => {
    setNameQuery(event.target.value)
  }

  const gqlVariables = {
    offset: 0,
  };

  const handleScroll = () => {
    
    const container = document.getElementById("pokemon-container")


    const currentScrollY = container.scrollTop + container.clientHeight
    const halfPageY = container.scrollHeight
    if (currentScrollY >= halfPageY) {
      gqlVariables.offset += 20
      const param = { ...gqlVariables }
      pokemons.push(<PokemonQuery gqlVariables={param} />)
      setPokemons([...pokemons])
    }
  }

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setRedirectByQuery(true)
    }
  }

  const findPokemon = () => {
    if (nameQuery) {
      props.history.push(`/pokemon/${nameQuery.toLowerCase()}`)
    }
  }

  useEffect(() => {

    //infinite scrolling
    const container = document.getElementById("pokemon-container")

    container.addEventListener("scroll", handleScroll);
    const param = { ...gqlVariables }
    pokemons.push(<PokemonQuery gqlVariables={param} />)
    setPokemons([...pokemons])

    //enter di search
    var input = document.getElementsByTagName("input")[0]
    input.addEventListener("keyup", handleInputEnter)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      input.removeEventListener("keyup", handleInputEnter)
    }
  }, [])

  return <div css={page}>
    {redirectByQuery ? <Redirect to={`/pokemon/${nameQuery.toLowerCase()}`} /> : null}
    <div className="flex-center-column">
      <b>Find By Name</b>
      <div>
        <input value={nameQuery} placeholder={"Ditto"} onChange={nameQueryHandler} />
        <FontAwesomeIcon icon={faSearch} style={{ cursor: "Pointer" }} onClick={findPokemon} />
      </div>
    </div>
    <div id={"pokemon-container"} css={flexContainer}>
      {pokemons.map((pokemon, __) => (<Fragment key={__}>{pokemon}</Fragment>))}
    </div>

  </div>
}