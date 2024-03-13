import { useTranslation } from "react-i18next";
import Form from "../components/Form"
//import i18next from "i18next";

const ContactMe = () => {

  const [t]=useTranslation()

 
  return (
    <div className="bg-c-2 dark:bg-d-3
   h-screen p-20">

      <section
        className=" grid justify-center "
      >
        <h2 className="text-xl font-semibold text-c-1 dark:text-d-1 pt-10 m-5">
          {t("ContactMe.title")}
        </h2>


        <Form />


      </section>



    </div>
  )
}
export default ContactMe;