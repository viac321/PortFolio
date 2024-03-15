
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslation } from 'react-i18next'

const Projects = () => {

  const [t] = useTranslation()
  const [emblaRefFrontend] = useEmblaCarousel()
  const [emblaRefBackend] = useEmblaCarousel()



  return (
    <>
      <main className="bg-c-2 dark:bg-d-2 pt-20">
        <div className=''>
          <h2 className='p-5 text-c-1 dark:text-d-1 text-xl font-medium'>{t("Projects.Frontend")}</h2>
          <section className=" overflow-hidden ml-10" ref={emblaRefFrontend}>
            <div className="flex gap-4 dark:text-d-4">
              <article
                className="p-2 relative flex flex-grow-0 flex-shrink-0 
                min-w-0  justify-center flex-col gap-2 
              bg-c-1  border-c-1 dark:bg-d-1  dark:border-d-1 border-3 rounded-2xl
                h-[400px] w-[450px]"
              >
                <div className="">
                  <img className='rounded-xl w-[384px] h-[230.06px] translate-x-[6%]' src="./img/MusicApp.png" alt='Clima App' />
                </div>

                <div className=" ">
                  <h3 className="text-c-4 dark:text-d-4">
                    {t("Projects.CF3")}
                  </h3>
                  <p className="w-auto text-sm p-1 bg-c-2/40 dark:bg-d-2/40 rounded-md">
                    {t("Projects.CF3C")}
                  </p>
                  <a
                    className=" font-medium hover:text-c-2 text-c-4 dark:hover:text-d-2 dark:text-c-4 underline-offset-4 underline"
                    href="entregable6-jlkq.vercel.app/login"
                  >
                    {t("Projects.more")}
                  </a>
                </div>
              </article>
              <article
                className="p-2 relative flex flex-grow-0 flex-shrink-0 
                min-w-0  justify-center flex-col gap-2 
              bg-c-1 border-c-1 dark:bg-d-1 dark:border-d-1 border-3 rounded-2xl
                h-[400px] w-[450px]"
              >
                <div className="">
                  <img className='rounded-xl w-[384px] h-[230.06px] translate-x-[6%]' src="./img/PokeApp.png" alt='Clima App' />
                </div>

                <div className=" ">
                  <h3 className="text-c-4 ">
                    {t("Projects.CF2")}
                  </h3>
                  <p className="w-auto text-sm p-1 bg-c-2/40 dark:bg-d-2/40 rounded-md">
                    {t("Projects.CF2C")}
                  </p>
                  <a
                    className=" font-medium hover:text-c-2 text-c-4 dark:hover:text-c-2 dark:text-c-4 underline-offset-4 underline"
                    href="https://entregable5-mczq.vercel.app/pokedex"
                  >
                    {t("Projects.more")}
                  </a>
                </div>
              </article>
              <article
                className="p-2 relative flex flex-grow-0 flex-shrink-0 
                min-w-0  justify-center flex-col gap-2 
              bg-c-1 dark:bg-d-1 border-3 dark:border-d-1 border-c-1 rounded-2xl
                h-[400px] w-[450px]"
              >
                <div className="">
                  <img className='rounded-xl w-[384px] h-[230.06px] translate-x-[6%]' src="./img/rickMorthy.jpeg" alt='Clima App' />
                </div>

                <div className=" ">
                  <h3 className="text-c-4 dark:text-d-4">
                    {t("Projects.CF1")}
                  </h3>
                  <p className="w-auto text-sm p-1 bg-c-2/40 dark:bg-d-2/40 rounded-md">
                    {t("Projects.CF1C")}
                  </p>
                  <a
                    className=" font-medium hover:text-c-2 text-c-4 dark:text-d-4 underline-offset-4 underline"
                    href="https://entregable-tres.vercel.app"
                  >
                    {t("Projects.more")}
                  </a>
                </div>
              </article>
            </div>
          </section>
        </div>

        <h2 className='p-5 ml-10 text-c-1 dark:text-d-1 text-xl font-medium'>{t("Projects.Backend")}</h2>
        <div className='pb-20 pl-20'>
          <section className="overflow-hidden h-full" ref={emblaRefBackend}>

            <div className="flex gap-4">
              <article
                className="p-2 relative flex flex-grow-0 flex-shrink-0 min-w-0  justify-center flex-col gap-2 
                 bg-c-1 border-c-1 dark:bg-d-1 dark:border-d-1 border-3  rounded-2xl
                   h-[400px] w-[400px]"
              >
                <div className="">
                  <img className='rounded-xl w-[384px] h-[254.06px]' src="./img/ClimateAPP.jpeg" alt='Clima App' />
                </div>

                <div className=" ">
                  <h3 className=" ">
                    {t("Projects.CB1")}
                  </h3>
                  <p className=" text-sm p-1 bg-c-2/40 dark:bg-d-2/40 rounded-md">
                    {t("Projects.CB1C")}
                  </p>
                  <a
                    className=" font-medium hover:text-c-2 text-c-4 dark:hover:text-c-2 dark:text-c-4 underline-offset-4 underline"
                    href="https://entregable6-jlkq.vercel.app/login"
                  >
                    {t("Projects.more")}
                  </a>
                </div>
              </article>
            </div>
          </section>
        </div>


      </main>
    </>
  )
}
export default Projects