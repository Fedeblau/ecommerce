import './App.css'
import { Button } from './components/Button'
import { ItemCount } from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsContainer from './components/PostsContainer'

export function App() {

  return (
    <>
      {/* <NavBar/>
      <ItemListContainer greeting="hola"/> */}
      <PostsContainer/>
    </>
  )
}




