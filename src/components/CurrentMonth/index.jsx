import { getYear } from "date-fns";
import CalendarTable from "../CalendarTable";
import style from "./current-month.module.scss";

const CurrentMonth = () => {
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const year = getYear(new Date());

  return (
    <article className={style.currentMonthContainer}>
      <h2 className={style.monthAndYearTitle}>
        {month}&nbsp;{year}
      </h2>

      <CalendarTable year={year} />
    </article>
  );
};

export default CurrentMonth;
