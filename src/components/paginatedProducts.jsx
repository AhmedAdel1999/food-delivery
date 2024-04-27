import { useRef, useState } from "react";
import allProducts from "../assets/fake-data/products"
import ProductCart from "./productCart";

const PaginatedProducts = () =>{


    const [search,setSearch] = useState("")
    const [products,setProducts] = useState([...allProducts])
    const [currentPage,setCurrentPage] = useState(1)
    const inputRef = useRef()

    const itemsPerPage = 4
    const indexOfLastItem = itemsPerPage * currentPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    let currentProducts = products.slice(indexOfFirstItem,indexOfLastItem)


    let pages=[]
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
        pages.push(i) 
    }    

    const handleChange = (value) =>{
        setSearch(value)
        setProducts(allProducts.filter((item)=>item.title.toLowerCase().includes(value)))
    }


    return(
        <section className="py-16 xs:px-8 sm:px-16">
            <div
               onClick={()=>inputRef.current.focus()}
               className="group rounded-md border-[1px] border-ligthbgColor max-w-[600px]
               p-2 cursor-pointer mb-10">
                <input 
                   type="text"
                   value={search}
                   ref={inputRef}
                   placeholder="I,M looking for..."
                   onChange={(e)=>handleChange(e.target.value)}
                   className="bg-inherit border-none outline-none"
                />
            </div>
            {
                products.length?
                <div className="grid justify-items-center grid-cols-12 xs:gap-y-8 xs:gap-x-0 sm:gap-8 mb-16">
                    {
                        currentProducts.map((product)=>{
                            return(
                                <ProductCart product={product} key={product.id} />
                            )
                        })
                    }
                </div>
                :
                <h3 className="w-full text-darkerText text-2xl text-center">There IS NO Items</h3>
            }
            {
                pages.length?
                <div className="w-full flex justify-center items-center gap-[20px] flex-wrap">
                    <button
                      disabled={currentPage==1}
                      onClick={()=>setCurrentPage((prev)=>prev-1)}
                      className="paginateBtn disabled:bg-slate-300"
                    >
                        Prev
                    </button>
                    {
                        pages.map((item)=>{
                            return(
                                <button 
                                  onClick={()=>setCurrentPage(item)}
                                  key={item}
                                  className={`paginateBtn ${item==currentPage?"bg-mainColor":""}`}
                                >
                                    {item}
                                </button>
                            )
                        })
                    }
                    <button
                      disabled={currentPage==pages.length}
                      onClick={()=>setCurrentPage((prev)=>prev+1)}
                      className="paginateBtn disabled:bg-slate-300"
                    >
                        Next
                    </button>
                </div>
                :
                null
            }
            
        </section>
    )
}
export default PaginatedProducts;