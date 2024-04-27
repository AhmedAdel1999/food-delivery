import { useEffect, useState } from "react";
import pizza from "../assets/images/pizza.png"
import burger from "../assets/images/hamburger.png"
import bread from "../assets/images/bread.png"
import allProducts from "../assets/fake-data/products"
import ProductCart from "./productCart";

const Foods = () =>{
    const categories=[
        {id:1,value:"All"},
        {id:2,value:"Burger",img:burger},
        {id:3,value:"Pizza",img:pizza},
        {id:4,value:"Bread",img:bread},
    ]
    const [foodCategory,setFoodCategory] = useState("All")
    const[products,setProducts]=useState([...allProducts])

   const handleChange = (category) =>{
       setFoodCategory(category)
       if(category==="All"){
          setProducts([...allProducts])
       }else{
          setProducts(allProducts.filter((item)=>item.category===category))
       }
   }

    return(
        <section className="py-16 xs:px-8 sm:px-16">
            <h3 className="text-darkerText text-center text-3xl font-extrabold mb-10">
                Popular Foods
            </h3>
            <div className="mb-10 bg-mainColor flex flex-wrap justify-center items-center rounded-md py-4 px-8">
                {
                    categories.map((item)=>{
                        return(
                            <button 
                              onClick={()=>handleChange(item.value)}
                              key={item.id}
                              className={`cursor-pointer flex items-center border-none outline-none gap-2 rounded-md 
                              py-2 px-4 ${item.value===foodCategory?"bg-white text-mainColor":"bg-inherit text-white"}`}
                            >
                                {
                                    item?.img?
                                    <img 
                                        alt="category-img"
                                        src={item.img} 
                                        className="w-[20px] h-[20px]"
                                    />
                                    :
                                    null
                                }
                                <span className="capitalize">{item.value}</span>
                            </button>
                        )
                    })
                }
            </div>
            <div className="grid justify-items-center grid-cols-12 xs:gap-y-8 xs:gap-x-0 sm:gap-8">
                {
                    products.map((product)=>{
                        return(
                            <ProductCart product={product} key={product.id} />
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Foods;