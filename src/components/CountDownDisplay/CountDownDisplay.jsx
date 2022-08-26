import React from "react";
import styles from "./CountDownDisplay.module.css";

class CountDownDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = "0" + value;
        }
        return value;
    }

    render() {
        const { timeLeftIn, timeInitials } = this.props.disTime;
        let suffixS = "";
        switch (timeInitials) {
            case "Y":
                suffixS =
                    timeLeftIn > 0 && (timeLeftIn === 1 ? " year" : " years");
                break;
            case "D":
                suffixS =
                    timeLeftIn > 0 && (timeLeftIn === 1 ? " day" : " days");
                break;
            case "H":
                suffixS =
                    timeLeftIn > 0 && (timeLeftIn === 1 ? " hour" : " hours");
                break;
            case "M":
                suffixS =
                    timeLeftIn > 0 && (timeLeftIn === 1 ? " min" : " mins");
                break;
            case "S":
                suffixS =
                    timeLeftIn > 0 && (timeLeftIn === 1 ? " sec" : " secs");
        }

        return (
            <span className={styles.countdownCol}>
                <strong>
                    {timeLeftIn > 0 && this.addLeadingZeros(timeLeftIn)}
                </strong>
                <span>{suffixS}</span>
            </span>
        );
    }
}

export default CountDownDisplay;
