import { useTranslate, useTolgee } from "@tolgee/react"

function Footer() {

    const { t } = useTranslate();

    return (
        <footer className="bg-black text-white py-12 flex flex-row justify-between px-8">
            
            <div>
            Copyright © 2023 1111visas.com - Todos los derechos reservados.

            </div>
        </footer>
    )
}

export default Footer