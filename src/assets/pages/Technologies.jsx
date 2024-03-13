import useEmblaCarousel from 'embla-carousel-react'

const Technologies = () => {
  const [emblaRefTec] = useEmblaCarousel();
  return (
    <div className="p-10">
      
      <div className="gap-4 text-sm overflow-hidden"  ref={emblaRefTec}>
        <div className="flex gap-4">
          <div className="hover:shadow-2xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center
          min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/html.svg" alt="" />
            <p className="">HTML</p>
          </div>

          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center 
          min-w-0 gap-4 ">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/css.svg" alt="" />
            <p className="">CSS</p>
          </div>
          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center justify-center 
          min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/js.svg" alt=""></img>
            <p className="">JavaScript</p>
          </div>

          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/react.svg" alt="" />
            <p className="">React</p>
          </div>
          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] text-center 
             bg-c-3 dark:bg-d-3 rounded-xl" src="/img/tailwind-svgrepo-com.svg" alt="" />
            <p className="">Tail Wind</p>
          </div>
          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/redux-svgrepo-com.svg" alt="" />
            <p className="">Redux</p>
          </div>
          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/nodejs-svgrepo-com.svg" alt="" />
            <p className="">Nodejs </p>
          </div>
          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/express-svgrepo-com.svg" alt="" />
            <p className="">Express </p>
          </div>

          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/postman-icon-svgrepo-com.svg" alt="" />
            <p className="">PostMan </p>
          </div>

          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/git.svg" alt="" />
            <p className="">Git</p>
          </div>

          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/github.svg" alt="" />
            <p className="">GitHub</p>
          </div>

          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/matlab.svg" alt="" />
            <p className="">M </p>
          </div>

          <div className="hover:shadow-xl hover:shadow-d-3 dark:hover:shadow-c-3
          flex flex-grow-0 flex-shrink-0 flex-col text-center min-w-0 gap-4">
            <img className="size-[48px] bg-c-3 dark:bg-d-3 rounded-xl" src="/img/python.svg" alt="" />
            <p className="">Python</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Technologies