import { useState } from "react"
import Add from "./components/Add"
import { FaPlusSquare } from "react-icons/fa";

const App = () => {
    const [addItem, setAddItem] = useState(false)
    const [Events, setEvents] = useState([])

    const getData = (data) => {
        setEvents([...Events, data])
    }

    const more = () => {
        setAddItem(!addItem)
    }

    const HandleButton = (id) => {
        setEvents((prevEvents) => prevEvents.filter((jedenUkol) => jedenUkol.id !== id));
    };

    const ToggleCheck = (id) => {
        setEvents((prevEvents) =>
            prevEvents.map((vyslednePole) =>
                vyslednePole.id === id
                    ? { ...vyslednePole, check: !vyslednePole.check }
                    : vyslednePole 
            )
        );
    };

    return (
        <div className="main">
                <h1>Checklist</h1>
                <div className="buttons-top">
                    <button onClick={more}><FaPlusSquare/></button>
                    <button>Github</button>
                </div>
            {(addItem && <Add onSubmit={getData}/>)}
            <div className="all-items">
                <h2>Váš program</h2>
                    {Events.map( (vyslednePole, index) => {
                        const {name, info, date, place, id, check} = vyslednePole
                        return <div key={index} className={check ? "completed" : "incomplete"}>
                                <h4>{name}</h4>
                                <p>{info}</p>
                                <p>{date}</p>
                                <p>{place}</p>
                                <div>
                                    <button onClick={() => HandleButton(id)}>Vymazat</button>
                                    <button onClick={() => ToggleCheck(id)}>{check ? 'Označit jako nesplněné' : 'Označit za splněné'}</button>
                                </div>    
                    </div>
                })}
                {Events.length === 0 ? (
                <p>Žádné záznamy</p>
                ) : (
                <button onClick={() => setEvents([])}>Vymazat vše</button>
                )}
            </div> 
        </div>
    )
}
export default App