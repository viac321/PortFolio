import { IconBrandLinkedin, IconBrandWhatsapp, IconBrandGithub } from "@tabler/icons-react";

const HoverContact = () => {
    return (
        <div className="flex  relative items-center justify-center border-1  
        backdrop-blur-sm bg-c-4/20 border-[1px] rounded-2xl ">

            <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center 
            flex flex-col max-w-sm hover:shadow-2xl transition duration-500 shadow-xl
            ">
                <div className="text-gray-500 group-hover:scale-105 transition
                ">
                    <svg className="w-16 h-16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </div>
                <div className="group-hover:pb-10 transition-all duration-500 delay-200">
                    <h1 className="font-semibold text-gray-700"></h1>
                </div>
                <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                    <div className="flex text-2xl bg-gray-700 text-white hover:p-1 transition-all duration-500 delay-200 rounded-full shadow-sm">
                        <a className="hover:scale-110 transition-all duration-500 delay-200
                        hover:text-d-1 dark:hover:text-c-1 hover:bg-d-3 hover:rounded-2xl p-1" href="https://www.linkedin.com/in/victor-ivan-aguirre-carbajal-991968164/">
                            <IconBrandLinkedin />
                        </a>
                        <a className="hover:scale-110 transition-all duration-500 delay-200
                        hover:text-d-1 dark:hover:text-c-1 hover:bg-d-3 hover:rounded-2xl p-1" href="https://wa.me/525521900695">
                            <IconBrandWhatsapp />
                        </a>
                        <a className="hover:scale-110 transition-all duration-500 delay-200
                        hover:text-d-1 dark:hover:text-c-1 hover:bg-d-3 hover:rounded-2xl p-1" href="https://github.com/viac321">
                            <IconBrandGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HoverContact