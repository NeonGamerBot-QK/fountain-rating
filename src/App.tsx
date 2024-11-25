import React from "react";
import { FountainData } from "./constants";
import MainPage from "./components/Grid";
function App() {
  const [path, setPath] = React.useState<string>(window.location.hash.slice(1));
  const [data, setData] = React.useState<null | FountainData>(null);
  React.useEffect(() => {
    if (process.env.REACT_APP_FORCE_USE_MOCK_DATA) {
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
  if (!path || path == "/" || path == "") {
    return <MainPage data={data} />;
  }

  // if (path === "fountains") {
  //   return data ? <MainPage /> : null;
  // }
  return null;
}

export default App;
