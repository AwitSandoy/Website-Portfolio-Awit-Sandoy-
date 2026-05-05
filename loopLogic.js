function runForLoop() {
    const count = parseInt(document.getElementById('forCount').value);
    const text = document.getElementById('forText').value;
    const output = document.getElementById('forOutput');
    output.innerHTML = "";

    if (isNaN(count) || count <= 0) return;

    for (let i = 1; i <= count; i++) {
        output.innerHTML += i + ". " + text + "<br>";
    }
}

function runWhileLoop() {
    const count = parseInt(document.getElementById('whileCount').value);
    const text = document.getElementById('whileText').value;
    const output = document.getElementById('whileOutput');
    output.innerHTML = "";

    if (isNaN(count) || count <= 0) return;

    let i = 1;
    while (i <= count) {
        output.innerHTML += i + ". " + text + "<br>";
        i++;
    }
}

function runDoWhileLoop() {
    const count = parseInt(document.getElementById('doWhileCount').value);
    const text = document.getElementById('doWhileText').value;
    const output = document.getElementById('doWhileOutput');
    output.innerHTML = "";

    if (isNaN(count) || count <= 0) return;

    let i = 1;
    do {
        output.innerHTML += i + ". " + text + "<br>";
        i++;
    } while (i <= count);
}

function clearOutput(id) {
    document.getElementById(id).innerHTML = "";
}