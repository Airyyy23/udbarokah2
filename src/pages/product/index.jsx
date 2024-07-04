import Machine from "./machine"
import Materials from "./material"
import Spareparts from "./spareparts"

const product = () => {
  return (
    <div>
      <Machine />
      <Spareparts />
      <Materials />
    </div>
  )
}

export default product