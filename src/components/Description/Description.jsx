import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.desrc_container}>
      <h1 className={s.cafe}>Sip Happens Café</h1>
      <p className={s.descr_cafe}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
