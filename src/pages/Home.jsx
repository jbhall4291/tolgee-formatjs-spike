import { useTranslate } from "@tolgee/react"
import airport from '../assets/airport_trimmed.jpg'
// import ServicesCard from '../components/ServicesCard'

function Home() {
    const { t } = useTranslate();


    // const services = [{ title: "home_welcome-message", description: "this is service 1" }, { title: "service 1", description: "this is service 1" }]
    return (
        <section className="">
            <div className="relative">
                <img
                    src={airport}
                    alt="sub header"
                    className="opacity-75 w-screen h-3/4"
                />
                <div className=" absolute top-1/2 ml-[31px] lg:ml-[70px] font-customSerif transform -translate-y-1/2  flex flex-col   text-main  text-4xl text-start font-roboto font-semibold leading-[48px] lg:leading-[70px] text-[42px] lg:text-[64px]">
                    <p>{t("home_welcome-message")}</p>
                    <p className="text-xl mt-12">{t("home_welcome-submessage")}</p>
                    <button className="bg-highlight hover:bg-main font-customSans text-background p-4 text-sm tracking-widest max-w-[140px] mt-12">CONTACT US</button>
                </div>
            </div>

            {/* <ul>
  {services.map(service => (
    <ServicesCard key={service} service={service} />
  ))}
</ul> */}
            <div className="bg-background flex justify-center gap-8">
                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Digital Nomad Visa
                    </h1>
                    <p>
                        Enjoy tax benefits while working remotely in Spain.
                    </p>
                </div>


                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Golden Visa
                    </h1>
                    <p>
                        Obtain residency through investments, facilitating your presence in the country.
                    </p>
                </div>

                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Family Reunification
                    </h1>
                    <p>
                        Assistance for family members of the European Union or residents who want to reunite in Spain.
                    </p>
                </div>
            </div>

            <div className="bg-background flex justify-center gap-8">
                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Arraigo by Education and Family Ties
                    </h1>
                    <p>
                        Solutions to establish residence through your academic background or family ties.
                    </p>
                </div>


                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Residence Visa for Students and Family Members:
                    </h1>
                    <p>
                        Streamlining the process for students and their family members wishing to reside in Spain.
                    </p>
                </div>

                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Drivers License Exchange
                    </h1>
                    <p>
                        Assistance in the process to obtain the Spanish drivers license.
                    </p>
                </div>
            </div>

            <div className="bg-background flex justify-center gap-8">
                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Citizenship Recovery
                    </h1>
                    <p>
                        Guidance for reclaiming your Spanish citizenship.
                    </p>
                </div>


                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Italian Citizenship (Ius Sanguinis)
                    </h1>
                    <p>
                        Assistance in preparing documentation to obtain Italian citizenship through ancestry.
                    </p>
                </div>
            </div>
            Other Featured Services:
            <div className="bg-background flex justify-center gap-8">
                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Marriage Residency
                    </h1>
                    <p>
                        We guide couples with European or Spanish spouses through the process of obtaining residency in Spain.
                    </p>
                </div>
            </div>
            Current Spanish Citizenship Scenarios:
            <div className="bg-background flex justify-center gap-8">
                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Citizenship through Continuous Residency:
                    </h1>
                    <p>
                        Obtain Spanish citizenship after legally residing in the country for a specific period.
                    </p>
                </div>


                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Citizenship through Marriage
                    </h1>
                    <p>
                        If you are married to a Spanish citizen and meet the requirements, you can opt for Spanish citizenship.
                    </p>
                </div>
                <div className="border-2 border-black p-10 max-w-[300px]">
                    <h1>
                        Citizenship by Descent:
                    </h1>
                    <p>
                        Directly descended from a Spanish citizen. We assist you in the process of obtaining citizenship through jus sanguinis.
                    </p>
                </div>
            </div>
            At 1111visas.com, our commitment is to offer comprehensive migratory services, providing you with the peace of mind and confidence you need during your residence process in Spain. Contact me for personalized advice and take the first step towards your new life in this beautiful country. I am here to guide you every step of the way!

        </section>
    )
}

export default Home
