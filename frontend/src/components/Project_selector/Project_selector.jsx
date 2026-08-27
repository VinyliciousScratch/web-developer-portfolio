import './Project_selector.css'


function Project_selector({ imgsrc, onClick, isActive, hasSelection }) {
  const stateClass = !hasSelection ? 'neutral' : isActive ? 'active' : 'inactive';

  return (
    <button
      className={`selector_button ${stateClass}`}
      onClick={onClick}
    >
        <img src={imgsrc} alt="img_project"></img>
    </button>
  );
}

export default Project_selector;