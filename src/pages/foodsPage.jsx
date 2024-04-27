import Footer from "../components/footer"
import HeaderBanner from "../components/headerbaner"
import PaginatedProducts from "../components/paginatedProducts"

const FoodsPage = () =>{
    return(
        <div className="h-full">
            <HeaderBanner title={"All Foods"} />
            <PaginatedProducts />
            <Footer />
        </div>
    )
}
export default FoodsPage