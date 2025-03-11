// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
const Cart = () => {
  const jwttoken = Cookies.get('jwt_token')
  if (jwttoken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
      alt="cart"
    />
  )
}
export default Cart
