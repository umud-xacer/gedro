getValue();

const SUV_TASHAMASI = `Trapetsional suv tashamasi.`;
const UCHBURCHAK_SUV_TASHAMASI = `Uchburchak suv tashamasi.`;
const PARABOLIK_SUV_TASHAMASI = `Parabolik suv tashamasi`;
const QUVRDAN_OQIB_UTUVCHI_SUV = `Quvurdan oqib utuvchi suv sarfi`;

const SUV_TASHAMASI_FORMIULA = `Q = 1.86 * b * h3/2`;
const UCHBURCHAK_SUV_TASHAMASI_FORMULASI = `Q = 1.4 * h5/2`;
const PARABOLIK_SUV_TASHAMASI_FORMULASI = `Q = 0.576 * h2`;
const QUVRDAN_OQIB_UTUVCHI_SUV_FORMULASI = `Q = n * d2/4 * v`;

sessionStorage.setItem("mathType", "1");
const g = 9.81;
const n = 3.14;

// let input1, input2, input3, input4, input;

function getValue() {
    input1 = document.getElementById("i1").value;
    input2 = document.getElementById("i2").value;
    input3 = document.getElementById("i3").value;
    input4 = document.getElementById("i4").value;
    input = document.getElementById("calnbtn").value;
}

function clickBtn() {
    getValue();
    let methotType = sessionStorage.getItem("mathType");
    let result = 0;
    console.log(+input3, +input2);
    if (methotType === "1") result = calculatePower(+input1, +input2, +input3);
    else if (methotType === "2") result = calculate2(+input2, +input3);
    else if (methotType === "3") result = calculate3(+input2);
    else if (methotType === "4") result = calculate4(+input3);
    else if (methotType === "5") result = calculate5(+input2, +input3);
    console.log(result);
    document.getElementById("result").innerText = result;
}

function setMethodType(type) {
    if (type === 2) {
        document.getElementById("tur").innerText = "Oqim sarfi:";
        document.getElementById("birlik").innerText = "m3/s";
        document.getElementById("iv1").className = "d-none";
        document.getElementById("info").innerText = SUV_TASHAMASI;
        document.getElementById("formula").innerText = SUV_TASHAMASI_FORMIULA;
        document.getElementById("i1").className = "d-none";
        document.getElementById("i2").className = "d-inline form-control ikki";
        document.getElementById("v2").className = "d-inline samp";
        document.getElementById("v2").innerText = "b - suv tashamasini kengligi.";
        document.getElementById("v3").innerText = "h - oqib utuvchi suvning balandligi.";
    } else if (type === 3) {
        document.getElementById("tur").innerText = "Oqim sarfi:";
        document.getElementById("birlik").innerText = "m3/s";
        document.getElementById("iv1").className = "d-none";
        document.getElementById("info").innerText = UCHBURCHAK_SUV_TASHAMASI;
        document.getElementById("formula").innerText = UCHBURCHAK_SUV_TASHAMASI_FORMULASI;
        document.getElementById("i1").className = "d-none";
        document.getElementById("i2").className = "d-none";
        document.getElementById("v2").className = "d-none";
        document.getElementById("v3").innerText = "h - oqib utuvchi suvning balandligi.";
    } else if (type === 4) {
        document.getElementById("tur").innerText = "Oqim sarfi";
        document.getElementById("birlik").innerText = "m3/s";
        document.getElementById("iv1").className = "d-none";
        document.getElementById("info").innerText = PARABOLIK_SUV_TASHAMASI;
        document.getElementById("formula").innerText = PARABOLIK_SUV_TASHAMASI_FORMULASI;
        document.getElementById("i1").className = "d-none";
        document.getElementById("i2").className = "d-none";
        document.getElementById("v2").className = "d-none";
        // document.getElementById("v3").className = "d-none";
        document.getElementById("v3").innerText = "h - oqib utuvchi suvning balandligi.";
    } else if (type === 5) {
        document.getElementById("tur").innerText = "Oqim sarfi";
        document.getElementById("birlik").innerText = "m3/s";
        document.getElementById("info").innerText = QUVRDAN_OQIB_UTUVCHI_SUV;
        document.getElementById("formula").innerText = QUVRDAN_OQIB_UTUVCHI_SUV_FORMULASI;
        document.getElementById("i1").className = "d-none";
        document.getElementById("v1").innerText = "n - 3.14";
        document.getElementById("v2").innerText = "d- quvur diametri";
        document.getElementById("v3").innerText = "v - suvning tezligi m/s";
        document.getElementById("v1").className = "d-inline samp";
    }

    sessionStorage.setItem("mathType", type);
}

const calculatePower = (n, Q, H) => Q * H * g * n;

// ikkinchi masala kodi
const calculate2 = (b, h) => 1.86 * b * Math.pow(h, 1.5);

// ikkinchi qayta
const calculate3 = (h) => 1.4 * Math.pow(h, 2.5);

//   uchinchi masala kodi
const calculate4 = (h) => 0.576 * Math.pow(h, 2);

//   to'rtinchi masala
const calculate5 = (d, v) => n * Math.pow(d, 0.5) * v;

// var animButton = document.getElementById('animButton');
// animButton.addEventListener('click', function() {
//     animButton.classList.add('animate');
//   });