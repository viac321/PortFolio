import { IconBrandLinkedin, IconBrandWhatsapp, IconBrandGithub } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-c-1 dark:bg-d-1 p-2 fixed bottom-0 w-full" >
            <div className=" text-c-4 dark:text-d-4 flex justify-center gap-3">
              {/*<!-- LinkedIn, correo, whats y github -->*/}
              <a
                href="https://www.linkedin.com/in/victor-ivan-aguirre-carbajal-991968164/"
                target="_blank" className="hover:text-d-4 dark:hover:text-c-4 hover:rounded-2xl p-1"
                rel="noopener noreferrer"
              >
                <button>
                  <IconBrandLinkedin />
                </button>
              </a>
              <a href="https://wa.me/525521900695"
               className="hover:text-d-4 dark:hover:text-c-4 hover:rounded-2xl p-1" >
                <IconBrandWhatsapp />
              </a>
              <a href="https://github.com/viac321"
               className="hover:text-d-4 dark:hover:text-c-4 hover:rounded-2xl p-1">
                <IconBrandGithub />
              </a>
            </div>
          </footer>
  )
}
export default Footer