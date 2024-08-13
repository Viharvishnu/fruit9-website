import Link from "next/link";

const FooterCredits = () => {
  return (
    <span className="text-center w-full  bg-green-400 py-3 flex items-center justify-center sm:flex-row flex-col">
      Designed and developed by
      <Link
        className="mx-[0.5ch] underline underline-offset-2 italic font-semibold"
        href="https://github.com/sahithchinnu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sahith Reddy
      </Link>
      and
      <Link
        className="ml-[0.5ch] underline underline-offset-2 italic font-semibold"
        href="https://www.sairohit.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sai Rohit
      </Link>
    </span>
  );
};

export default FooterCredits;
