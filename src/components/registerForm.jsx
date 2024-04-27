import { Link } from "react-router-dom"

const RegisterForm = () =>{
    return(
        <section className="p-16 flex justify-center">
           <div className="flex flex-col items-center gap-5">
              <form className="w-[350px] flex flex-col items-center gap-5 p-5 bg-ligthbgColor rounded-md">
                <input 
                    type="text"
                    placeholder="Full Name"
                    className="min-w-[300px] bg-inherit text-sm px-3 py-2 outline-none border-b-2 border-[#bebdbd] placeholder:text-[#bebdbd]"
                />
                 <input 
                   type="text"
                   placeholder="Email"
                   className="min-w-[300px] bg-inherit text-sm px-3 py-2 outline-none border-b-2 border-[#bebdbd] placeholder:text-[#bebdbd]"
                 />
                 <input 
                   type="password"
                   placeholder="Password"
                   className="min-w-[300px] bg-inherit text-sm px-3 py-2 outline-none border-b-2 border-[#bebdbd] placeholder:text-[#bebdbd]"
                 />
                 <button className="bg-mainColor outline-none border-none rounded-md
                   px-4 py-2 text-white"
                >
                    Register
                </button>
              </form>
              <Link 
                 to={"/register"}
                 className="text-[14px] text-darkText"
              >
                    Already have an account? Login
              </Link>
           </div>
           
        </section>
    )
}
export default RegisterForm