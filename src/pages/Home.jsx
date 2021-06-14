/* @jsxImportSource @emotion/react */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useRef, useState } from 'react';
import { PokemonQuery } from '../components/PokemonQuery'
import { flexContainer, page } from '../style'
import { Redirect } from 'react-router-dom';

export const Home = (props) => {

  const gqlVariables = {
    offset: 0,
    limit: 20
  };

  document.title = 'Pokemon'
  
  const [nameQuery, setNameQuery] = useState("")
  const [redirectByQuery, setRedirectByQuery] = useState(false)
  const [pokemons, setPokemons] = useState([<PokemonQuery gqlVariables={gqlVariables} />])
  const refContainer = useRef(null);


  const nameQueryHandler = (event) => {
    setNameQuery(event.target.value)
  }
  

  const handleScroll = () => {
    
    const container = refContainer.current

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

  return <div css={page}>
    {redirectByQuery ? <Redirect to={`/pokemon/${nameQuery.toLowerCase()}`} /> : null}
    <div className="flex-center-column">
      <b data-testid = "find-by-name-lbl" >Find By Name</b>
      <div>
        <input onKeyUp={handleInputEnter} value={nameQuery} placeholder={"Ditto"} onChange={nameQueryHandler} />
        <FontAwesomeIcon icon={faSearch} style={{ cursor: "Pointer" }} onClick={findPokemon} />
      </div>
    </div>
    <div ref={refContainer} id="pokemon-container" onScroll={handleScroll} css={flexContainer}>
      {pokemons.map((pokemon, __) => (<Fragment key={__}>{pokemon}</Fragment>))}
    </div>

  </div>
}