import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

{
  /* write an <About> component here */
}
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This is the about section.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
