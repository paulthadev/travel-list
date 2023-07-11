export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function ParkingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer>
      <em>💼 You have X items on your list, and you already packed X(%)</em>
    </footer>
  );
}
