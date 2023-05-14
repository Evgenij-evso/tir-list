let but__add = document.querySelector('.but__add')
let SClass = document.querySelector('.SClass')
let pred__view = document.querySelector('.pred__view')
let file = document.getElementById('.file')


let display = document.querySelector('.display__select')
let cont__img = document.querySelector('.cont__img')

let count = 0;

let catalogCount = 0
function listNewImg(value,valueRow){
    for(let i1 = 0; i1 < valueRow;i1++){
        const div = document.createElement('div')
    
        div.className = 'cont__sector'

        cont__img.appendChild(div)
        for(let i = 0; i < value;i++){
            let $add__sector = document.querySelectorAll('.cont__sector')
            const img = document.createElement('img')
    
            img.className = 'img__part'
            img.src = `img/animeFace/G${catalogCount}.jpeg`
            catalogCount += 1
            $add__sector[i1].appendChild(img)
        }
    }
}
listNewImg(7,13)


function newImg (){
    display.style.display = 'flex'

    let $img__sector = document.querySelectorAll('.img__part')

    for (var i = 0; i < $img__sector.length; i++) {
        var sourceImg
        $($img__sector[i]).click(function(e){
            console.log(sourceImg)
            const img = document.createElement("img");

            sourceImg =  $(e.currentTarget).attr('src');
            img.className = `add__img count_images`
            img.src = sourceImg
            
            SClass.appendChild(img)

            display.style.display = 'none'
            img = ''
            sourceImg = ''
        })
    }
}


// let $img__remove = document.querySelectorAll('.count_images')

// for(let i = 0; i < $img__remove.length; i++){
//     $($img__remove[i]).click(function(){
//         $img__remove[i].removeChild
//     })
// }

$(`.add__${count}`).mouseenter(function(){
    anime({
        targets: `.add__${count}`,
        scale: 1.1,
        duration: 200
    })
}).mouseleave(function(){
    anime({
        targets: `.add__${count}`,
        scale: 1,
        duration: 200
    })
})
$('.but__add').click(newImg)

$(file).click(function(){
    var file__name = $(file).val()
    pred__view.src = file__name

    alert($(file).val());
})