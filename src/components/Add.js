import { useState } from "react";
import "./Add.css";

const Add = (props) => {
  const [oneEvent, setOneEvent] = useState({
    name: "",
    info: "",
    date: "",
    place: "",
    id: "",
    check: false,
  });
  const [allEvent, setAllEvent] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const Change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setOneEvent({ ...oneEvent, [name]: value });
  };

  const Submit = (event) => {
    event.preventDefault();

    if (oneEvent.name && oneEvent.date) {
      const newEvent = {
        name: oneEvent.name,
        info: oneEvent.info,
        date: oneEvent.date,
        place: oneEvent.place,
        id: idCounter,
        check: false,
      };
      const updatedEvents = [...allEvent, newEvent];
      setAllEvent(updatedEvents);
      props.onSubmit(newEvent);
      setIdCounter(idCounter + 1);
    }
  };

  return (
    <div className="trans">
      <h2>Tvorba události: {oneEvent.name}</h2>
      <form onSubmit={Submit}>
        <input
          type="text"
          placeholder="Název"
          value={oneEvent.name}
          onChange={Change}
          name="name"
        />
        <input
          type="text"
          placeholder="Popis (nepovinné)"
          value={oneEvent.info}
          onChange={Change}
          name="info"
        />
        <input
          type="date"
          placeholder="Datum"
          value={oneEvent.date}
          onChange={Change}
          name="date"
        />
        <input
          type="text"
          placeholder="Místo (nepovinné)"
          value={oneEvent.place}
          onChange={Change}
          name="place"
        />
        <input type="submit" value="Vytvořit" />
      </form>
    </div>
  );
};
export default Add;
