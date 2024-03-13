
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const SideBar = () => {
    //const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');


    const [t, i18n] = useTranslation()
    const currentLanguage = i18next.resolvedLanguage


    const handleLanguageToggle = () => {

        if (currentLanguage === 'en') {
            i18n.changeLanguage('es');
        } else if (currentLanguage === 'es') {
            i18n.changeLanguage('en');

        }
    }

    return (
        <main className=' border-r-2 border-r-[white] z-11 fixed'>
            <div className='flex flex-row 
        items-center bg-c-1 p-4 h-screen w-[300px] fixed z-10
        text-c-4'>

                <div className="flex flex-col text-2xl h-[400px] gap-10 ml-5">
                    <Link className="hover:text-d-4 font-bold" to={'/'}>{t("SideBar.Home")}</Link>
                    <Link className="hover:text-d-4 font-bold" to={'/about'}>{t("SideBar.About")}</Link>
                    <Link className="hover:text-d-4 font-bold" to={'/technologies'}>{t("SideBar.Technologies")}</Link>
                    <Link className="hover:text-d-4 font-bold" to={'/projects'}>{t("SideBar.Projects")}</Link>
                    <Link className="hover:text-d-4 font-bold" to={'/contact'}>{t("SideBar.Contact")}</Link>
                </div>

                <div className='sidebar__shadow flex flex-col-auto absolute top-20 left-10 mt-10 gap-5' >

                    <label className="mr-6 relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" value="" type="checkbox" onChange={handleLanguageToggle} />
                        <div className="peer rounded-br-2xl rounded-tl-2xl outline-none 
                            duration-100 after:duration-500 
                            w-20 h-8 bg-c-2 peer-focus:outline-none peer-focus:ring-4 
                          peer-focus:ring-c-4  after:content-['En'] 
                            after:absolute after:outline-none after:rounded-br-xl after:rounded-tl-xl 
                            after:h-6 after:w-8 after:bg-c-4 after:top-1 after:left-1 after:flex 
                            after:justify-center after:items-center  after:text-c-1 after:font-bold 
                            peer-checked:after:translate-x-10 peer-checked:after:content-['Es'] 
                          peer-checked:after:border-d-4">
                        </div>
                    </label>

                    <label className="ml-6 relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none 
                           bg-c-2 overflow-hidden before:flex before:items-center before:justify-center 
                             after:flex after:items-center after:justify-center before:content-['☀️'] 
                             before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-c-4 
                             before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all 
                             before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 
                             peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 
                             peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] 
                             after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full 
                             after:top-[2px] after:right-1 after:translate-y-full after:w-6 after:h-6 
                             after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 
                             peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                        ></div>
                    </label>
                </div>
            </div>

        </main>
    )
}
export default SideBar