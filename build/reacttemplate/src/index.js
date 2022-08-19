"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
class App extends react_1.default.Component {
    reder() {
        return <div>"Hello World"</div>;
    }
}
react_dom_1.default.render(<App />, document.getElementById("root"));
