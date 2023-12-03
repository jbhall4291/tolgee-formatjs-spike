import { useTolgee } from '@tolgee/react';

function Services() {
    const tolgee = useTolgee(['language']);
    return (
        <main  className="py-24 bg-[#fff3e0]">
            <h1>hello from services</h1>
            this page shows all the services
            
        </main>
    )
}

export default Services
