function Spinner() {
  return (
    <div className="position-absolute top-50 start-50  bg-white w-100 h-100">
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
