import { useTranslation } from "react-i18next";

const SoftSkills = () => {
    const elementos = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];

    const [t] = useTranslation();

    return (
        <div className="">
            
            <div className="flex justify-center flex-none
            items-center text-center gap-8 flex-nowrap">
                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    {elementos.map((elemento) => (
                        <div className="bg-c-3 rounded-md p-1 text-sm" key={elemento}>
                            {t(`SoftSkills.${elemento}`)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
