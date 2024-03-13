import { useTranslation } from "react-i18next";
import Technologies from "./Technologies";
import SoftSkills from "../components/SoftSkills";
import Education from "../components/Education";

const AboutMe = () => {
  const [t] = useTranslation();

  return (
    <main className="bg-c-2 bg-auto dark:bg-d-2 h-screen">
      <div className="p-5">
        <article className="p-10" >
          <div className="p-10 text-c-1 dark:text-d-4">
            <p className="text-xl">{t("About.tech")}</p>
            <div className=" flex justify-center">
            <Technologies />
            </div>
          </div>
          <div className="p-10 w-full">
            <h2 className="pb-8 text-c-1 dark:text-d-1 text-xl">{t("SoftSkills.skill")}</h2>
            <SoftSkills />
          </div>
          <div className="p-10 w-full" >
            <h2 className="pb-10 text-xl text-c-1 dark:text-d-1">{t("Edu.title")}</h2>
            <div className="flex justify-center" >
            <Education />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};
export default AboutMe