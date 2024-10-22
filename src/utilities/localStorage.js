const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
const saveCartToLS = (cart) =>{
    const cartStringiField = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringiField)
}
const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id)

    saveCartToLS(cart)
}
const removeFromLs = (id) =>{
    const cart = getStoredCart();
    // removing every id
    const remining = cart.filter(idx => idx !== id)
    saveCartToLS(remining)
}
export {addToLS, getStoredCart, removeFromLs}