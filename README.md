# htmlToGmail

eazy convert html to Gmail text

1)***simply add below code on the console in gmail tab ⏎***<br>
          
          
                                                            
    document.body.appendChild((()=>{let t=document.createElement("script");return t.src="https://cdn.jsdelivr.net/gh/Kosala167/htmlToGmail/html2mail.min.js",t})());



2)***then click top left button that named as mailTexter****<br>
3)***then add html content in the box appeared after click above button***<br>
4)***see magic?<br>
          
          
          
          
          
5)***************if failed above code----then try below code ⏎***<br>
          
          
          
          
    (()=>{var e=new XMLHttpRequest;e.open("GET","https://cdn.jsdelivr.net/gh/Kosala167/htmlToGmail/html2mail.min.js",!0),e.send(),e.onreadystatechange=function(){4==e.readyState&&200==e.status&&document.body.appendChild((()=>{let t=document.createElement("script");return t.innerHTML=e.responseText,t})())}})();


