
import { IconBrandGithub } from '@tabler/icons-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslation } from 'react-i18next'

const Projects = () => {

  const [t] = useTranslation()
  const [emblaRefFrontend] = useEmblaCarousel()
  const [emblaRefBackend] = useEmblaCarousel()



  return (
    <>
      <main className="bg-c-2 dark:bg-d-2 pt-20 flex flex-col 
      items-center justify-center gap-20
      min-h-screen">
        <div className=''>
          <h2 className=' text-c-1 dark:text-d-1 text-xl font-medium'>{t("Projects.Frontend")}</h2>
          <section className=" overflow-hidden " ref={emblaRefFrontend}>
            <div className="flex gap-4 dark:text-d-4">
              <div className="card">
                <section className="absolute" >
                  <img className='' src="./img/MusicApp.png" alt="" />
                  <div className="flex gap-4 fixed bottom-0 rounded-xl bg-d-3/40 backdrop-blur-sm" >
                    <img className='size-[48px]' src="./img/react.svg" alt="" />
                    <img className='size-[48px]' src="./img/sql-svgrepo-com.svg" alt="" />
                  </div>
                </section>
                <div className="card__content bg-c-3 dark:bg-d-3 text-c-1 dark:text-d-1">
                  <p className="card__title">{t("Projects.CF1")}</p>
                  <p className="card__description">{t("Projects.CF1C")}</p>
                  <div className='flex gap-3'>
                    <div>
                      <a className='text-c-1 hover:text-d-3 dark:text-d-1 dark:hover:text-d-4' href="https://documenter.getpostman.com/view/32639599/2sA2rDxgPA">Postman</a>
                    </div>
                    <div>
                      <a className='text-c-1 hover:text-d-3 dark:text-d-1 dark:hover:text-d-4' href="https://github.com/viac321/ecommerce ">GitHub</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>


        <div className=''>
          <h2 className='text-c-1 dark:text-d-1 text-xl font-medium'>{t("Projects.Backend")}</h2>
          <section className="overflow-hidden h-full " ref={emblaRefBackend}>

            <div className="card">
              <section className="absolute" >
                <img className='size-auto' src="./img/PostmanEcommerce.png" alt="" />
                <div className="flex gap-4 fixed bottom-0 round bg-transparent backdrop-blur-sm" >
                  <img className='size-[48px]' src="./img/nodejs-svgrepo-com.svg" alt="" />
                  <img className='size-[48px]' src="./img/sql-svgrepo-com.svg" alt="" />
                </div>
              </section>
              <div className="card__content bg-c-3 dark:bg-d-3 text-c-1 dark:text-d-1">
                <p className="card__title">{t("Projects.CB1")}</p>
                <p className="card__description">{t("Projects.CB1C")}</p>
                <div className='p-2 flex gap-3'>
                  <div>
                    <a className='text-c-1 hover:text-d-3 dark:text-d-1 dark:hover:text-d-4' href="https://documenter.getpostman.com/view/32639599/2sA2rDxgPA">Postman</a>
                  </div>
                  <div>
                    <a className='text-c-1 hover:text-d-3 dark:text-d-1 dark:hover:text-d-4' href="https://github.com/viac321/ecommerce ">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="card__content bg-c-3 dark:bg-d-3 text-c-1 dark:text-d-1">
                <p className="card__title">{t("Projects.CB2")}</p>
                <p className="card__description">{t("Projects.CB2C")}</p>
                <div className=' flex gap-3'>
                  <div>
                    <a className='text-c-1 hover:text-d-3 dark:text-d-1 dark:hover:text-d-4' href="https://documenter.getpostman.com/view/32639599/2sA2rDxgPA">Postman</a>
                  </div>
                  <div>
                    <a className='text-c-1 hover:text-d-3 dark:text-d-1 dark:hover:text-d-4' href="https://github.com/viac321/ecommerce ">GitHub</a>
                  </div>
                </div>
              </div>
            </div>




          </section>
        </div>


      </main>
    </>
  )
}
export default Projects