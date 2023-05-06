var value = document.querySelector('#counter');

function increment()
{
    let temp = parseInt(value.innerHTML);
    temp = temp+1;
    value.innerHTML = temp;
}

function decrement()
{
    let temp = parseInt(value.innerHTML);
    temp = temp-1;
    value.innerHTML = temp;
}