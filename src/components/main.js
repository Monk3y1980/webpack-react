import React from "react"
import "../styles/main.css"


class Main extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item main-list" aria-current="true">An active item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        )
    }   
}

export default Main