import { phoneNumber } from "@/common-data";
import CtaButton from "@/components/cta-button";
import Logo from "@/components/logo";
import { Fragment, useState } from "react";

// const navBtns = ["Home", "Plans", "Subscriptions", "About", "Contact Us"];
const navBtns = [
  { text: "Home", scrollTo: "landing" },
  { text: "Plans", scrollTo: "plans" },
  { text: "Subscriptions", scrollTo: "subscriptions" },
  { text: "About", scrollTo: "about" },
  { text: "Contact Us", scrollTo: `https://wa.me/${phoneNumber}` }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMenuOpen(!isMenuOpen);
  };
  const navMapper = (elem, index) => {
    const { scrollTo, text } = elem;
    return index + 1 === navBtns.length ? (
      <Fragment key={index}>
        <CtaButton extraClassName="ml-6" href={scrollTo}>
          {text}
        </CtaButton>
      </Fragment>
    ) : (
      <button
        key={`nav-item-${index + 1}`}
        className="px-6 lg:border-r-[1px] border-gray-400"
        onClick={() => handleClick(scrollTo)}
      >
        {text}
      </button>
    );
  };
  return (
    <header className="fixed top-0 left-0 px-6 py-3 bg-white z-20 w-full grid place-items-center shadow-lg">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-600 hover:text-green-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-8 pb-12lg:pb-0  items-center lg:gap-3 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 px-4 lg:px-0 lg:mt-0 shadow-lg lg:shadow-none`}
        >
          {navBtns.map(navMapper)}
        </nav>
      </div>
    </header>
  );
};
export default Header;
