import { phoneNumber } from "@/common-data";
import Logo from "@/components/logo";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const footerSitemap = [
  { text: "Home", scrollTo: "landing" },
  { text: "Plans", scrollTo: "landing" },
  { text: "Subscriptions", scrollTo: "subscriptions" },
  { text: "About", scrollTo: "about" }
];

const footerContacts = [
  { text: "Whatsapp", Icon: BsWhatsapp, link: `https://wa.me/${phoneNumber}` },
  { text: "Instagram", Icon: BsInstagram, link: "https://www.instagram.com/fru.it_9/" }
];

const Footer = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const sitemapMapper = (elem, index) => {
    const { text, scrollTo } = elem;
    return (
      <button key={`sitemap-${index + 1}`} onClick={() => handleClick(scrollTo)}>
        {text}
      </button>
    );
  };
  const footerContactsMapper = (elem, index) => {
    const { text, link, Icon } = elem;
    return (
      <Link
        key={`sitemap-${index + 1}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 items-center"
      >
        <Icon />
        <span>{text}</span>
      </Link>
    );
  };
  return (
    <footer className="grid place-items-center py-[50px] w-full px-6" id="footer">
      <div className="flex justify-between w-full max-w-7xl flex-col md:flex-row gap-8">
        <div className="flex flex-col max-w-72">
          <Logo />
          <span>
            <span>Whatsapp : </span>
            <span>{phoneNumber}</span>
          </span>
        </div>
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div>
            <span className="font-semibold mb-4 block">Sitemap</span>
            <div className="flex flex-col items-start gap-2">{footerSitemap.map(sitemapMapper)}</div>
          </div>
          <div>
            <span className="font-semibold mb-4 block">Contact</span>
            <div className="flex flex-col items-start gap-2">{footerContacts.map(footerContactsMapper)}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
