
import { useTranslation } from "react-i18next"


const Home = () => {
const [t] =useTranslation()

  return (
    <header className="w-full sm:max-size:[900px] h-screen bg-c-2 dark:bg-d-2">
      <main className="p-20">
        <section className="p-4 mt-9">
          <img
            className="rounded-xl size-[300px]"
            src="/img/profile.jpg"
            alt="IA"
          />
        </section>
        <div className="">
        <section className="p-4 mt-5">
          <span className="text-xs font-medium text-c-1 dark:text-d-1">{t("Home.profession")}</span>
          <h1 className="text-2xl font-semibold text-d-1 dark:text-d-3">
            {t("Home.name")}
          </h1>
          <p className="mt-3" >
           {t("Home.about")}
          </p>
        </section>
        <button className="mt-5 ml-5 p-1
             hover:text-c-1 text-c-4 hover:bg-c-4 bg-c-1 dark:hover:text-d-1 dark:text-d-4 dark:hover:bg-d-4 dark:bg-d-1 rounded-xl"
            type="button">
           {t("Home.cv")}
        </button>
        </div>
        
      </main>
    </header>
  )
}
export default Home