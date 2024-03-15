import { useTranslation } from "react-i18next";
import Technologies from "./Technologies";
import SoftSkills from "../components/SoftSkills";
import Education from "../components/Education";

const AboutMe = () => {
  const [t] = useTranslation();

  return (
    <main className="bg-c-2 bg-auto min-h-screen pt-20 dark:bg-d-2 h-screen">

      <article className="mt-5" >
        <div className=" text-c-1 dark:text-d-4">
          <p className="text-xl">{t("About.tech")}</p>
          <div className=" flex justify-center">
            <Technologies />
          </div>
        </div>
        <div className=" w-full">
          <h2 className=" text-c-1 dark:text-d-1 text-xl">{t("SoftSkills.skill")}</h2>
          <SoftSkills />
        </div>
        <div className=" w-full flex flex-col gap-y-4" >
          <h2 className="ml-5 text-xl text-c-1 dark:text-d-1">{t("Edu.title")}</h2>
          <div className="flex justify-center" >
            <Education />
          </div>
        </div>
      </article>

    </main>
  );
};
export default AboutMe