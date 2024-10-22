import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css'
import { addToLS, getStoredCart, removeFromLs } from "../../utilities/localStorage";
import Cart from "../cart/Cart";


const Bottles = () => {
    const [bottles, SetBottles] = useState([])
    const[carts , setCarts] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => SetBottles(data))
    }, [])

    //local storage
    useEffect(() => {
        console.log('added useEffect', bottles.length)
        if(bottles.length){
            const storeCart = getStoredCart()
            console.log(storeCart, bottles)

            const saveCart = [];
            for(const id of storeCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log('save cart', saveCart)
            setCarts(saveCart)
        }
    }, [bottles])

    const handleAddToCart = (bottle) =>{
        // console.log('bottle added', bottle)
        const newCart = [...carts, bottle]
        setCarts(newCart);
        addToLS(bottle.id)
    }
    const handleRmoveCart = (id) => {
        // romve From visual cart
        const rimining = carts.filter(bottle => bottle.id !== id);
        setCarts(rimining)
        // remove from LocalStorage
        removeFromLs(id)
    }

    return (
        <div>
            <h3>Bottles here {bottles.length}</h3>
            <Cart cart={carts} handleRmoveCart={handleRmoveCart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart ={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;