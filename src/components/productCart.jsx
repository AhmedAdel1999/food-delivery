import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const ProductCart = ({product}) =>{

    const { id, title, image01, price } = product;
    const {cart} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()

    const checkINCart = (productId) =>{
       let check = false
       cart.forEach((item)=>{
        if(item.id==productId){
            check=true
        }
       })

       return check;
    }

    return(
        <div className="productStyle group">
            <img
               alt="product-img"
               loading="lazy"
               src={image01}
               className="h-[120px] w-[120px] rounded-[50%] transition duration-500 group-hover:scale-[1.125]"
            />
            <Link to={`/foods/${id}`} className="w-full text-darkerText truncate text-[16px] text-center">
                {title}</Link>
            <div className="w-full flex flex-wrap items-center justify-between gap-[20px]">
                <p className="text-mainColor">${price}</p>
                {
                    checkINCart(id)?
                    <button className="btnStyle text-[15px] py-1">IN Cart</button>
                    :
                    <button 
                        className="btnStyle text-[15px] py-1"
                        onClick={()=>dispatch(addToCart({
                            ...product,
                            quantity:1
                        }))}
                        >
                           Add To Cart
                    </button>
                }
                
            </div>
        </div>
    )
}
export default ProductCart;