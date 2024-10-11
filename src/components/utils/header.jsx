import { Location01Icon, Briefcase06Icon } from "hugeicons-react";

const Header = () => {
  return (
    <header className="mt-10 mb-8">
      <h1 className="text-[26px] text-[#0a0f15] font-sans font-medium mb-2 antialiased tracking-tighter">
        ricky nguyen
      </h1>
      <div className="flex mb-6 mt-[-10px]">
        <svg width="140" height="10" viewBox="0 0 140 10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,5 C10,0 20,10 30,5 C40,0 50,10 60,5 C70,0 80,10 90,5 C100,0 110,10 120,5 C130,0 140,10 150,5 C160,0 170,10 180,5 C190,0 200,10 210,5"
            fill="transparent"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="flex items-center font-sans text-md text-[#0a0f15] mb-2 opacity-80">
        <Location01Icon className="w-6 h-6 mr-2" />
        <span>portland, oregon</span>
      </div>
      <div className="flex items-center font-sans text-md text-[#0a0f15] opacity-80">
        <Briefcase06Icon className="w-6 h-6 mr-2" />
        <span>full stack swe intern @ karman space & defense</span>
      </div>

      <p className="my-8 text-[#0a0f15] text-md leading-relaxed opacity-80">
        i&apos;m currently a grad student @ rice university studying in data science with a machine
        learning concentration, recently receiving a cs degree @ oregon state university. my biggest pleasure is
        solving problems of all kinds. if i&apos;m not knee deep in work or school, i&apos;m
        probably expanding my ui/ux knowledge, researching stocks, or obsessing over watches.
      </p>
    </header>
  );
};

export default Header;
