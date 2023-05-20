let btns = document.getElementsByClassName('buttons');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {

        let inputBox = document.getElementById('input-values');

        let inputContent = inputBox.value;

        inputContent += event.target.textContent;

        inputBox.value = inputContent;
    })
}
function Answer() {
    let answer = document.getElementById('input-values');
    answer.value = eval(document.getElementById('input-values').value);
}
function Clear() {
    document.getElementById('input-values').value = "";
}