import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((res) => {
        setdata(res.meals);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mt-3">
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card m-4 border border-primary border-3">
                    <img className="card-img-top" src={item.strMealThumb}></img>
                    <h5 className="card-title m-3 text-center">
                      {item.strMeal}
                    </h5>
                    <h6 className="card-subtitle m-3 text-muted text-center">
                      {item.strCategory}
                    </h6>
                    <h6 className="card-subtitle m-3 text-muted text-center">
                      {item.Area}
                    </h6>
                    <p className="card-text m-3 text-center">
                      {item.strInstructions}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
