import { useTranslate, useTolgee } from "@tolgee/react"
import './App.css'
import { LanguageSelect } from "./LanguageSelect";
import pickles from "../src/assets/pickles.png"
import { IntlProvider, FormattedNumber, FormattedPlural, FormattedDate } from 'react-intl'


function App() {

  const { t } = useTranslate();
  const tolgee = useTolgee(['language']);

  const jarsInStock = 12000

  console.log(tolgee.getLanguage())

  return (
    <>

      <IntlProvider locale={tolgee.getLanguage()} >
        <h1>{t("welcome_message")}</h1>
        <h2>{t("sub_message")}</h2>
        <div className="container">
          <img src={pickles} width="300" />
          <div>
            <p>One Jar: <FormattedNumber value={15.99} style="currency" currency="GBP" /></p>
            <p>Delivery: <FormattedNumber value={1.49} style="currency" currency="GBP" /></p>
            <p>Currently in stock: <FormattedNumber value={jarsInStock} /> <FormattedPlural value={jarsInStock} other="jars" one="jar" /></p>
            <p>Order by 6pm for delivery by: <FormattedDate
              value={new Date(1693193600011)}
              year="numeric"
              month="long"
              day="2-digit"
            /></p>
            <button>BUY NOW!</button>
          </div>
        </div>
        <div style={{ marginTop: '150px' }}>
          <LanguageSelect />
        </div>
      </IntlProvider>
    </>
  )
}

export default App
