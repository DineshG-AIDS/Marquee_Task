const Footer = () => {
  return (
    <>
      <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-blue-600 text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Get ready to know me
            <br />
            Start by clicking 👇🏻
          </h2>
          <a
            className="mt-3 xl:mt-3 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            href="https://www.linkedin.com/in/dinesh-g-28b71b199/"
            target="blank"
          >
            Know me
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2">
                <a
                  href="https://buddyblog.site/ProtfBuddy/index.html"
                  target="blank"
                >
                  Portfolio
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="https://buddyblog.site/" target="blank">
                  Blog
                </a>
              </div>

              <div className="px-5 py-2">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/dinesh-g-28b71b199/"
                >
                  Linkedin
                </a>
              </div>
            </nav>
            <p className="mt-7 text-base">© 2024 DineshG, FrontEnd Magician</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
