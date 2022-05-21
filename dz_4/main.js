let remove = document.getElementById('minus')
let add = document.getElementById('plus')
let int = document.getElementById('number')
let integer = 0;

remove.addEventListener('click', function () {
integer -= 1;
int.innerHTML = integer;
} )
add.addEventListener('click', function () {
integer += 1;
int.innerHTML = integer;
} )

