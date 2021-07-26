import React from "react"

import "../styles/App.css" // подключаю стили
import "../styles/bootstrap.css"

import Header from "./header"
import Main from "./main"

function App () {
    let buttonName = "Some button updated 1"
    return (
            /* React.Fragment применяется для вставки не связанных элементов */
        <React.Fragment> 
        <div className="container">
            <Header buttonName={"someButton"}/>
            <Main/>
        </div>
        </React.Fragment>
        )

}

export default App