require("./Colours.scss");
const Colour = (props) => {
  return (
    <div>
      <div className="colour" style={{ backgroundColor: props.colour }}></div>
      <label>Color</label>
    </div>
  );
};

const Colours = () => {
  return <Colour colour={"red"} />;
};

export default Colours;
