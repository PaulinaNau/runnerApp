import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form/Form";
import { InitialRacesData } from "./data/intialRaces";
import { InitialRaces } from "./components/InitialRaces";
import { FormWarpper } from "./components/Form/FormWrapper";
import { Logo } from "./components/Logo/Logo";

function App() {
  const [initialRaces, setInitialRaces] = useState(InitialRacesData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRace = {
      id: idCounter,
      distance,
      time,
      raceName,
      date: new Date(raceDate),
    };

    setDistance("");
    setTime("");
    setRaceName("");
    setRaceDate("");

    setIdCounter((prevId) => prevId + 1);
    setInitialRaces((prevState) => [newRace, ...prevState]);
  };

  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [raceName, setRaceName] = useState("");
  const [raceDate, setRaceDate] = useState("");

  const [idCounter, setIdCounter] = useState(
    Math.max(...initialRaces.map((r) => r.id)) + 1,
  );

  function handleDelete(idRaceToDelete) {
    setInitialRaces((prevsRaces) =>
      prevsRaces.filter((race) => race.id !== idRaceToDelete),
    );
  }

  return (
    <>
      <div className="flex justify-left items-center gap-8 max-w-xl w-full mx-auto">
        <Logo />
        <div className="text-center w-full">
          <h1 className="pb-2 text-4xl font-bold text-violet-400">
            Runner App
          </h1>
          <h2 className="text-fuchs text-3xl font-bold text-white">
            My Personal Bests
          </h2>
        </div>
      </div>

      <FormWarpper>
        <Form
          submitForm={handleSubmit}
          distance={setDistance}
          time={setTime}
          race={setRaceName}
          date={setRaceDate}
          distanceValue={distance}
          timeValue={time}
          raceValue={raceName}
          dateValue={raceDate}
        />
      </FormWarpper>
      <InitialRaces init={initialRaces} deleteRace={handleDelete} />
    </>
  );
}

export default App;
