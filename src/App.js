import logo from "./logo.svg";
import "./App.css";
// import Basic2 from './component/Basic2'
import BasicUseEffect from "./component/BasicUseEffect";
import TimerContainer from "./component/TimerContainer";
import ApiFetch from "./component/ApiFetch";
import AppContext from "./contexts/AppContext";
import B from "./component/B";
import BasicReducer from "./component/BasicReducer";
import CompB from "./component/CompB";

import { useReducer } from "react";

const initialState = 0;
const redicer = (currentState, action) => {
    switch (action) {
        case "add_1":
            return currentState + 1;

        case "multiple_3":
            return currentState * 3;

        case "reset":
            return initialState;

        default:
            return currentState;
    }
};

function App() {
    const [count, dispatch] = useReducer(redicer, initialState);
    return (
        <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <Basic2 /> */}
                    {/* <BasicUseEffect /> */}
                    {/* <TimerContainer /> */}
                    {/* <ApiFetch />
                    <B />
                    <BasicReducer /> */}
                    Count {count}
                    <CompB />
                </header>
            </div>
        </AppContext.Provider>
    );
}

export default App;
