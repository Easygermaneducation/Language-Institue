
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/IMG-20250421-WA0000.jpg" alt="Institute Logo" className="h-12" />
        <h1>Welcome to Easy German Education</h1>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>Your one-stop solution for learning German in India and Germany.</p>
        </section>
        <section>
          <h2>Courses</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Register</button>
          </form>
        </section>
        <section>
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
