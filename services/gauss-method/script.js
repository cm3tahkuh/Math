document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculateButton");

  calculateButton.addEventListener("click", () => {
    const table = document
      .getElementById("equationTable")
      .querySelector("tbody");
    const rows = table.querySelectorAll("tr");

    const firstRowInputs = rows[0].querySelectorAll("input[type='number']");
    const a11 = parseFloat(firstRowInputs[0].value);
    if (isNaN(a11) || a11 === 0) {
      alert("a11 не может быть равен 0 или быть пустым!");
      return;
    }

    // ПЕРВАЯ СТРОКА

    const firstNewRow = table.insertRow(-1);
    let rowSum = 0;
    let controlSum = 0;

    for (let i = 0; i < firstRowInputs.length; i++) {
      const value = parseFloat(firstRowInputs[i].value) || 0;
      const result = value / a11;

      const cell = firstNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    const controlSumCell1 = firstNewRow.insertCell(-1);
    controlSumCell1.textContent = controlSum.toFixed(3);

    const rowSumCell1 = firstNewRow.insertCell(-1);
    rowSumCell1.textContent = rowSum.toFixed(3);

    // ВТОРАЯ СТРОКА
    const secondRowInputs = rows[1].querySelectorAll("input[type='number']");
    const a21 = parseFloat(secondRowInputs[0].value);

    const secondNewRow = table.insertRow(-1);
    rowSum = 0;
    controlSum = 0;

    for (let i = 0; i < secondRowInputs.length; i++) {
      const originalValue = parseFloat(secondRowInputs[i].value) || 0;
      const normalizedValue = parseFloat(firstNewRow.cells[i].textContent) || 0;

      const result = originalValue - a21 * normalizedValue;

      const cell = secondNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    const controlSumCell2 = secondNewRow.insertCell(-1);
    controlSumCell2.textContent = controlSum.toFixed(3);

    const rowSumCell2 = secondNewRow.insertCell(-1);
    rowSumCell2.textContent = rowSum.toFixed(3);

    // ТРЕТЬЯ СТРОКА
    const thirdRowInputs = rows[2].querySelectorAll("input[type='number']");
    const a31 = parseFloat(thirdRowInputs[0].value);

    const thirdNewRow = table.insertRow(-1);
    rowSum = 0;
    controlSum = 0;

    for (let i = 0; i < thirdRowInputs.length; i++) {
      const originalValue = parseFloat(thirdRowInputs[i].value) || 0;
      const normalizedValue = parseFloat(firstNewRow.cells[i].textContent) || 0;

      const result = originalValue - a31 * normalizedValue;

      const cell = thirdNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    const controlSumCell3 = thirdNewRow.insertCell(-1);
    controlSumCell3.textContent = controlSum.toFixed(3);

    const rowSumCell3 = thirdNewRow.insertCell(-1);
    rowSumCell3.textContent = rowSum.toFixed(3);

    // ЧЕТВЕРТАЯ СТРОКА
    const fourthNewRow = table.insertRow(-1);
    rowSum = 0;
    controlSum = 0;

    const emptyCell4 = fourthNewRow.insertCell(0);
    emptyCell4.textContent = "";
    let a41 = parseFloat(secondNewRow.cells[1].textContent) || 0;

    for (let i = 1; i < thirdNewRow.cells.length - 2; i++) {
      const normalizedValue =
        parseFloat(secondNewRow.cells[i].textContent) || 0;

      const result = normalizedValue / a41;

      const cell = fourthNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    const controlSumCell4 = fourthNewRow.insertCell(-1);
    controlSumCell4.textContent = controlSum.toFixed(3);

    const rowSumCell4 = fourthNewRow.insertCell(-1);
    rowSumCell4.textContent = rowSum.toFixed(3);

    // ПЯТАЯ СТРОКА

    const fifthNewRow = table.insertRow(-1);
    rowSum = 0;
    controlSum = 0;

    const emptyCell5 = fifthNewRow.insertCell(0);
    emptyCell5.textContent = "";
    let a51 = parseFloat(thirdNewRow.cells[1].textContent) || 0;

    for (let i = 1; i < fourthNewRow.cells.length - 2; i++) {
      const previousValue = parseFloat(thirdNewRow.cells[i].textContent) || 0;
      const normalizedValue =
        parseFloat(fourthNewRow.cells[i].textContent) || 0;
      const result = previousValue - normalizedValue * a51;

      const cell = fifthNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    const controlSumCell5 = fifthNewRow.insertCell(-1);
    controlSumCell5.textContent = controlSum.toFixed(3);

    const rowSumCell5 = fifthNewRow.insertCell(-1);
    rowSumCell5.textContent = rowSum.toFixed(3);

    // ШЕСТАЯ СТРОКА

    const sixNewRow = table.insertRow(-1);
    rowSum = 0;
    controlSum = 0;

    const emptyCellX1 = sixNewRow.insertCell(0);
    emptyCellX1.textContent = "";
    const emptyCellX2 = sixNewRow.insertCell(1);
    emptyCellX2.textContent = "";

    let a61 = parseFloat(fifthNewRow.cells[2].textContent) || 0;

    for (let i = 2; i < fifthNewRow.cells.length - 2; i++) {
      const normalizedValue = parseFloat(fifthNewRow.cells[i].textContent) || 0;
      const result = normalizedValue / a61;

      const cell = sixNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    const controlSumCell6 = sixNewRow.insertCell(-1);
    controlSumCell6.textContent = controlSum.toFixed(3);

    const rowSumCell6 = sixNewRow.insertCell(-1);
    rowSumCell6.textContent = rowSum.toFixed(3);

    // СЕДЬМАЯ СТРОКА

    const sevenNewRow = table.insertRow(-1);
    rowSum = 0;
    controlSum = 0;

    const sevenEmptyCellX1 = sevenNewRow.insertCell(0);
    sevenEmptyCellX1.textContent = "";
    const sevenEmptyCellX2 = sevenNewRow.insertCell(1);
    sevenEmptyCellX2.textContent = "";
    const sevenEmptyCellX3 = sevenNewRow.insertCell(2);
    sevenEmptyCellX2.textContent = "";

    let a71 = parseFloat(fourthNewRow.cells[2].textContent) || 0;
    for (let i = 3; i < sixNewRow.cells.length; i++) {
      const previousValue = parseFloat(fourthNewRow.cells[i].textContent) || 0;
      const normalizedValue = parseFloat(sixNewRow.cells[i].textContent) || 0;
      const result = previousValue - a71 * normalizedValue;

      const cell = sevenNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    // ВОСЬМАЯ СТРОКА

    const eightNewRow = table.insertRow(-1);
    rowSum = 0;
    controlSum = 0;

    const eightEmptyCellX1 = eightNewRow.insertCell(0);
    sevenEmptyCellX1.textContent = "";
    const eightEmptyCellX2 = eightNewRow.insertCell(1);
    sevenEmptyCellX2.textContent = "";
    const eightEmptyCellX3 = eightNewRow.insertCell(2);
    sevenEmptyCellX2.textContent = "";

    let a81 = parseFloat(firstNewRow.cells[1].textContent) || 0;
    console.log(a81);
    let a82 = parseFloat(firstNewRow.cells[2].textContent) || 0;
    console.log(a82);
    for (let i = 3; i < sevenNewRow.cells.length; i++) {
      const previousValue = parseFloat(firstNewRow.cells[i].textContent) || 0;
      console.log(previousValue);
      const secondValue = parseFloat(sixNewRow.cells[i].textContent) || 0;
      console.log(secondValue);
      const normalizedValue = parseFloat(sevenNewRow.cells[i].textContent) || 0;
      console.log(normalizedValue);
      const result = previousValue - a82 * secondValue - a81 * normalizedValue;

      const cell = eightNewRow.insertCell(i);
      cell.textContent = result.toFixed(3);

      rowSum += result;
      controlSum += result;
    }

    let x1 = parseFloat(firstRowInputs[3].value);
    let x2 = parseFloat(secondRowInputs[3].value);
    let x3 = parseFloat(thirdRowInputs[3].value);

    let container = document.querySelector(".container");
    container.append(
      `Проверка: 1 уравнение: ${x1}, 2 уравнение: ${x2}, 3 уравнение: ${x3}`
    );
  });
});
