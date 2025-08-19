
        function calcule() {
            const kmLitroInput = document.getElementById("kmLitro");
            const precoGasolinaInput = document.getElementById("precoGasolina");
            const kmTotalInput = document.getElementById("kmTotal");

            const kmLitro = kmLitroInput.value;
            const precoGasolina = precoGasolinaInput.value;
            const kmTotal = kmTotalInput.value;

            const resultado1 = document.getElementById("resultado1");
            const resultado2 = document.getElementById("resultado2");
            const resultado3 = document.getElementById("resultado3");
            const linha1 = document.getElementById("linha1");
            const linha2 = document.getElementById("linha2");
            const alerta = document.getElementById("alerta");

            if (kmLitro === "" || precoGasolina === "" || kmTotal === "") {
                alerta.innerHTML = "Preencha todos os campos";
                alerta.style.color = "white";
                alerta.style.backgroundColor = "black";
                alerta.style.padding = "15px";
                return;
            }

            alerta.innerHTML = "";
            alerta.style.padding = "0";
            alerta.style.backgroundColor = "transparent";

            const calculoLitroTotal = parseFloat(kmTotal) / parseFloat(kmLitro);
            const calculoGasolinaTotal = calculoLitroTotal * parseFloat(precoGasolina);

            resultado1.innerHTML = `${kmLitro} Km/L`;
            resultado2.innerHTML = `R$ ${parseFloat(precoGasolina).toFixed(2)}`;
            resultado3.innerHTML = `${kmTotal} Km`;
            
            linha1.innerHTML = `${calculoLitroTotal.toFixed(2)} Litros`;
            linha2.innerHTML = `R$ ${calculoGasolinaTotal.toFixed(2)}`;

            kmLitroInput.value = "";
            precoGasolinaInput.value = "";
            kmTotalInput.value = "";
        }
