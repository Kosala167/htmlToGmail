(() => {
    if (document.getElementById('mmmmtextgetter123') === null) {
        let textGetter = document.createElement("div");
        textGetter.id = "mmmmtextgetter123";
        textGetter.style.cssText = "width:300px;min-height:500px;display:none;position:fixed;z-index:100000;top:calc(50vh - 250px);left:calc(50vw - 150px);background-color:#fff;border:1px solid #757575;";
        document.body.appendChild(textGetter);
        document.getElementById('mmmmtextgetter123').innerHTML = '<textarea id="inpMailTextArea12532" style="width:270px;margin-left:15px;margin-top:10px;" name="w3review" rows="23">' +
            '</textarea>' +
            '<button type="button" id="setTextBtnjdajdij20423950293" style="padding:15px,10px;background-color:#0e74ab;font-size:15px;color:#fff;margin-left:90px;">' +
            'Click To Add</button>';
        document.getElementById('setTextBtnjdajdij20423950293').onclick = () => {
            let inpElement = document.getElementById('inpMailTextArea12532');
            if (inpElement.value.replace(/\s/g, '') !== '') {
                let main = document.querySelector('.editable');
                main.textContent = '';
                main.innerHTML = inpElement.value;
                document.getElementById('mmmmtextgetter123').style.display = "none";
            }
        };
    }
    if (document.getElementById('qwegvercsfmailbtn1264') === null) {
        let btn = document.createElement('button');
        btn.id = 'qwegvercsfmailbtn1264';
        btn.innerText = 'Mail Texter';
        btn.style.cssText = 'padding:15px,10px;background-color:#eeffb8;font-size:15px;z-index:100000;position:fixed;top:0;left:0;';
        btn.onclick = () => {
            let textGetter = document.getElementById('mmmmtextgetter123');
            if (textGetter.style.display === 'initial') {
                textGetter.style.display = 'none';
            } else {
                textGetter.style.display = 'initial';
            }
        };
        document.body.appendChild(btn);
    }
})();
