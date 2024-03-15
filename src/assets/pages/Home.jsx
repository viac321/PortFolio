
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


const Home = () => {
  const [t] = useTranslation()

  return (
    <header className="w-full min-h-screen bg-c-2 dark:bg-d-2">
      <main className="p-20 md:flex md:justify-center">
        <section className="p-4 mt-9">
          <img
            className="rounded-xl "
            src="/img/profile.jpg"
            alt="IA"
          />
        </section>
        <div className="lg:w-max-[600px] md:text-xl">
          <section className="p-4 mt-5">
            <span className="font-medium md:text-base md:max-h-[500px]
             text-c-1 dark:text-d-1">
              {t("Home.profession")}</span>
            <h1 className="text-3xl font-semibold text-d-1 dark:text-d-3
            ">
              {t("Home.name")}
            </h1>
            <p className="mt-3 max-w-[500px]" >
              {t("Home.about")}
            </p>
          </section>
          <div className="mt-4">


            <Link className=" p-3 
             hover:text-c-1 text-c-4 hover:bg-c-4 bg-c-1 dark:hover:text-d-1 dark:text-d-4 dark:hover:bg-d-4 dark:bg-d-1 rounded-xl"
              to={t("Home.cvLink")}>
              {t("Home.cv")}
            </Link>
          </div>
        </div>


      </main>

    </header>
  )
}
export default Home