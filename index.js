
  function calculate() {
    // Получаем значения из полей ввода
    let fx = document.getElementById('fx').value;
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let eps = parseFloat(document.getElementById('eps').value);

    // Очищаем таблицу результатов
    let tableBody = document.querySelector('#resultTable');
    tableBody.innerHTML = '';

    let feps;
    let iteration = 0;

    // Используем регулярное выражение для замены всех вхождений sin, ln, cos, tg
    let replacedFunction = fx.replace(/sin/g, 'Math.sin')
        .replace(/ln/g, 'Math.log')
        .replace(/cos/g, 'Math.cos')
        .replace(/tg/g, 'Math.tan')
        .replace(/=0/g, '')
        .replace(/(\d+)(x)/g, '$1*$2')
        .replace(/\^/g, '**')
        .replace(/sqrt/g, 'Math.sqrt')
        .replace(/\^/g, '**');

    do {
        // Находим середину интервала
        let c = (a + b) / 2;

        // Заменяем 'x' на значения 'a', 'b', 'c'
        let fa = replacedFunction.replace(/x/g, a);
        let fb = replacedFunction.replace(/x/g, b);
        let fc = replacedFunction.replace(/x/g, c);

        // Вычисляем значения функции в точках a, b и c
        let fA = eval(fa);
        let fB = eval(fb);
        let fC = eval(fc);

        // Вычисляем ошибку (feps)
        feps = Math.abs((b - a) / 2);


        // <td>${++iteration}</td>
        //     <td>${a.toFixed(6)}</td>
        //     <td>${fA.toFixed(6)}</td>
        //     <td>${b.toFixed(6)}</td>
        //     <td>${fB.toFixed(6)}</td>
        //     <td>${c.toFixed(6)}</td>
        //     <td>${fC.toFixed(6)}</td>
        //     <td>${feps.toFixed(6)}</td>



        // Добавляем строку в таблицу
        let row = document.createElement('div');
        row.innerHTML = `
        <div class="table__iteration wow fadeInDown">Итерация ${++iteration}</div>
            <div class="table__body wow fadeInDown">
    <div class="table__column wow fadeInUp">
        <div class="table__element">a=</div>
        <div class="table__element">b=</div>
        <div class="table__element">c=</div>
        <div class="table__element">eps=</div>
    </div>
    <div class="table__column wow fadeInUp">
        <div class="table__element">${a.toFixed(6)}</div>
        <div class="table__element">${b.toFixed(6)}</div>
        <div class="table__element">${c.toFixed(6)}</div>
        <div class="table__element">${eps}</div>
    </div>
    <div class="table__column wow fadeInUp">
        <div class="table__element">a(f)=</div>
        <div class="table__element">b(f)=</div>
        <div class="table__element">c(f)=</div>
        <div class="table__element">></div>
    </div>
    <div class="table__column wow fadeInUp">
        <div class="table__element">${fA.toFixed(6)}</div>
        <div class="table__element">${fB.toFixed(6)}</div>
        <div class="table__element">${fC.toFixed(6)}</div>
        <div class="table__element">${feps.toFixed(6)}</div>
    </div>

</div>
        `;
        tableBody.appendChild(row);


        if (fA * fC < 0) {
            b = c;
        } else {
            a = c;
        }

    } while (feps > eps);

    if(feps => eps){
        
        // alert('Корень приближённо находится в точке: ' + (a + b) / 2);
    }

}