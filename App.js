import React from "react";
import { ReactDOM } from "react-dom/client";

// single line jsx
const heading = <h1 className="head">Nameste react</h1>
root.render(heading);

// multiple line comment-when you write jsx in multiple line then you should close into round bracket to understand babel 

const heading1=(<h1 className="head">Nameste React</h1>)

root.render(heading1);


const Title = () => (
    <h1>React</h1>
);

const Head = () => (
    <div>
        <Title/>
         <h1>Nameste</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Head/>);