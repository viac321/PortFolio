import { useTranslation } from "react-i18next"

const Languages = () => {
    const [t] = useTranslation()
    return (
        <main className="">
            <h1 className="">{t("Languages.title")}</h1>
            <div className="gap-10 p-5 flex ">
                <div className="" >
                    <img className=" size-[48px]" src="/img/english-svgrepo-com.svg" alt="" />
                    <h2>{t("Languages.en")}</h2>

                </div>
                <div>
                    <img className="size-[48px]" src="/img/japan-svgrepo-com.svg" alt="" />
                    <h2>{t("Languages.jap")}</h2>

                </div>
            </div>
        </main>
    )
}
export default Languages