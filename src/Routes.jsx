import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MyPokemon } from './pages/MyPokemon';
import {Details} from './pages/PokemonDetails'

const Routes = () => {

  return <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route
        component={Home}
        exact path='/'
      />

      <Route
        component={Details}
        path='/pokemon/:pokemon_name'
      />

      <Route
        component={MyPokemon}
        path='/my-pokemon'
      />
    </Switch>
  </BrowserRouter>
}

export default Routes

