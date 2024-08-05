interface Props {
  name: string;
}

const ButtonComponent: React.FC<Props> = ({ name }) => {
  return (
    <>
      <button>{name}</button>
    </>
  );
};

export default ButtonComponent;