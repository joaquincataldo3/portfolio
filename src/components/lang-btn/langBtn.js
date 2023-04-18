import { useGlobalContext } from "../../hooks/context"
import './langBtn.css'

function LangBtn() {

    const { languages } = useGlobalContext()
    console.log(languages)

    return (
        <div className='lang-select-container' >
            <select name="select-lang" className="select-lang">
                {
                    languages.map(lang => (
                        <option value={lang.name} className="lang-option">
                            {/* <img  src={lang.flag}  alt={`Flag of ${lang.name}`} className="lang-img"/> */}
                            <p>{lang.name}</p>
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default LangBtn

