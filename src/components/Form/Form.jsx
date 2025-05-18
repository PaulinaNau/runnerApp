import { InitialRacesData } from "../../data/intialRaces";
import { Button } from "../Button/Button";

export function Form({
  submitForm,
  distance,
  time,
  race,
  date,
  distanceValue,
  timeValue,
  raceValue,
  dateValue,
}) {
  return (
    <>
      <div className="px-8">
        <form onSubmit={submitForm}>
          <div className="flex items-center justify-center gap-8">
            <label htmlFor="distance">Distance: </label>
            <select
              className="decorated"
              name="distance"
              id="distance"
              value={distanceValue}
              onChange={(e) => distance(e.target.value)}
              required
            >
              <option value="" id="default" disabled>
                Choose distance
              </option>
              <option value="100 m">100 m</option>
              <option value="200 m">200 m</option>
              <option value="800m">800 m</option>
              <option value="3 km">3 km</option>
              <option value="5 km">5 km</option>
              <option value="10 km">10 km</option>
              <option value="21,097km">Półmaraton – 21,097 km</option>
              <option value="42,195 km">Maraton – 42,195 km</option>
            </select>
          </div>
          <div className="flex items-center justify-center gap-8">
            <label htmlFor="time">Time: </label>
            <input
              type="text"
              id="timeInput"
              name="timeInput"
              value={timeValue}
              onChange={(e) => time(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center gap-8">
            <label htmlFor="race">Race name: </label>
            <input
              type="text"
              id="raceInput"
              name="raceInput"
              value={raceValue}
              onChange={(e) => race(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center gap-8">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              id="date"
              name="dateInput"
              value={dateValue}
              onChange={(e) => date(e.target.value)}
              required
            />
          </div>
          <div className="pl-12">
            <Button>Save race</Button>
          </div>
        </form>
      </div>
    </>
  );
}
