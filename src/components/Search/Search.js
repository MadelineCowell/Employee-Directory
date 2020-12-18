import React from "react";
import "./Search.css";

class SearchForm extends React.Component {

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

    //creating the event to allow search
    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
        let userTyped = event.target.value;

        //allowing the following search terms
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.email + item.cell;
            return values.indexOf(userTyped) !== -1;

        });

        this.setState({
            filteredEmployees: filteredList

        });
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.searchTerm}
                        name="searchTerm"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>

        );
    }
}


export default SearchForm;