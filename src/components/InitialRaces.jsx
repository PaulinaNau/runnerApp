import { CloseButton } from "./CloseButton/CloseButton";
import { FormWarpper } from "./Form/FormWrapper";

export function InitialRaces({ init, deleteRace }) {
  return (
    <>
      {init.map((race) => (
        <FormWarpper textAlign="text-left" bgColor="bg-violet-200">
          <div key={race.id}>
            <CloseButton onClick={() => deleteRace(race.id)} />
            <table>
              <tr>
                <td><b>Race name:</b></td>
                <td>{race.raceName}</td>
              </tr>
              <tr>
                <td>
                  <b>Distance:</b>{" "}
                </td>
                <td>{race.distance}</td>
              </tr>
              <tr>
                <td>
                  <b>Time:</b>
                </td>
                <td> {race.time}</td>
              </tr>
              <tr>
                <td>
                  <b>Date:</b>
                </td>
                <td>{race.date.toLocaleDateString()}</td>
              </tr>
            </table>
            {/* <ul>
              <li><b>Distance:</b> {race.distance}</li>
              <li><b>Time:</b> {race.time}</li>
              <li><b>Race name:</b> {race.raceName}</li>
              <li><b>Date:</b> {race.date.toLocaleDateString()}</li>
            </ul> */}
          </div>
        </FormWarpper>
      ))}
    </>
  );
}
