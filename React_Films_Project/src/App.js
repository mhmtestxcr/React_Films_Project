import "./App.css";
import Card from "./Components/Card";
import Collapse from "./Components/Collapse";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card-group">
            <div className="col">
              <Collapse href="collapseexample-1">
                <Card
                  cardTitle="Card Title 1"
                  cardText="Lorem Ipsum Text-1"
                  updateTime="Update Time-1"
                />
              </Collapse>
            </div>
            <div className="col">
              <Collapse href="collapseexample-2">
                <Card
                  cardTitle="Card Title 2"
                  cardText="Lorem Ipsum Text-2"
                  updateTime="Update Time-2"
                />
              </Collapse>
            </div>

            <div className="col">
              <Collapse href="collapseexample-3">
                <Card
                  cardTitle="Card Title 3"
                  cardText="Lorem Ipsum Text-3"
                  updateTime="Update Time-3"
                />
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
