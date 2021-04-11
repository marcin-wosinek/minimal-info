import array from "../data/covid-gc.json";

const data = array.pop();

export default function () {
  return (
    <div>
      <h1>COVID Gran Canaria</h1>
      {/* hide as some info popup on the title*/}
      <p>Weekly update about current COVID situation on Gran Canaria, Spain</p>
      <p>
        As of {data.date} the cumulative incidence for 100.000 people is{" "}
        <b>{data.cumulative_incidence}</b>. It's{" "}
        <b>
          {Math.floor((100 * data.cumulative_incidence) / data.week_earlier)}%
        </b>{" "}
        of the weak earlier,
        <b>
          {Math.floor((100 * data.cumulative_incidence) / data.last_wave)}%
        </b>{" "}
        of the peak of the last wave of {data.date_of_last_wave} &{" "}
        <b>{Math.floor((100 * data.cumulative_incidence) / data.max)}%</b> of
        the highest recorded value of {data.date_of_max}.
      </p>
    </div>
  );
}
