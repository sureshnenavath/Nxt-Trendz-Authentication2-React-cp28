// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
const Cart = () => {
  const jwttoken = Cookies.get('jwt_token')
  if (jwttoken === undefined) {
    return <Redirect to="/login" />
  }
  return <h1>Cart Component</h1>
}
export default Cart
