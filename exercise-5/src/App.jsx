import Card from "./component/Card";
import { USERS } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      {USERS.map(user => (
        <Card key={user.id} item={user} />
      ))}
    </div>
  );
}

export default App;
