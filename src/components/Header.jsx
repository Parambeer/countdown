import React from "react";
import "../style/Countdown.css";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = { col: "" };

        this.colors = [
            "red",
            "green",
            "blue",
            "purple",
            "yellow",
            "pink",
            "orange",
            "aqua",
            "blueviolet",
            "chartreuse",
            "cyan",
            "darkorange",
            "darkviolet",
            "lawngreen",
            "magenta",
        ];
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const num = Math.floor(Math.random() * 14);
            this.setState({ col: this.colors[num] });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <header className="App-header">
                <h1 style={{ color: this.state.col, fontSize: "5rem" }}>
                    Countdown
                </h1>
            </header>
        );
    }
}
