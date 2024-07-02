import Hero from './hero'
import Product from './product'
import Info from "./info/"
import Service from './service'
import Work from './work'

const home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Info />
      <Service />
      <Work />
    </div>
  )
}

export default home