// src/components/ToggleButton.jsx
import './ToggleButton.css';

function ToggleButton({ isVisible }) {
  return (
    <div className="toggle-card">
      <button className="status-btn">Click me!</button>
      
      <div className="content-area">
        {isVisible ? (
          <p className="visible">Content is VISIBLE</p>
        ) : (
          <p className="hidden">Content is HIDDEN</p>
        )}
      </div>
    </div>
  );
}

export default ToggleButton;