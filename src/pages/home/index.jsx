import Hero from './hero'
import Product from './product'
import Info from "./info/"
import Service from './service'
import Work from './work'
import Collab from '../collab'

const home = () => {
  return (
    <div>
      <Hero />
      <Collab />
      <Product />
      <Info />
      <Service />
      <Work />
    </div>
  )
}

export default home