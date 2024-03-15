import { useTranslation } from "react-i18next";

const Education = () => {
    const [t] = useTranslation();
    return (

        <div className="">

            <div className="flex flex-wrap justify-center gap-4 text-center text-sm">
                <div className="flex gap-4 
                bg-c-3 rounded-md p-1">

                    <h2 className="border-r-2 border-x-d-3 text-base p-8" >{t("Edu.edu1")}</h2>

                    <div className="flex flex-col">
                        <h3 className="p-1">{t("Edu.date1")}</h3>
                        <h3 className="border-y-2 border-d-3 p-1">{t("Edu.school1")}</h3>
                        <h3 className="p-1" >{t("Edu.place1")}</h3>
                    </div>
                </div>
                <div className="flex gap-4 bg-c-3 rounded-md p-1">
                    <h2 className="border-r-2 border-x-d-3 text-base p-8">{t("Edu.edu2")}</h2>
                    <div className="flex flex-col">
                        <h3 className="p-1">{t("Edu.date2")}</h3>
                        <h3 className="border-y-2 border-d-3 p-1">{t("Edu.school2")}</h3>
                        <h3 className="p-1">{t("Edu.place2")}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education