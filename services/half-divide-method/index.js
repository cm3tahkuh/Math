function calculate() {

    let fx = document.getElementById('fx').value;
    let a = new BigNumber(document.getElementById('a').value);
    let b = new BigNumber(document.getElementById('b').value);
    let eps = Math.abs(new BigNumber(document.getElementById('eps').value));


    let tableBody = document.querySelector('#resultTable');
    tableBody.innerHTML = '';

    let feps;
    let iteration = 0;

    let precision = -Math.floor(Math.log10(parseFloat(eps)));

        console.log(precision)


    let replacedFunction = fx.replace(/sin/g, 'Math.sin')
        .replace(/ln/g, 'Math.log')
        .replace(/cos/g, 'Math.cos')
        .replace(/tg/g, 'Math.tan')
        .replace(/=0/g, '')
        .replace(/(\d+)(x)/g, '$1*$2')
        .replace(/\^/g, '**')
        .replace(/sqrt/g, 'Math.sqrt')

    do {

        let c = a.plus(b).dividedBy(2);

 
        let fa = replacedFunction.replace(/x/g, a.toString());
        let fb = replacedFunction.replace(/x/g, b.toString());
        let fc = replacedFunction.replace(/x/g, c.toString());


        let fA = eval(fa);
        let fB = eval(fb);
        let fC = eval(fc);


        feps = b.minus(a).dividedBy(2).abs();

    
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
                    <div class="table__element">${a.toFixed(precision + 3)}</div>
                    <div class="table__element">${b.toFixed(precision + 3)}</div>
                    <div class="table__element">${c.toFixed(precision + 3)}</div>
                    <div class="table__element">${eps.toFixed(precision + 3)}</div>
                </div>
                <div class="table__column wow fadeInUp">
                    <div class="table__element">a(f)=</div>
                    <div class="table__element">b(f)=</div>
                    <div class="table__element">c(f)=</div>
                    <div class="table__element">></div>
                </div>
                <div class="table__column wow fadeInUp">
                    <div class="table__element">${fA.toFixed(precision + 3)}</div>
                    <div class="table__element">${fB.toFixed(precision + 3)}</div>
                    <div class="table__element">${fC.toFixed(precision + 3)}</div>
                    <div class="table__element">${feps.toFixed(precision + 3)}</div>
                </div>
            </div>
        `;
        tableBody.appendChild(row);

        if (fA * fC < 0) {
            b = c;
        } else {
            a = c;
        }

    } while (feps.isGreaterThan(eps));

    tableBody.append('Корень приближённо находится в точке: ' + a.plus(b).dividedBy(2).toFixed(precision + 3));
}