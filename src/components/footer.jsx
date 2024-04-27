import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../assets/images/res-logo.png"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
const Footer = () =>{
    return(
        <footer className="bg-ligthbgColor py-8 xs:px-8 sm:px-16 flex flex-col gap-y-8">
            <div className="flex xs:justify-start flex-wrap gap-5">
                <div className="min-w-[250px] max-w-[250px] flex-col">
                    <div className="w-fit flex flex-col items-start gap-1 mb-4">
                        <img
                            alt="logo-img"
                            src={logo}
                            className="w-[50px] h-[50px] rounded-[50%]"
                        />
                        <h5 className="text-darkerText font-extrabold">Tasty Treat</h5>
                    </div>
                    <p className="text-darkText line-clamp-3 text-custom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt pariatur accusamus
                    </p>
                </div>
                <div className="min-w-[250px]">
                    <h4 className="text-darkerText text-[17px] font-extrabold mb-5">Delivery Time</h4>
                    <div className="mb-8">
                        <h6 className="text-darkerText font-[500]">Sunday - Thursday</h6>
                        <p className="text-darkText line-clamp-3 text-[12px]">10:00am - 11:00pm</p>
                    </div>
                    <div>
                        <h6 className="text-darkerText font-[500]">Friday - Saturday</h6>
                        <p className="text-darkText line-clamp-3 text-[12px]">Off day</p>
                    </div>
                </div>
                <div className="min-w-[250px]">
                    <h4 className="text-darkerText text-[17px] font-extrabold mb-5">Contact</h4>
                    <p className="text-darkText text-custom max-w-[250px] mb-8">Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
                    <h6 className="text-darkerText font-[500] mb-4">Phone: 01712345678</h6>
                    <h6 className="text-darkerText font-[500]">Email: example@gmail.com</h6>
                </div>
                <div className="min-w-[250px]">
                    <h4 className="text-darkerText text-[17px] font-extrabold mb-5">Newsletter</h4>
                    <p className="text-darkText text-custom mb-8">Subscribe our newsletter</p>
                    <div className="border-2 border-[#000] rounded-md p-2 flex items-center justify-between gap-x-2">
                        <input 
                          type="text"
                          placeholder="Enter Your Email"
                          className="outline-none border-none text-black text-custom bg-inherit placeholder:text-[#000]"
                        />
                        <button className="w-[70px] h-[40px] rounded-md flex justify-center items-center bg-mainColor">
                            <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between">
                <p className="text-mainColor text-custom">
                    Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.
                </p>
                <div className="flex items-center gap-3">
                   <p className="text-darkText text-custom">Follow:</p>
                   <ul className="flex gap-6">
                      <li className="flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-mainColor">
                        <FontAwesomeIcon className="text-white" icon={faFacebookF} />
                      </li>
                      <li className="flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-mainColor">
                        <FontAwesomeIcon className="text-white" icon={faGithub} />
                      </li>
                      <li className="flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-mainColor">
                        <FontAwesomeIcon className="text-white" icon={faYoutube} />
                      </li>
                      <li className="flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-mainColor">
                        <FontAwesomeIcon className="text-white" icon={faLinkedin} />
                      </li>
                   </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer