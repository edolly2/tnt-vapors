const AgeModal = (props) => {
  return (
    <div className="age-modal-container" style={props.ageModalStyle}>
      <h3>
        ARE YOU 21 YEARS OF AGE OR OLDER AND OF THE LEGAL SMOKING AGE IN YOUR
        STATE?
      </h3>
      <div className="age-btn-group">
        <button className="btn yes-btn" onClick={props.onYesClick}>
          YES
        </button>
        <button className="btn" onClick={props.onNoClick}>
          NO
        </button>
      </div>
    </div>
  );
};

export default AgeModal;
