/* @jsxImportSource @emotion/react */
import { detail, moveContainer, detailContainer, elementContainer, page, catchButtonPhone, catchButtonDesktop, alternateImgContainer, pokemonNameField } from "../style"
import { gql, useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFeatherAlt, faImages, faInfoCircle, faListUl, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import pokeball_closed from '../assets/pokeball_closed.png'
import { Fragment, useState } from "react";
import { Alert } from "../components/Alert";
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';


const GET_POKEMON = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name

    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    sprites {
      front_default
      front_shiny
      front_female
      front_shiny_female
    }
    height
    weight
    order
    message
  }
}
`

export const Details = (props) => {
  const pokemonName = props.match.params.pokemon_name

  document.title = `Pokemon | ${pokemonName[0].toUpperCase() + pokemonName.slice(1)}`;

  const [alert, setAlert] = useState()
  const [canCatch, setCanCatch] = useState(true)
  const [catchedName, setCatchedName] = useState(pokemonName)
  const myPokemonList = JSON.parse(localStorage.getItem("myPokemon") || "[]");


  const closeAlert = () => {
    setAlert(null)
  }
  const catchedNameHandler = (event) => {
    setCatchedName(event.target.value)
  }

  const checkNameAvailability = (name) => {
    if (!name) {
      return false
    }

    const tempArray = myPokemonList.filter(pokemon => pokemon.name.toUpperCase() === name.toUpperCase())
    if (tempArray.length > 0) return false
    return true
  }

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      renameAndSave()
    }
  }

  const catchPokemon = () => {
    if (Math.random() < 0.5) {
      setAlert(<Alert closeAlert={closeAlert} background="#F84F31" message={`Fail to catch ${pokemonName[0].toUpperCase() + pokemonName.slice(1)}`} />)
    }
    else {
      setAlert(<Alert closeAlert={closeAlert} background="#FFCC00" message={`Catch sucess, rename the ${pokemonName} first !`} />)

      setCanCatch(false)
    }
  }

  const renameAndSave = () => {
    console.log(catchedName)
    if (!checkNameAvailability(catchedName)) {
      setAlert(<Alert closeAlert={closeAlert} background="#F84F31" message={`Name is not valid`} />)
      return
    }

    myPokemonList.push({
      id: data.pokemon.id,
      name: catchedName,
      originalName: pokemonName,
      image_url: data.pokemon.sprites.front_default
    })

    localStorage.setItem('myPokemon', JSON.stringify(myPokemonList))

    setAlert(<Alert background="#23C552" closeAlert={closeAlert} message={`${catchedName} has been catched`} />)

    setCatchedName(pokemonName)
    setCanCatch(true)
    return
  }

  //graphQL fetch
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: pokemonName },
  });

  if (loading) return <div className="flex-center" style={{ width: "100%", height: "80vh" }}>
    <img loading="lazy" alt={"loading"} css={css
      `
  width:50%;
  animation: spin 4s infinite;
  @media(min-width:720px){
    width: 500px;
    height: 500px;
  }
  `} src={pokeball_closed} />
  </div>
  if (error) {
    return <div className={"flex-center-column"} style={{ padding: "10px" }}>
      <b>{`Error! ${error.message}`}</b>
      <Link to="/"><button>Catch another pokemon</button></Link>
    </div>
  }

  
  return <Fragment>
    {alert}
    <div css={page}>
      {canCatch ? <div css={catchButtonPhone} onClick={catchPokemon}>
        <img loading="lazy" src={pokeball_closed} alt="pokeball" />
        <b>Catch</b>
      </div> : null}

      <div css={detail}>
        <div className="flex-center-column">
          <img loading="lazy" className="pokemon-img" src={data.pokemon.sprites.front_default} alt="pokemon" />
          <div><b>{`${data.pokemon.name[0].toUpperCase() + data.pokemon.name.slice(1)}`}</b></div>
          <div css={elementContainer}>
            {data.pokemon.types.map((type, __) => (
              <div key={__}>{type.type.name.toUpperCase()}</div>
            ))}
          </div>
          {canCatch ? <div css={catchButtonDesktop} onClick={catchPokemon}>
            <img loading="lazy" src={pokeball_closed} alt="pokeball" />
            <b>Catch</b>
          </div> :
            <div css={pokemonNameField}>
              <div>Input pokemon name<br /> (cannot duplicate)</div>
              <div className="flex-center">
                <input onKeyDown={handleInputEnter} className={checkNameAvailability(catchedName) ? "input-right" : "input-wrong"} value={catchedName} onChange={catchedNameHandler} />
                <FontAwesomeIcon
                  style={{ color: checkNameAvailability(catchedName) ? "#0eaf18" : "rgb(255, 0, 0)" }}

                  icon={checkNameAvailability(catchedName) ? faCheckCircle : faTimesCircle} />
              </div>
              <div onClick={renameAndSave} className="button" >
                Name and Save
                <FontAwesomeIcon icon={faFeatherAlt} />
              </div>
            </div>}
          <div css={detailContainer}>
            <b>
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>Detail</span>
            </b>
            <table>
              <tbody>
                <tr>
                  <td>Dex No:</td>
                  <td>{`#${("" + data.pokemon.id).padStart(3, "0")}`}</td>
                </tr>
                <tr>
                  <td>Weight:</td>
                  <td>{`${data.pokemon.weight} lbs`}</td>
                </tr>
                <tr>
                  <td>Height:</td>
                  <td>{`${data.pokemon.height} inch`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div css={moveContainer} >
          <b>
            <FontAwesomeIcon icon={faListUl} />
            <span>Moves</span>
          </b>
          <ul className="moveListContainer">
            {data.pokemon.moves.map((move, __) => (<li key={__}>
              {move.move.name}
            </li>))}
          </ul>
        </div>
      </div>
      <div css={alternateImgContainer}>
        <b>
          <FontAwesomeIcon icon={faImages} />
          <span>Alternate Images</span>
        </b>
        <div className="flex">
          {
            Object.keys(data.pokemon.sprites).map((key, __) => {
              if (key === '__typename') return null
              if (!data.pokemon.sprites[key]) return null

              const tempKeyName = key.replaceAll("_", " ").replace("front", "").slice(1)

              return <div key={__}>
                <img loading="lazy" src={data.pokemon.sprites[key]} alt={key} />
                <div>{tempKeyName[0].toUpperCase() + tempKeyName.slice(1)}</div>
              </div>
            })
          }
        </div>
      </div>

    </div>
  </Fragment>
}