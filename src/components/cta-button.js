import Link from "next/link";

const CtaButton = ({ children, secondary, extraClassName, href, onClick }) => {
  return href ? (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onClick={onClick}
      className={`${
        secondary === true ? "bg-transparent" : "bg-green-400"
      } w-fit rounded-lg px-12 py-2 font-semibold cursor-pointer border-green-400 text-sm border-2 ${extraClassName}`}
    >
      {children}
    </Link>
  ) : (
    <div
      onClick={onClick}
      className={`${
        secondary === true ? "bg-transparent" : "bg-green-400"
      } w-fit rounded-lg px-12 py-2 font-semibold cursor-pointer border-green-400 text-sm border-2 ${extraClassName}`}
    >
      {children}
    </div>
  );
};

export default CtaButton;
