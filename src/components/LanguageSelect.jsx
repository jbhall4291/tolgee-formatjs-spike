import { useTolgee } from '@tolgee/react';

export const LanguageSelect = () => {
    const tolgee = useTolgee(['language']);

    return (
        <select
            onChange={(e) => tolgee.changeLanguage(e.target.value)}
            value={tolgee.getLanguage()}
        >
            <option value="en">🇬🇧 English</option>
            <option value="it">🇮🇹 Italian</option>
            <option value="es">🇪🇸 Spanish</option>

        </select>


    );
};