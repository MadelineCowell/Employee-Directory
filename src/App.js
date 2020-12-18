import React from 'react';
import './App.css';
import axios from "axios";
// import Banner from './components/Banner/Banner';
import Banner from './components/Banner/Banner';
import EmployeeTable from './components/EmployeeTable/employeeTable';


class App extends React.Component {

  state = {
    employees: [],
  };

  //gathering random employees from api
  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <Banner />
        {this.state.employees.length > 0 &&
        <EmployeeTable employees={this.state.employees}/>
  }
      </div>
    );
  }
}

export default App;
