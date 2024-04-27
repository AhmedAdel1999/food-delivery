import img1 from "../assets/images/category-01.png"
import img2 from "../assets/images/category-02.png"
import img3 from "../assets/images/category-03.png"
import img4 from "../assets/images/category-04.png"


const Categories = () =>{

    const categories=[
        {id:1,img:img1,titel:"Fastfood"},
        {id:2,img:img2,titel:"Pizza"},
        {id:3,img:img3,titel:"Asian Food"},
        {id:4,img:img4,titel:"Row Meat"}
    ]

    return(
        <section className="py-16 xs:px-8 sm:px-16 grid grid-cols-12 justify-items-center xs:gap-y-8 xs:gap-x-0 sm:gap-8">
            {
                categories.map((item)=>{
                    return(
                        <div 
                          key={item.id}
                          className="categoryStyle"
                        >
                           <div className="flex items-center gap-x-5">
                             <div className="w-[80px] h-[80px] rounded-[50%] overflow-hidden">
                                <img 
                                  alt="category img" 
                                  src={item.img}
                                  className="w-full h-full"
                                />
                             </div>
                             <p>
                                {item.titel}
                             </p>
                           </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Categories;