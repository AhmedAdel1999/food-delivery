import Footer from "../components/footer"
import HeaderBanner from "../components/headerbaner"
import PaymentInfo from "../components/paymentInfo"

const CheckoutPage = () =>{
    return(
        <div className="h-full">
            <HeaderBanner title={"Checkout"} />
            <PaymentInfo />
            <Footer />
        </div>
    )
}
export default CheckoutPage