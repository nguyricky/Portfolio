import GitHubIcon from "../images/icons/github.svg"
import InstagramIcon from "../images/icons/insta.svg"
import LinkedInIcon from "../images/icons/linkedin.svg"

const SocialMedia = () => {
    return (
      <>
        <section className="h-screen w-full relative mx-auto flex justify-center items-center bg-secondary">
          <div className="absolute flex flex-row"> 
              <ul className="w-6">
                <li className="my-4 hover:fill-white">
                  <a href="https://github.com/nguyricky" target="_blank">
                    <img src={GitHubIcon}></img>
                  </a>
                </li>
                <li className="my-4">
                  <a href="https://github.com/nguyricky" target="_blank">
                    <img src={LinkedInIcon}></img>
                  </a>
                </li>
                <li className="my-4">
                  <a href="https://github.com/nguyricky" target="_blank">
                    <img src={InstagramIcon}></img>
                  </a>
                </li>
                </ul>
          </div>
        </section>
      </>
    )
}    

export default SocialMedia;