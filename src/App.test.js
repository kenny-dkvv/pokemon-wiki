// Link.react.test.js
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { PokemonQuery } from './components/PokemonQuery';
import { render, waitFor } from '@testing-library/react';
import { GET_POKEMONS } from './gql_queries';
import { BrowserRouter } from 'react-router-dom';
const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        offset: 0,
        limit: 20
      },
    },
    result: {
      data: {
        pokemons: {
          results: [
            {
              "url": "https://pokeapi.co/api/v2/pokemon/1/",
              "name": "bulbasaur",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/2/",
              "name": "ivysaur",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/3/",
              "name": "venusaur",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/4/",
              "name": "charmander",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/5/",
              "name": "charmeleon",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/6/",
              "name": "charizard",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/7/",
              "name": "squirtle",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/8/",
              "name": "wartortle",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/9/",
              "name": "blastoise",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/10/",
              "name": "caterpie",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/11/",
              "name": "metapod",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/12/",
              "name": "butterfree",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/13/",
              "name": "weedle",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/14/",
              "name": "kakuna",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/15/",
              "name": "beedrill",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/16/",
              "name": "pidgey",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/17/",
              "name": "pidgeotto",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/18/",
              "name": "pidgeot",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/19/",
              "name": "rattata",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
            },
            {
              "url": "https://pokeapi.co/api/v2/pokemon/20/",
              "name": "raticate",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
            }
          ]
        },
      },
    },
  },
]

describe("homepage test", () => {

  it('loaded pokemon', async () => {

    let root = render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false} >
          <PokemonQuery gqlVariables={{
            offset: 0,
            limit: 20
          }} />
        </MockedProvider>
      </BrowserRouter>

    );

    
    await waitFor(() => {
      for(let pokemon of mocks[0].result.data.pokemons.results){
        let pokemonNameDOMObject = root.getByTestId(`pokemon-${pokemon.name}`)
        expect(pokemonNameDOMObject.innerHTML).toBe(`${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`)
      }
    })
  })

})



