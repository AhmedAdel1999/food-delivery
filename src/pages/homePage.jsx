import Categories from "../components/categories"
import Customers from "../components/customers"
import Foods from "../components/foods"
import Footer from "../components/footer"
import Services from "../components/services"
import Tasty from "../components/tasty"
import TopHome from "../components/topHome"

const HomePage = () =>{
    return(
        <div className="h-full">
            <TopHome />
            <Categories />
            <Services />
            <Foods />
            <Tasty />
            <Customers />
            <Footer />
        </div>
    )
}
export default HomePage