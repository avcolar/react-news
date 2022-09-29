import "./App.css";
import Header from "./component/header/header";
import Content from "./component/content/content";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <section>
          <Content />
        </section>
      </main>
    </>
  );
}

export default App;
