"use client";

const Footer = () => {
    return (
        <>
            <div className="w-full h-auto aspect-[900/400] bg-cover bg-center bg-no-repeat bg-[url('/img/background/footer-bg-light.svg')] sm:aspect-[900/200] dark:bg-[url('/img/background/footer-bg-dark.svg')]"></div>

            <footer className="relative text-center text-gray-300 pb-64 px-4 bg-[#0c5680] sm:pb-40 lg:pb-28 dark:text-gray-400 dark:bg-[#044e51]">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full px-3 lg:px-0">
                    <small className="text-xs block mb-2">
                        &copy; 2023 Syarta Pajaziti. All rights reserved.
                    </small>
                   
                </div>
            </footer>
        </>
    );
}
export default Footer;