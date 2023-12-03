import { useTolgee } from '@tolgee/react';

function Home() {
    const tolgee = useTolgee(['language']);
    return (
        <main  className="py-24">
            <h1>hello from home / ¡Bienvenido a 1111 visas ! {tolgee.getLanguage()}</h1>
            <h2>Tu Camino a España, Nuestra Experiencia en Migración</h2>
            <p>we want a looping video for a background</p>
            <p>The company / La empresa</p>
            <p>Where we are / Dónde estamos</p>
        </main>
    )
}

export default Home
