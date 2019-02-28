import React from "react"
// import { Link } from "gatsby"


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true
        }
    }

    render() {
        return (
            <header className="header">
                <h2 className="hidden">Header Section</h2>
            </header>
        )
    }

}

export default Header
