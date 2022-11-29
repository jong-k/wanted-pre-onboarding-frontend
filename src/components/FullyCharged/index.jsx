import "./index.scss";

function FullyCharged() {
  return (
    <div className="container">
      <div className="box">
        <div className="input" />
        <div className="battery-box">
          <div className="battery" />
          <div className="battery" />
          <div className="battery" />
          <div className="battery" />
        </div>
        <div className="input" />
      </div>
    </div>
  );
}

export default FullyCharged;
