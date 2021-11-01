const NoModal = (props) => {
  return (
    <div className="no-modal-container" style={props.noModalStyle}>
      <h2>-SORRY-</h2>
      <h3>
        YOU MUST BE <span className="red">21</span> YEARS OF AGE OR OLDER AND OF
        THE LEGAL SMOKING AGE IN YOUR STATE TO VISIT TNTVAPORS.COM
      </h3>
      <p>
        IF YOU FEEL LIKE THIS HAPPEND DUE TO AN ERROR, FEEL FREE TO GIVE US A
        CALL AT (402)999-9999. THANK YOU.
      </p>
    </div>
  );
};

export default NoModal;
