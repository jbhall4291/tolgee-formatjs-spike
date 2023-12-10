
import { useTranslate } from "@tolgee/react";

const ServiceCard = ({ serviceTitleKey, serviceDescriptionKey }) => {
    const { t } = useTranslate();

    // Translate the keys using Tolgee's t() function
    const translatedServiceTitle = t(serviceTitleKey);
    const translatedServiceDescription = t(serviceDescriptionKey);

    return (
        <div className="bg-background">
            <p>
                <em>{translatedServiceTitle}</em>
                {translatedServiceDescription}
            </p>
        </div>
    );
};

export default ServiceCard;
