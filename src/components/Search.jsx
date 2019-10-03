import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            placeholder: "ex: Lisbon || Lisbon,pt",
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSubmitSearch } = this.props;
        const { text, placeholder } = this.state;
        handleSubmitSearch(text);
        // this.setState({ text: "" });
        this.setState({ placeholder: "" });
    }

    render() {
        const { text, placeholder } = this.state;
        return (
            <div>
                <form className="">
                    <input className="search-input" type="text" value={text} placeholder={placeholder} onChange={this.handleChange} />
                    <input className="search-submit" type="submit" value="search" onClick={this.handleSubmit} />
                </form>
                <p className="search-p">
                    search by [city] or [city<span className="comma">,</span>country-code]
                </p>
            </div>
        );
    }
}

export default Search;
