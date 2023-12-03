import { useTolgee } from '@tolgee/react';
import { US } from 'country-flag-icons/react/3x2'

export const LanguageSelect = () => {
    const tolgee = useTolgee(['language']);

    return (
        <div>

        <select
            className="bg-background text-sm "
            onChange={(e) => tolgee.changeLanguage(e.target.value)}
            value={tolgee.getLanguage()}
        >
            <option value="es">🇪🇸</option>
            <option value="en">🇬🇧</option>
            <option value="it">🇮🇹</option>

        </select>
            

        </div>

    );
};
