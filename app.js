// ЗАДАНИЕ - 1

var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']

var obj = {}

// var obj = {
//     name: "Quasar",
//     age: 19
// }

// console.log(tags[2])

// for (let i = 0; i < tags.length; i++) {
//     console.log(tags[i])
// }

// for (var item in obj) {
//     console.log(item)
// }

// for (var item of tags) {
//     console.log(item)
// }

// for (const item of tags) {
    // obj[item]
    //     ? obj[item]++
    //     : obj[item] = 1

    // if (obj[item]) {
    //     obj[item]++
    // }
    // else {
    //     obj[item] = 1
    // }

    // obj[item] = obj[item] +1 || 1
// }

// console.log(obj)

// ЗАДАНИЕ - 2

var starbucks = {
    coffee: {
        americano: 'Идеальный кофе разбавленный чистой, отфильтрованной водой',
        latte: 'Кофе с добавлением большого количества горячего молока и молочной пены ',
        cappuccino: 'Кофе с добавлением небольшого количества молока , и большим количеством молочной пены',
        espresso: 'Чистый кофе',
        macchiato: 'Двойная порция кофе с добавлением молочной пены'
    },
    tea: {
        green: 'Листья китайского зеленого чая с горячей водой',  //Зеленый чай
        chamomile: 'Травяной напиток, который приготавливается на основе сушеных цветков ромашки',  //Ромашковый чай
        ginger: 'Напиток, приготовленный на основе корня имбиря с добавлением мёда (по желанию)',  //Имбирный чай
        mint: 'Листья зеленого чая с добалением мяты и горячей воды',  //Мятный чай
        hibiscus: 'Tравяной чайный напиток изготавливаемый из сушёных чашечек цветков розеллы, или суданской розы'  //Гибискучовый чай
    }
}

var menu = prompt('Введите что вы хотите: tea, coffee')

if (menu in starbucks) {
    alert('Данный напиток есть')
    var choose = prompt('Введите вариант напитка...')

    if (menu === 'tea' && choose in starbucks.tea) {
        alert(`Описание данного чая: ${starbucks.tea[choose]}, Ваш заказ оформлен!`)
    }
    else if (menu === 'coffee' && choose in starbucks.coffee) {
        alert(`Описание данного коффе: ${starbucks.coffee[choose]}, Ваш заказ оформлен!`)
    }
    else {
        alert('Данного варианта напитка нет')
    }
}
else {
    alert('Данного напитка в меню нет')
}
