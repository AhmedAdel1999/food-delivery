import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cartSlice"
import allProducts from "../assets/fake-data/products"
import ProductCart from "./productCart"

const ProductDetails = ({currentProduct}) =>{
    let inCart = false
    const dispatch = useDispatch()
    const{image01,image02,image03} = currentProduct
    const {cart} = useSelector((state)=>state.cart)
    cart.forEach((item)=>{if(item.id==currentProduct.id){inCart=true}})
    let matchedProducts = allProducts.filter((item)=>item.category==currentProduct.category)

    return(
        <section className="py-16 xs:px-8 sm:px-16">
            <div className="grid grid-cols-12 xs:gap-y-8 xs:gap-x-0 sm:gap-8 mb-10">
                <div className="xs:col-span-12 md:col-span-6 flex gap-x-8">
                    <div className="flex w-[80px] shrink-0 flex-col justify-between">
                        {
                            [image01,image02,image03].map((item,ind)=>{
                                return(
                                    <img 
                                        key={ind}
                                        alt={`product-img ${ind + 1}`}
                                        loading="lazy"
                                        src={item}
                                        className="w-[80px] h-[100px]"
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="shrink max-w-[500px] w-full max-h-[350px]">
                        <img 
                            alt="product-img"
                            loading="lazy"
                            src={image01}
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="xs:col-span-12 md:col-span-6 flex flex-col xs:items-center sm:items-start">
                    <h3 className="text-darkerText font-bold xs:text-2xl md:text-4xl mb-8">
                        {currentProduct.title}
                    </h3>
                    <p className="w-full text-mainColor mb-4 text-lg flex justify-between max-w-[200px]">
                        <span>Price:</span>
                        <span>${currentProduct.price}</span>
                    </p>
                    <p className="w-full text-darkerText mb-4 flex items-center justify-between max-w-[200px]">
                        <span>Category:</span>
                        <span className="p-2 rounded-md bg-ligthbgColor">${currentProduct.category}</span>
                    </p>
                    {
                        inCart?
                        <button className="btnStyle text-[15px] py-1">IN Cart</button>
                        :
                        <button 
                            className="btnStyle text-[15px] py-1"
                            onClick={()=>dispatch(addToCart({
                                ...currentProduct,
                                quantity:1
                            }))}
                            >
                            Add To Cart
                        </button>
                    }
                </div>
            </div>
            <div>
                <h3 className="text-darkerText font-bold xs:text-xl xs:text-center sm:text-left md:text-2xl mb-10">
                    You might also like
                </h3>
                <div className="grid justify-items-center grid-cols-12 xs:gap-y-8 xs:gap-x-0 sm:gap-8">
                    {
                        matchedProducts.map((product)=>{
                            return(
                                <ProductCart key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default ProductDetails;