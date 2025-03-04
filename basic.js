const basket1Count = document.querySelector('.basket-1 span')
const basket2Count = document.querySelector('.basket-2 span')
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const totalApples = 10;
let secondBasketApplesCount = 0
let firstBasketApplesCount = totalApples - secondBasketApplesCount

basket1Count.innerText = firstBasketApplesCount
basket2Count.innerText = secondBasketApplesCount
rightArrow.addEventListener('click', () => {
    if (firstBasketApplesCount > 0) {
        firstBasketApplesCount--;
        basket1Count.innerText = firstBasketApplesCount
        secondBasketApplesCount++;
        basket2Count.innerText = secondBasketApplesCount
    }
})
leftArrow.addEventListener('click', () => {
    if (secondBasketApplesCount > 0) {
        firstBasketApplesCount++;
        basket1Count.innerText = firstBasketApplesCount
        secondBasketApplesCount--;
        basket2Count.innerText = secondBasketApplesCount
    }
})