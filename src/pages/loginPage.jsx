import HeaderBanner from "../components/headerbaner"
import Footer from "../components/footer"
import LoginForm from "../components/loginForm"
const LoginPage = () =>{
    return(
        <div className="h-full">
            <HeaderBanner title={"login"} />
            <LoginForm />
            <Footer />
        </div>
    )
}
export default LoginPage