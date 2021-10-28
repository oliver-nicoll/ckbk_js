// const players = ['Lincoln', 'Ezra', 'Nicoll', 'Nicholas', 'baby_boy_one', 'baby_boy_two', 'baby_girl_one', 'baby_girl_two'];

// const person = {
//     name: 'Nicoll O',
//     age: 25
// };

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // console.log(e)
    //check if they had the shift key down & if they are checking it
    let inBetween = false;

    if(e.shiftkey && this.checked) {
        //loop over evvery single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click',handleCheck));