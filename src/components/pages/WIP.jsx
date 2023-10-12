import LogoImage from "/logo.svg"

const WIP = () => {
    return (
        <section className="h-screen w-full relative mx-auto flex justify-center items-center bg-secondary">
          <div className="flex flex-col justify-center items-center">
            <img className="w-1/4 h-1/4 animate-pulse"src={LogoImage}></img>
          </div>
        </section>
    )
}    

export default WIP;
