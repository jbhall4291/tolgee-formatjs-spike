import { useTranslate } from "@tolgee/react"


export const ServicesCard = ({ service }) => {
    const { t } = useTranslate();
    return (
        <div className="bg-background">
            <p>
          
            {t("services_card1-title")}
            </p>
            <p>
            <em>

         
            {t("services_card1-description")}

            </em></p>
        </div>
    );
};

export default ServicesCard;
