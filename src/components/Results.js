function Results({ buttonValue }) {
  return (
    <div id="results">
      <input 
        value={
          buttonValue.length === 1 ? buttonValue : buttonValue.join('')
        }
        readOnly
        autoFocus
      />
    </div>
  );
}

export default Results;