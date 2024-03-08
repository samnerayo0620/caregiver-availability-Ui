import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="your-link-here"> {/* Replace "your-link-here" with the actual link */}
          <img id="lego-img-top-left" src="lego-img.jpg" alt="Lego Toy" />
        </a>
        <img id="lego-img-centered" src="home-img.jpeg" alt="Centered Lego Toy" />
      </header>

      <div className="main-content">
        <a id="enter-btn" href="availability.html">Enter Your Availability</a>
      </div>
    </div>
  );
}

export default App;
