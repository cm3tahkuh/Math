function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' 
  });
}

function replacedFunction(func) {
  let replaceVar = func
    .replace(/sin/g, "Math.sin")
    .replace(/ln/g, "Math.log")
    .replace(/cos/g, "Math.cos")
    .replace(/tg/g, "Math.tan")
    .replace(/=0/g, "")
    .replace(/(\d+)(x)/g, "$1*$2")
    .replace(/\^/g, "**")
    .replace(/sqrt/g, "Math.sqrt")
    .replace(/\s*([\+\-\*\/\^])\s*/g, "$1")
    .replace(/(\d+)([a-zA-Z])/g, "$1*$2");

  return replaceVar;
}

function solveSecantMethod() {
  document.getElementById("result").innerHTML = "";


  const waitMessage = document.createElement("div");
  waitMessage.innerHTML = "<h3>Подождите, выполняется расчет...</h3>";
  document.getElementById("result").appendChild(waitMessage);


  const sound = document.getElementById("soundEffect");
  sound.play();

  sound.onended = function () {

    waitMessage.remove();


    let a = new Decimal(document.getElementById("a").value);
    let b = new Decimal(document.getElementById("b").value);
    let c = b;
    const epsilon = new Decimal(document.getElementById("epsilon").value);

    const goatFxOrigin = document
      .getElementById("function")
      .value.replace(/ln/g, "log");
    const goatFx = replacedFunction(document.getElementById("function").value);

    const derivativeFx = replacedFunction(
      math.derivative(goatFx, "x").toString()
    );

    const derivativeFx2 = replacedFunction(
      math.derivative(derivativeFx, "x").toString()
    );

    const goatFx_a1 = new Decimal(eval(goatFx.replace(/x/g, a.toString())));
    const goatFx_b1 = new Decimal(eval(goatFx.replace(/x/g, b.toString())));

    const Fx_a2 = new Decimal(eval(derivativeFx.replace(/x/g, a.toString())));
    const Fx_b2 = new Decimal(eval(derivativeFx.replace(/x/g, b.toString())));

    const LastFx_a3 = new Decimal(
      eval(derivativeFx2.replace(/x/g, a.toString()))
    );
    const LastFx_b3 = new Decimal(
      eval(derivativeFx2.replace(/x/g, b.toString()))
    );

    const m = Decimal.min(Fx_a2.abs(), Fx_b2.abs());

    document.getElementById("result").innerHTML += `
            <h2 class="wow fadeInUp">Результаты</h2>
    <div class="functions__block wow fadeInDown">
    <p>f(x)=${goatFxOrigin}</p>
    <p>f'(x)=$${derivativeFx}</p>
    <p>f''(x)=$${derivativeFx2}</p>
        <p>m=${m}</p>
        <p>eps=${epsilon}</p>
    </div>
    <table class="main__table  wow fadeInUp">
	<tbody>
		<tr class="wow fadeInLeft">
			<td></td>
			<td></td>
			<td>f(x)</td>
			<td>f'(x)</td>
			<td>f''(x)</td>
		</tr>
		<tr class="wow fadeInRight">
			<td>a=</td>
			<td>${a}</td>
			<td>${goatFx_a1}</td>
			<td>${Fx_a2}</td>
			<td>${LastFx_a3}</td>
		</tr>
		<tr class="wow fadeInLeft">
			<td>b=</td>
			<td>${b}</td>
			<td>${goatFx_b1}</td>
			<td>${Fx_b2}</td>
			<td>${LastFx_b3}</td>
		</tr>
		<tr class="wow fadeInRight">
			<td>c=</td>
			<td>${c}</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>`;

    let iteration = 1;
    let solution;
    let test;

    do {
      const goatFx_a1 = new Decimal(eval(goatFx.replace(/x/g, a.toString())));
      const goatFx_b1 = new Decimal(eval(goatFx.replace(/x/g, b.toString())));

      if (goatFx_b1.minus(goatFx_a1).equals(0)) {
        console.error("Ошибка: деление на ноль. Проверьте исходные данные.");
        break;
      }

      solution = b.minus(
        goatFx_b1.times(b.minus(a)).dividedBy(goatFx_b1.minus(goatFx_a1))
      );

      test = Decimal.abs(
        new Decimal(eval(goatFx.replace(/x/g, solution.toString()))).dividedBy(m)
      );

      document.getElementById(
        "result"
      ).innerHTML += `<div class="wow fadeInRight">x${iteration}=  ${solution.toString()}, Проверка: ${test.toString()}, </div>`;

      a = b;
      b = solution;

      iteration++;
    } while (test.greaterThan(epsilon));

    if (test.lessThanOrEqualTo(epsilon)) {
      document.getElementById(
        "result"
      ).innerHTML += `<div class="wow fadeInLeft">Решение найдено: x ≈ ${solution} < ${epsilon}, после ${
        iteration - 1
      } итераций</div>`;
    } else {
      document.getElementById("result").innerHTML =
        "Решение не найдено: метод не сошелся.";
    }


    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };


}

new WOW().init();