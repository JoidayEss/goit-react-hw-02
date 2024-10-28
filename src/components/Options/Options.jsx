import s from "./Options.module.css";

const Options = ({ onUpdate, onReset, total }) => {
  return (
    <div className={s.button_list}>
      <div className={s.button_item}>
        <button className={s.button_feedback} onClick={() => onUpdate("good")}>
          Good
        </button>
        <button
          className={s.button_feedback}
          onClick={() => onUpdate("neutral")}
        >
          Neutral
        </button>
        <button className={s.button_feedback} onClick={() => onUpdate("bad")}>
          Bad
        </button>
        {total ? (
          <button
            className={s.button_feedback}
            onClick={() => onReset("reset")}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Options;
