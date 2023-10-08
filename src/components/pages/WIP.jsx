import LogoImage from "../../../public/logo.svg"

const WIP = () => {
    return (
        <section className="h-screen w-full relative mx-auto flex justify-center items-center bg-secondary">
          <div className="flex flex-col justify-center items-center">
            <img className="w-1/4 h-1/4 animate-pulse"src={LogoImage}></img>
            <h1 className="font-bold text-[50px] animate-pulse text-white mt-10">COMING SOON...</h1>
          </div>
        </section>
    )
}    

export default WIP;