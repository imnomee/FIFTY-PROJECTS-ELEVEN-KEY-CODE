const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    console.log(e);
    const key = e.key;
    const code = e.code;
    const keyCode = e.keyCode;
    console.log(key, code, keyCode);
    insert.innerHTML = `<div class="key">
                ${key === ' ' ? code : key}
                <small>event.key</small>
            </div>
            <div class="key">
                ${keyCode}
                <small>event.keyCode</small>
            </div>
            <div class="key">
                ${code}
                <small>event.code</small>
            </div>`;
});
