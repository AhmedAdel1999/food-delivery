import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import location from "../assets/images/location.png"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Tasty = () =>{
    return(
        <section className="py-16 xs:px-8 sm:px-16 grid grid-cols-12 xs:gap-y-8 xs:gap-x-0 sm:gap-8">
            <div className="xs:col-span-12 md:col-span-6">
               <img 
                  className="w-full max-h-[500px] object-fill object-top"
                  alt="hero image"
                  loading="lazy"
                  src={location}
                />
            </div>
            <div className="xs:col-span-12 md:col-span-6">
                <h2 className="headerStyle text-left mb-8">
                    Why 
                    <span className="text-mainColor"> Tasty Treat?</span>
                </h2>
                <p className="text-custom text-darkText text-[16.2px] mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, minus. Tempora reprehenderit a corporis velit,
                    laboriosam vitae ullam, repellat illo sequi odio esse iste
                    fugiat dolor, optio incidunt eligendi deleniti!
                </p>
                <div className="flex flex-col gap-[20px] bg-white rounded-md p-3">
                     <div>
                        <h4 className="mb-2">
                            <FontAwesomeIcon className="text-mainColor mr-2" icon={faCircleCheck} />
                            <span className="text-darkerTex">
                              Fresh and tasty foods
                            </span>
                        </h4>
                        <p className="text-darkText text-sm pl-6">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.
                        </p>
                     </div>

                     <div>
                        <h4 className="mb-2">
                            <FontAwesomeIcon className="text-mainColor mr-2" icon={faCircleCheck} />
                            <span className="text-darkerTex">
                               Quality support
                            </span>
                        </h4>
                        <p className="text-darkText text-sm pl-6">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.
                        </p>
                     </div>

                     <div>
                        <h4 className="mb-2">
                            <FontAwesomeIcon className="text-mainColor mr-2" icon={faCircleCheck} />
                            <span className="text-darkerTex">
                               Order from any location
                            </span>
                        </h4>
                        <p className="text-darkText text-sm pl-6">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.
                        </p>
                     </div>
                </div>
            </div>
        </section>
    )
}
export default Tasty;