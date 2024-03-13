<section className="
     bg-c-2 h-full" >
      <div className='pt-10 pl-10 gap-4'>
        <h2 className="pt-10 pb-10">
          {t("Projects.Title")}
        </h2>


       <div>
        <span className='p-3'> {t("Projects.Frontend")} </span>
        <section className=" overflow-hidden" ref={emblaRefFrontend}>
          <div className="flex gap-4">
            <article
              className="p-2 relative flex flex-grow-0 flex-shrink-0 min-w-0  justify-center flex-col gap-2 
            bg-c-1 border-3 border-c-1 rounded-2xl
            h-[400px] w-[400px]"
            >
              <div className="">
                <img className='rounded-xl w-[384px] h-[254.06px]' src="./img/ClimateAPP.jpeg" alt='Clima App' />
              </div>

              <div className=" ">
                <h3 className=" ">
                  Aplicación de frases
                </h3>
                <p className=" text-sm p-1 bg-c-2/40 rounded-md">
                  Con esta aplicación podra generar frases aleatorias junto
                  con su autor y el fondo que cambia.
                </p>
                <a
                  className=" font-medium"
                  href="https://entregable6-jlkq.vercel.app/login"
                >
                  Ver más
                </a>
              </div>
            </article>
          </div>
        </section>
        </div>
        <div>
        <h2>{t("Projects.Backend")}</h2>
        <section className=" overflow-hidden h-screen" ref={emblaRefBackend}>

          <div className="flex gap-4">
            <article
              className="p-2 relative flex flex-grow-0 flex-shrink-0 min-w-0  justify-center flex-col gap-2 
            bg-c-1 border-3 border-c-1 rounded-2xl
            h-[400px] w-[400px]"
            >
              <div className="portfolio__img-content">
                <img className='rounded-xl w-[384px] h-[254.06px]' src="./img/ClimateAPP.jpeg" alt='Clima App' />
              </div>

              <div className=" ">
                <h3 className=" ">
                  Aplicación de frases
                </h3>
                <p className=" text-sm p-1 bg-c-2/40 rounded-md">
                  Con esta aplicación podra generar frases aleatorias junto
                  con su autor y el fondo que cambia.
                </p>
                <a
                  className=" font-medium"
                  href="https://entregable6-jlkq.vercel.app/login"
                >
                  Ver más
                </a>
              </div>
            </article>
          </div>
        </section>
        </div>
      </div>
    </section>