let a = prompt('Введите стоимость товара')
let b = prompt('Введите кол-во денег')

if(a>b){
    let x = a-b
    alert('Для покупки не хватает ' + x + "р.")
}
else if(a<b){
    let x = b-a
    alert('Покупка совершена. Сдача ' + x + 'р.')
}
else{
    alert('Покупка совершена')
}