import CartTable from "../components/cartTable";
import Footer from "../components/footer";
import HeaderBanner from "../components/headerbaner";

const CartPage = () =>{
    return(
        <div className="h-full">
            <HeaderBanner title={"Your Cart"} />
            <CartTable />
            <Footer />
        </div>
    )
}
export default CartPage;