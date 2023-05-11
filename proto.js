let Submit = () => {
    let n1 = Number(document.getElementById("firstNumber").value);
    let n2 = Number(document.getElementById("lastNumber").value);
    let n3 = Number(document.getElementById("thirdNumber").value);
    let n4 = Number(document.getElementById("multiplyBY").value);

    const rahul = (num) => num * n4;

    let arr = [
        { value: n1 },
        { value: n2 },
        { value: n3 }
    ];

    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let output = rahul(arr[i].value);
        let resultElement = document.createElement("p");
        resultElement.textContent = output;
        resultContainer.appendChild(resultElement);
    }
}
