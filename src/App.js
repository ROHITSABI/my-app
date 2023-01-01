import { useState } from "react";

function App() {
  return (
    <div>
      <AppHeader />
      <AppBody />
      <AppBody />
      <AppFooter />
    </div>
  );
}
function AppHeader() {
  return (
    <div className="bg-dark text-light p-3">
      <div className="fs-3">Shopping Book</div>
    </div>
  );
}

function AppBody() {
  let [list] = useState([{}, {}, {}]);
  return (
    <div className="row">
      {list.map((item, index) => (
        <div key={index} className="col-12 col-md-3 my-2">
          <div className="card">
            <img
              src={"https://picsum.photos/${250+index}"}
              style={{ height: "200px", objectfit: "cover" }}
            />
            <div className="card-header">Card Title</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit
              ratione sequi cum, expedita consequuntur! Quos voluptates ducimus
              sit odit repudiandae, sed hic assumenda, qui, quidem ullam
              accusamus itaque magni.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AppFooter() {
  return (
    <div
      className="bg-secondary d-flex flex-column justify-content-center align-items-center"
      style={{ height: "400px" }}
    >
      <div className="text-light fs-4">Copy Right By Student Community</div>
      <div className="text-light fs-6">Follow Us @ Twitter</div>
      <div className="text-light fs-6">Follow Us @ Youtube</div>
    </div>
  );
}
export default App;
