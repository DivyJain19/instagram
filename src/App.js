import "./App.css";
import { useState, useEffect } from "react";
import UserInfo from "./components/UserInfo";
import PhotoGrid from "./components/PhotoGrid";
function App() {
  const [userData, setUserData] = useState({});
  const [userPhotos, setUserPhotos] = useState([]);
  useEffect(() => {
    async function getUserData() {
      const res = await fetch("http://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setUserData(data);
    }
    async function getUserPhotos() {
      const res = await fetch("http://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      console.log(data);
      setUserPhotos(data);
    }
    getUserData();
    getUserPhotos();
  }, []);
  return (
    <div className="App">
      {userData && <UserInfo userData={userData} />}
      {userData && <PhotoGrid photos={userPhotos} />}
    </div>
  );
}

export default App;
