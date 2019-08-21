console.log('first run');
/**
 * document.getElementById('id') -> to get reference of html element by id
 * document.getElementByTagName('tagname') -> to get reference of html element by tag name
 * document.getElementsByClassName('classname')->to get reference of html element by class name
 * document.querySelector('')-> uses css selectors(#id, .class, tagname) to get reference of the required  html element
 */
var textbox=document.querySelector('#todo');
var btnAdd=document.querySelector('#btntodo');
function checkIfEmpty(){
    debugger;
    if(textbox.value==""||textbox.value==null)
    {
        alert('please enter the item to be added');
    }
}
function addItems(){
    let ul=document.querySelector('#items');
    let li=document.createElement('li');
    let btndelete = document.createElement('button');
    btndelete.textContent="Delete";
    li.textContent=textbox.value + "          ";
    ul.appendChild(li);
    li.append(btndelete);
    textbox.value="";    

    btndelete.onclick=function(e){
        ul.removeChild(li);
    }
}
//textbox.onblur=checkIfEmpty;
textbox.addEventListener('blur',checkIfEmpty);
btnAdd.addEventListener('click',addItems);
