import HeaderBanner from "../components/headerbaner"
import Footer from "../components/footer"
import RegisterForm from "../components/registerForm"
const RegisterPage = () =>{
    return(
        <div className="h-full">
            <HeaderBanner title={"register"} />
            <RegisterForm />
            <Footer />
        </div>
    )
}
export default RegisterPage