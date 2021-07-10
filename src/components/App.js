import React from "react";
import MainLayout from "./MainLayout";
import Sidebar from "./SideBar";
import Login from "./Login";
const user = 1;
class App extends React.Component {
  render() {
    if (user == 1) {
      return (
        <div>
          <MainLayout />
          <Sidebar />
        </div>
      );
    } else {
      return <Login />;
    }
  }
}

export default App;
