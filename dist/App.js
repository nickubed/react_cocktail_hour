"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const React = require("react");
const react_1 = require("react");
const axios_1 = require("axios");
require("./App.css");
const API_URL = `https://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}`;
const DEFAULT_QUERY = `popular.php`;
const App = () => {
    let [query, setQuery] = react_1.useState(DEFAULT_QUERY);
    let [data, setData] = react_1.useState({ hits: [] });
    let [tempQuery, setTempQuery] = react_1.useState(DEFAULT_QUERY);
    react_1.useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            let results = yield axios_1.default(API_URL + query);
            console.log(results.data);
            setData(results.data);
            getData();
        });
    });
    return (React.createElement("div", { className: "App" }));
};
exports.default = App;
//# sourceMappingURL=App.js.map