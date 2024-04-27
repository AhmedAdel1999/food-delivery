import Slider from "react-slick";
import network from "../assets/images/network.png"
import img1 from "../assets/images/ava-1.jpg"
import img2 from "../assets/images/ava-2.jpg"
import img3 from "../assets/images/ava-3.jpg"


const Customers = () =>{

    const pText=`
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
    `
    const customers=[
        {id:1,img:img1,text:pText,name:"Jhon Doe"},
        {id:2,img:img2,text:pText,name:"Mitchell Marsh"},
        {id:3,img:img3,text:pText,name:"Steven Crock"}
    ]

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return(
        <section className="py-16 xs:px-8 sm:px-16 grid grid-cols-12 xs:gap-y-8 xs:gap-x-0 sm:gap-8">
            <div className="xs:col-span-12 md:col-span-6">
                <h2 className="headerStyle max-w-full text-left mb-8">
                    What our
                    <span className="text-mainColor"> Customers </span>
                    are saying
                </h2>
                <p className="text-custom text-darkText text-[16.2px] mb-20">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio quasi qui minus quos sit perspiciatis inventore
                    quis provident placeat fugiat!
                </p>
                <Slider {...settings}>
                    {
                        customers.map((item)=>{
                            return(
                                <div
                                 key={item.id}
                                >
                                    <p className="text-custom text-darkText text-[16.1px] mb-16">
                                        {item.text}
                                    </p>
                                    <div className="flex items-center gap-x-[20px]">
                                        <img 
                                          alt="customer-img"
                                          src={item.img}
                                          loading="lazy"
                                          className="w-[50px] h-[50px] rounded-md"
                                        />
                                        <span className="text-darkerText">{item.name}</span>
                                    </div>
                                 </div>
                            )
                        })
                    }
                </Slider>
            </div>

            <div className="xs:col-span-12 md:col-span-6">
               <img 
                  className="w-full max-h-[500px] object-fill object-top"
                  alt="hero image"
                  loading="lazy"
                  src={network}
                />
            </div>
        </section>
    )
}
export default Customers;