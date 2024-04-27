import baneer from "../assets/images/banner-02.jpg"
const HeaderBanner = ({title}) =>{
    return(
        <section 
            style={{
                background: `linear-gradient(#212245b2, #212245b2), url(${baneer})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className="py-[80px]"
        >
         <h2 className="pl-16 font-extrabold text-white capitalize text-3xl">
            {title}
        </h2>
        </section>
    )
}
export default HeaderBanner;