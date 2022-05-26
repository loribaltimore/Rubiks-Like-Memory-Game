let buttons = document.querySelectorAll('span');
let button = document.querySelector('#button');
let h1 = document.querySelector('h1');

let yellow = 'rgb(232, 240, 5)'
let green = 'rgb(5, 245, 25)'
let orange = 'rgb(252, 148, 3)'
let pink = 'rgb(245, 0, 184)'
let black = 'rgb(0, 0, 0)'
let white = 'rgb(255, 255, 255)'
let blue = 'rgb(66, 135, 245)'
let red = 'rgb(245, 5, 5)'
let purple = 'rgb(204, 2, 245)'

let colorStopper = [];
let goalColors = [];
let colorKey = {
    1: blue,
    2: red,
    3: green,
    4: purple,
    5: black,
    6: white,
    7: orange,
    8: pink,
    9: yellow,
}
let goalObj = {};
let i = 0;
let turnCounter = 0;
let answer = false;

for (let el of buttons) {
    window.addEventListener('load', function () {        
        let roll = Math.floor(Math.random() * 9 + 1);
        goalColors.push(roll);
        i++;
        goalObj[i] = colorKey[roll];
        console.log(goalObj);
        switch (roll) {
            case 1: return el.style.backgroundColor = blue;
            case 2: return el.style.backgroundColor = red;
            case 3: return el.style.backgroundColor = green;
            case 4: return el.style.backgroundColor = purple;
            case 5: return el.style.backgroundColor = black;
            case 6: return el.style.backgroundColor = white
            case 7: return el.style.backgroundColor = orange;
            case 8: return el.style.backgroundColor = pink;
            case 9: return el.style.backgroundColor = yellow;
        };
    })
};

let random = function () {
    for (i = 0; i < buttons.length+ 1; i++) {
        if (i <= 8) {
            let roll = Math.floor(Math.random() * 9 + 1);
            switch (roll) {
                case 1: color = blue;
                    break;
                case 2: color = red;
                    break
                case 3: color = green;
                    break
                case 4: color = purple;
                    break
                case 5: color = black;
                    break;
                case 6: color = white
                    break;
                case 7: color = orange;
                    break;
                case 8: color = pink;
                    break;
                case 9: color = yellow;
                    break;
            }
            buttons[i].style.backgroundColor = color;
            if (colorStopper.indexOf(i + 1) !== -1) {
                buttons[i].style.backgroundColor = goalObj[i + 1];
            }
            if (colorStopper.length === 9) {
                h1.innerText = 'You Win!';
            }
        }
        else {
            turnCounter++;
            console.log(turnCounter);
            if (colorStopper.length > 2 && colorStopper.length <= 4) {
                setTimeout(random, 2000);
            }
            else if (colorStopper.length > 4 && colorStopper.length <= 6) {
                setTimeout(random, 1500);
            }
            else if (colorStopper.length > 6) {
                setTimeout(random, 1000);
            }
            else {
                setTimeout(random, 3000);
            }
        }
    }
};

button.addEventListener('click', random);

for (let el of buttons) {
    el.addEventListener('click', function (event) {
        let comparison = function () {
            if (turnCounter > 0) {
                if (goalObj[el.id] === el.style.backgroundColor) {
                    let answer = true;
                    colorStopper.push(parseInt(iD));
                    console.log(colorStopper);
                    console.log(answer);
                    return answer;
                }
                else {
                    let answer = false
                    console.log(answer);
                    return answer;
                }
            } 
        }
        
        let iD = el.id;
        console.log(el.style.backgroundColor);
        console.log(iD);
        comparison();

    })
};

