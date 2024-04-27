import { faAngleRight, faCar, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png"

const TopHome = () =>{
    return(
        <section className="pt-16 xs:px-8 sm:px-16 grid grid-cols-12 xs:gap-y-8 xs:gap-x-0 sm:gap-8">
            <div className="xs:col-span-12 md:col-span-6 flex flex-col gap-8">
                <p className="text-darkerText text-lg xs:text-center md:text-left">
                   Easy way to make an order
                </p>

                <h1 className="headerStyle">
                    <span className="text-mainColor">HUNGRY?</span> Just wait
                    food at <span className="text-mainColor">your door</span>
                </h1>

                <p className="text-darkText text-sm xs:text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-5 mb-5 xs:justify-center md:justify-start">
                    <button className="btnStyle hover:bg-inherit hover:text-mainColor">
                        <span className="mr-2">Order now</span>
                        <FontAwesomeIcon className="translate-y-[2px]" icon={faAngleRight} />
                    </button>
                    <button className="btnStyle bg-inherit text-mainColor hover:bg-mainColor hover:text-white">
                        <Link to={"/food"}>See all foods</Link>
                    </button>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-5 xs:justify-center md:justify-start">
                    <div className="flex items-center gap-x-2">
                        <span className="flex items-center justify-center bg-mainColor w-[25px] h-[25px] rounded-[50%]">
                            <FontAwesomeIcon className="text-white" icon={faCar} />
                        </span>
                        <span className="text-darkerText text-[14px]">No shipping charge</span>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <span className="flex items-center justify-center bg-mainColor w-[25px] h-[25px] rounded-[50%]">
                            <FontAwesomeIcon className="text-white" icon={faShieldHalved} />
                        </span>
                        <span className="text-darkerText text-[14px]">100% secure checkout</span>
                    </div>
                </div>
            </div>
            <div className="xs:col-span-12 md:col-span-6">
                <img 
                  className="w-full max-h-[450px] object-fill object-top"
                  alt="hero image"
                  loading="lazy"
                  src={hero}
                />
            </div>
        </section>
    )
}

export default TopHome;