import React from "react";
import "./Graph.css";

const Graph = (props) =>{

    var max = 20;
    console.log(props.data);
    return(
        <div>
            <svg>
                <line x1 = "50" y1="0" x2="50" y2="25" stroke="black"></line>
                <line x1="50" y1="25" x2="1000" y2="25" stroke="black"/>
                {Object.keys(props.data).map((i) =>
                <>
                    <rect x={i * 60} y={max-props.data[i]} key={i} width="50" height={props.data[i]} className="Bar"/>
                    <text x={(i * 60) + 20} y={max + 20} key={"text" + i}>{i}</text>
                    </>
                )}
            </svg>
        </div>
    );
}

export default Graph;