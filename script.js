const numbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.op');
const typing = document.querySelector('.typing');
const topscreen = document.querySelector('.top');
const del = document.querySelector('.del')
const eq = document.querySelector('.eq')
const reset = document.querySelector('.reset')

let sign;
let done = false;

function displayNumbers() {
  numbers.forEach((number) => {
    number.addEventListener('click' , () => {
      if (typing.textContent.length <= 12) {
        if (done) {
          typing.textContent = ""
          typing.textContent += number.textContent
          done = false;
        } else {
          typing.textContent += number.textContent
        }
      }
    })
  })
}

function clickOperations() {
  operations.forEach((operation) => {
    operation.addEventListener('click', () => {
      switch (sign) {
        case('+') : {
          topscreen.textContent = +(topscreen.textContent) + +(typing.textContent)
          break;
        } case('-') : {
          topscreen.textContent = +(topscreen.textContent) - +(typing.textContent)
          break;
        } case('x') : {
          topscreen.textContent = +(topscreen.textContent) * +(typing.textContent)
          break;
        } case('/') : {
          topscreen.textContent = +(topscreen.textContent) / +(typing.textContent)
          break;
        } case('%') : {
          topscreen.textContent = +(topscreen.textContent) / 100 * (typing.textContent)
          break;
        }
      }
      if (!sign) {
        topscreen.textContent = typing.textContent
        typing.textContent = ""
      }
      sign = operation.textContent
      typing.textContent = ""
    })
  })
}

function deleteNum() {
  del.addEventListener('click', () => {
    typing.textContent = typing.textContent.slice(0, -1);
  })
}

function equal() {
  eq.addEventListener('click', () => {
    switch (sign) {
      case('+') : {
        typing.textContent = +(topscreen.textContent) + +(typing.textContent)
        break;
      } case('-') : {
        typing.textContent = +(topscreen.textContent) - +(typing.textContent)
        break;
      } case('x') : {
        typing.textContent = +(topscreen.textContent) * +(typing.textContent)
        break;
      } case('/') : {
        typing.textContent = +(topscreen.textContent) / +(typing.textContent)
        break;
      } case('%') : {
        typing.textContent = +(topscreen.textContent) / 100 * (typing.textContent)
        break;
      }
    }
    topscreen.textContent = '';
    done = true;
  })
}

function resetCalc() {
  reset.addEventListener('click', () => {
    topscreen.textContent = ''
    typing.textContent = ''
    sign = undefined;
    done = false;
  })
}

resetCalc()
displayNumbers()
clickOperations()
deleteNum()
equal()
