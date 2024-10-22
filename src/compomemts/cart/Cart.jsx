import PropTypes from 'prop-types';
import './cart.css'
const Cart = ({cart, handleRmoveCart}) => {
    return (
        <div>
            <h4>Add Cart : {cart.length}</h4>
            <div className="cart-container">
                {cart.map(bottle =><div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={() => handleRmoveCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    handleRmoveCart : PropTypes.func.isRequired
}

export default Cart;