import { useParams } from "react-router-dom";
import HeaderBanner from "../components/headerbaner";
import allProducts from "../assets/fake-data/products"
import Footer from "../components/footer";
import ProductDetails from "../components/productDetails";

const SingleProductPage = () =>{
    
    const {id} = useParams()
    const currentProduct = allProducts.filter((item)=>item.id==id)[0]
    return(
        <div className="h-full">
            <HeaderBanner title={currentProduct.title} />
            <ProductDetails currentProduct={currentProduct} />
            <Footer />
        </div>
    )
}
export default SingleProductPage;