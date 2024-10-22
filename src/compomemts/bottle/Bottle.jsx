import './bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({bottle, handleAddToCart }) => {
    const {name, img, price}= bottle;
    return (
        <div className="bottle">
            <h4>Bottle : {name}</h4>
            <img src={img} alt="" />
            <h5>Price : ${price}</h5>
            <button onClick={() => handleAddToCart(bottle)}>Purchases</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddToCart : PropTypes.func.isRequired
}
export default Bottle;