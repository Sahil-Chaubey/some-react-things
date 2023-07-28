import React, { useState } from "react";
import data from "./data";
import List from "./list";


function App() {
  const [people, setPeople] = useState(data)

  if (people.length === 0) {
    return (
      <main>
      <section className="container">
        <h3>what to refresh the list ?</h3>
        <button type="button" className="btn" onClick={() => setPeople(data)}>
          refresh
        </button>
        <List people={people} />
        

      </section>
      </main>
    );
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button type="button" className="btn" onClick={() => setPeople([])}>
          clear
        </button>

      </section>
    </main>
  );

}

export default App;