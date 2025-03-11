// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
const Products = () => {
  const jwttoken = Cookies.get('jwt_token')
  if (jwttoken === undefined) {
    return <Redirect to="/login" />
  }
  return <h1>Products Component</h1>
}

export default Products
