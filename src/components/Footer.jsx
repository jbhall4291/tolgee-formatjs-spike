import { useTranslate, useTolgee } from "@tolgee/react"

function Footer() {

    const { t } = useTranslate();

    return (
        <footer className="bg-black text-white py-12 flex flex-row justify-between px-8">
            <p>{t("footer_copyright")}</p>
            <p>{t("footer_copyright")}</p>
        </footer>
    )
}

export default Footer