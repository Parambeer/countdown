import "./style/Countdown.css";
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import Confetti from "react-confetti";

function App() {
    //const { innerWidth, innerHeight } = window;
    return (
        <div className="App">
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <div className="main">
                <Header />
                <Countdown date="2024-09-24T00:00:00" />
            </div>
        </div>
    );
}

export default App;
