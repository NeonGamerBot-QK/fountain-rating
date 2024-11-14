import React from "react";
import { FountainData } from "./constants";
function App() {
  const [path, setPath] = React.useState<string>(window.location.hash.slice(1));
  const [data, setData] = React.useState<null | FountainData>(null);
  React.useEffect(() => {
    if (process.env.REACT_APP_FORCE_USE_MOCK_DATA === "true") {
      import("./constants").then((module) => {
        setData(module.mock_data);
      });
    } else {
      fetch(process.env.REACT_APP_API_URL + "/get")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener("hashchange", () => {
      setPath(window.location.hash.slice(1));
    });
  });

  if (path === "fountains") {
    return (
      <div className="hero min-h-screen" style={{ background: "var(--base)" }}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Fountains</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
