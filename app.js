
let tdTag = document.querySelectorAll('td');
let ekran = document.querySelector(".ekran")

tdTag.forEach(function(td){
    td.addEventListener('click', function(event){
       
       let mark = event.target.innerText;
       if (mark== "C") {
          ekran.value = ""
       } else if(mark =="=") {
       ekran.value=(eval(ekran.value));
       }else {
         ekran.value +=mark;
       }

    });
});