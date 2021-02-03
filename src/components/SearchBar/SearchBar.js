import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        this.onTextChange = this.onTextChange.bind(this)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    onTextChange(e) {
        this.setState({text: e.target.value})
    }

    onSearchSubmit(e){
        console.log(this.state.text+"submitted to backend");
    }

    render() {
        return (
            <div className="searchBar">
                <Input classes="input" onChange={this.onTextChange} /> 
                <Button classes="searchButton" variant='contained' color='default' onClick={this.onSearchSubmit}>SUBMIT</Button>
            </div>
        )
    }
}

export default SearchBar;