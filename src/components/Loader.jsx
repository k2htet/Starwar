import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Rings color="white" width="150" height="150" />
    </div>
  );
};

export default Loader;
