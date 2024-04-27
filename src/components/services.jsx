import img1 from "../assets/images/service-01.png"
import img2 from "../assets/images/service-02.png"
import img3 from "../assets/images/service-03.png"

const Services = () =>{

    const services=[
        {id:1,img:img1,title:"Quick Delivery",subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque."},
        {id:2,img:img2,title:"Super Dine In",subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque."},
        {id:3,img:img3,title:"Easy Pick Up",subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque."}
    ]
    return(
        <section className="py-16 xs:px-8 sm:px-16">
            <div className="flex flex-col items-center gap-5 mb-16">
               <p className="text-mainColor text-lg text-center">
                   What we serve
                </p>

                <h1 className="headerStyle max-w-[400px] text-center">
                    Just sit back at home we will  
                    <span className="text-mainColor"> take care</span>
                </h1>

                <p className="text-[#777] text-custom text-[14px] text-center max-w-[480px]">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.
                </p>
            </div>
            <div className="grid grid-cols-12 justify-items-center xs:gap-y-8 xs:gap-x-0 sm:gap-8">
                {
                    services.map((item)=>{
                        return(
                            <div key={item.id} className="xs:col-span-12 sm:col-span-6 md:col-span-4 flex flex-col items-center gap-y-5">
                                <img 
                                  alt="service img"
                                  src={item.img}
                                  className="w-[80px] h-[80px] rounded-[50%]"
                                />
                                <h3 className="text-darkerText text-xl font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-[#777] text-custom text-[14px] text-center max-w-[300px]">
                                    {item.subtitle}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Services;