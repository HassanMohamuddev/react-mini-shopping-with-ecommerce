import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";
import useShop from "../shopContext";

const Cart =()=>{
    const { products } = useShop();
    if(products.length <= 0) return <h1 className="b">Cart Is Empt</h1>
    return(
        <div className="cart-container">
            <CartProducts />
            <Payment />
        </div>
    )
};

export default Cart;