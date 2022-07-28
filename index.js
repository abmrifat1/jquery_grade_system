// import { getSumGrades, getPassingGrades, getFailingGrades, getAverageValue, getRaisedGrades } from "./classroom";

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [20, 9, 11, 15];

const renderStats2Table = grades => {
    const tbody = document.querySelector("#stats-table2 tbody");
    tbody.innerHTML = `<tr>
        <td>${getPassingGrades(grades)}</td>
        <td>${getFailingGrades(grades)}</td>
        <td>${getRaisedGrades(grades)}</td>
    </tr>`;
}

const renderStatsTable = grades => {
    const tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades)}</td>
    </tr>`;
}

const render = grades => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderStats2Table(grades);
}

gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    const newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
});

function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length

}

function getSumGrades(grades) {
    let sum = 0
    grades.forEach(el => sum = el + sum)
    return sum;
    // TODO: return the sum of all the grades

}

function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
return getSumGrades(grades) / getNumberOfGrades(grades)
}

function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
    return grades.filter(el => el >= 10)
}

function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    return grades.filter(el => el < 10)
}

function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    return grades.map(el => {
       let a = el + 1
       return a === 21 ? 20 : a
    })
}

render(grades);
