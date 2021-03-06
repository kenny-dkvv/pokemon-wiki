/* @jsxImportSource @emotion/react */
import { flexContainer, page, PokemonFragment } from "../style";
import pokeballImg from '../assets/pokeball_open.png'
import trainerImg from '../assets/ash_trainer.png'
import { Fragment, useState } from "react";
import { Alert } from "../components/Alert";



export const MyPokemon = () => {
  const myPokemonList = JSON.parse(localStorage.getItem("myPokemon") || "[]");
  const [pokemonListState, setPokemonListState] = useState(myPokemonList)
  const [alert, setAlert] = useState()
  const [nameQuery, setNameQuery] = useState("")
  document.title = 'Pokemon-wiki | My Pokemon'

  const deletePokemon = (pokemonName, idx) => {
    myPokemonList.splice(idx, 1)
    setPokemonListState([...myPokemonList])
    localStorage.setItem('myPokemon', JSON.stringify(myPokemonList))
    
    setAlert(<Alert closeAlert = {closeAlert} background="#F84F31" message={`${pokemonName[0].toUpperCase() + pokemonName.slice(1)} has been released! Bye bye ${pokemonName[0].toUpperCase() + pokemonName.slice(1)}`} />)
  }

  const closeAlert = () =>{
    setAlert(null)
  }


  const typeSearchName = ({target:{value}}) =>{
    if(value.length){
      const temp = myPokemonList.filter(
        pokemon => 
        pokemon.name.toLowerCase().includes(value.toLowerCase()) 
        || pokemon.originalName.toLowerCase().includes(value.toLowerCase()))

      setPokemonListState(temp)
    }
    else setPokemonListState(myPokemonList)
    setNameQuery(value)
  }

  return <Fragment>
    {alert}
    <div css={page}>
      {pokemonListState.length > 0 || myPokemonList.length > 0 ?
        <Fragment>
          <div className="flex-center-column">
            <b>Find By Name</b>
            <input value={nameQuery} placeholder={"Ditto"} onChange={typeSearchName} />
          </div>
          <div css={flexContainer}>
            {pokemonListState.map((pokemon, __) => {
              return <div key={__} css={PokemonFragment}>
                <div className="hover-div" onClick={() => {
                  if(window.confirm(`Are you sure you want to delete ${pokemon.name}?`))
                    deletePokemon(pokemon.name, __)
                }}>
                  <img loading="lazy"alt={"pokeball"} src={pokeballImg} />
                  <b>Release</b>
                </div>

                <img loading="lazy" alt={"pokeball"} src={pokemon.image_url} />
                <div>{`#${("" + (pokemon.id + 1)).padStart(3, "0")}`}</div>
                <b style={{ marginBottom: "10px" }}>{`${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} / ${pokemon.originalName[0].toUpperCase() + pokemon.originalName.slice(1)}`}</b>
              </div>
            })}
          </div>
        </Fragment> : <div className="flex-center-responsive">
          <img loading="lazy" alt={"catch more"} id="trainer-big" src={trainerImg} />
          <b>No Pokemon yet, Lets explore and catch Pokemon together!</b>
        </div>}


    </div>
  </Fragment>
}