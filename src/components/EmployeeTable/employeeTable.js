import React from "react";
// import "./employeeTable.css";
import Header from '../Header/Header';
import SearchForm from "../Search/Search";


class employeeTable extends React.Component {

    state = {
        searchTerm: "",
        filteredEmployees: []
    };

    componentDidMount() {
        if (this.state.filteredEmployees.length < 1) {
            this.setState({
                filteredEmployees: this.props.employees
            })
        }
    }


    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
        let userTyped = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
            return values.indexOf(userTyped) !== -1;

        });

        this.setState({
            filteredEmployees: filteredList

        });
    }

    render() {
        return (
            <div>
                <SearchForm/>
                {this.state.filteredEmployees.length > 0 &&
                    <Header empList={this.state.filteredEmployees} />
                }
            </div>

        );
    }
}


export default employeeTable;