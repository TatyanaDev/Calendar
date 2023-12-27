import CurrentMonth from "../../components/CurrentMonth";
import CurrentDay from "../../components/CurrentDay";
import style from "./calendar.module.scss";

const Calendar = () => (
  <div className={style.wrapper}>
    <section className={style.container}>
      <CurrentDay />

      <CurrentMonth />
    </section>
  </div>
);

export default Calendar;
