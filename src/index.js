import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Antonio";
const surname = "Giuliano";
const todayFull = new Date();
const objDayLiteral = {
    0 : "Domenica",
    1 : "Lunedì",
    2 : "Martedì",
    3 : "Mercoledì",
    4 : "Giovedì",
    5 : "Venerdì",
    6 : "Sabato",
}
const objMonthLiteral = {
    0 : "Gennaio",
    1 : "Febbraio",
    2 : "Marzo",
    3 : "Aprile",
    4 : "Maggio",
    5 : "Giugno",
    6 : "Luglio",
    7 : "Agosto",
    8 : "Settembre",
    9 : "Ottobre",
    10 : "Novembre",
    11 : "Dicembre",
}
let dayItaLiteral = todayFull.getDay();
let dayItanum = todayFull.getDay();
let monthItaLiteral = todayFull.getMonth();

let d = objDayLiteral[dayItaLiteral];
let m = objMonthLiteral[monthItaLiteral];

function blunt() {
    const element = (
        <div>
            <h1>My fullname is: {name} {surname}</h1>
            <h2>Today: {d} {dayItanum} {m} {todayFull.getFullYear()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));

}


setInterval(blunt, 1000);