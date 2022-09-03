import "./styles.css";

type Props = {
  clickCallBack: () => void;
};

const Child = ({ clickCallBack }: Props) => {
  return (
    <section className="margin">
      <button onClick={clickCallBack}>Child button</button>
    </section>
  );
};

export default Child;
