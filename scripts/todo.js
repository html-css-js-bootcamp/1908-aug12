console.log('first run');
/**
 * document.getElementById('id') -> to get reference of html element by id
 * document.getElementByTagName('tagname') -> to get reference of html element by tag name
 * document.getElementsByClassName('classname')->to get reference of html element by class name
 * document.querySelector('')-> uses css selectors(#id, .class, tagname) to get reference of the required  html element
 */

//textbox is the refernece to <input type="text"> whose id is #todo
var textbox = document.querySelector('#todo');
//btnAdd is the reference to <button> </button> with id #btntodo
var btnAdd = document.querySelector('#btntodo');

//this line function checks if the textbox is empty or not
function checkIfEmpty() {
    if (textbox.value == "" || textbox.value == null) {
        alert('please enter the item to be added');
    }
}

//this line function is used to add and delete todo items
function addItems() {
    // getting the reference of <ul> </ul> with id #items
    let ul = document.querySelector('#items');
    // this line creates a new html element <li></li>
    let li = document.createElement('li');
    // this line creates a new html element <button></button> to be tied to <li>
    let btndelete = document.createElement('button');
    // this line adds content to <button>Delete</button>
    btndelete.textContent = "Delete";
    // this line adds text content to <li></li> as value of textbox
    li.textContent = textbox.value + "          ";
    // appends child item to <ul></ul>
    ul.appendChild(li);
    // this line adds delete button as a sibling to li
    li.append(btndelete);
    // this line clears the value in the textbox
    textbox.value = "";
    // this line deletes the list item which was added
    btndelete.onclick = function (e) {
        ul.removeChild(li);
    }
}
//textbox.onblur=checkIfEmpty;
// binding the event- blur to event listner-checkIfEmpty
textbox.addEventListener('blur', checkIfEmpty);
// binding the event- click to event listner-addItems
btnAdd.addEventListener('click', addItems);

//get reference of the <p></p> with id unsorted
var unsortedpara = document.querySelector('#unsorted');
//get reference of the <p></p> with id sorted
var sortedpara = document.querySelector('#sorted');
//get reference of the <button></button> with id btnsort
var btnSort = document.querySelector('#btnsort');

// IMPLEMENT BUBBLESORT
let swap;// to hold if the swap is going to occur
let unsortedArr = [23, 45, 12, 65, 34, 89, 86, 49];
//display unsorted Array on page
unsortedpara.textContent = '[' + unsortedArr.toString() + ']';
function sort() {
    debugger;
    var sortedArr;
    function bubbleSort(unsorted) {
        let end = unsorted.length - 1;// points to the last element in the unsorted array
        swap = false;
        for (let i = 0; i < end; i++) {
            //checks if left element is greater than right
            if (unsorted[i] > unsorted[i + 1]) {
                swap = true;
                //swapping values
                //storing left element value in a temporary variable
                let temp = unsorted[i];
                //replacing right element's value in the left element to swap
                unsorted[i] = unsorted[i + 1];
                // storing right element's value as left element's value (which is stored in temp)
                unsorted[i + 1] = temp;
                temp = null;
            }
        }
        end--;// to make sure in the next pass it will not include the last sorted items/elements
    }

    do {
        bubbleSort(unsortedArr);
    }
    while (swap);
    sortedArr=unsortedArr;
    return sortedArr;
}

btnSort.onclick=function(){
    sortedpara.textContent='['+sort().toString()+']';
}
