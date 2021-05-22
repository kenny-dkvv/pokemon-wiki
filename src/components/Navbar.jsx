/* @jsxImportSource @emotion/react */
import { navbar, navbarLink } from '../style'
import iconCatchPokemon from '../assets/pokeball_closed.png'
import starterPokemon from '../assets/starter_pokemon.png'
import {Link } from 'react-router-dom';

export const Navbar = () => {
  return <div
  css={navbar}>
    <Link css = {navbarLink} to="/">
      <img src={iconCatchPokemon} alt={"catch pokemon"} />
      <div>Catch Pokemon</div>
    </Link>
    <Link css = {navbarLink} to="/my-pokemon"  >
      <img src={starterPokemon} alt={"my pokemon"}/>
      My Pokemon
    </Link>
  </div>
}