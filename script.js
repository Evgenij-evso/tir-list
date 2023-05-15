let SClass = document.querySelectorAll('.con__waif')
let pred__view = document.querySelector('.pred__view')
let file = document.getElementById('.file')

let display = document.querySelector('.display__select')
let cont__img = document.querySelector('.cont__img')

let catalogCount = 0

let but__count = 0
function listNewImg(value,valueRow){ // Создание колекции изображений 
    for(let i1 = 0; i1 < valueRow;i1++){
        const div = document.createElement('div') // Создание элемента div
    
        div.className = 'cont__sector' // Присваевание класса cont__sector

        cont__img.appendChild(div) // добавление в родительский элемент cont__img
        for(let i = 0; i < value;i++){ // мне лень описывать 
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
var bugScore = 0

function newImg (){ // Создание изображение в классе S,A,B,C,D,E
    display.style.display = 'flex'

    let $img__sector = document.querySelectorAll('.img__part')
    for (var i = 0; i < $img__sector.length; i++) {
        $($img__sector[i]).click(function(e){
            bugScore += 1
            if(bugScore == 1){
                // console.log(i)

                const img = document.createElement("img");
    
                img.className = `add__img count_images`
                img.src = $(e.currentTarget).attr('src');
                
                SClass[but__count].appendChild(img)
    
                display.style.display = 'none'

                remove()
            }
            
        })
    }
    bugScore = 0
}


function remove(){  
    let $img__remove = document.querySelectorAll('.count_images')

    for(let i = 0; i < $img__remove.length; i++){
        $($img__remove[i]).click(function(){

            this.style.display = 'none'
            // this.parentNode.removeChild(this);
        })
    }
}

let but__add = document.querySelectorAll('.but__add')
for (var i = 0; i < but__add.length; i++) {
    $(but__add[i]).click(function(){  
        var name = $(this).attr('id')
        if (name == 0){
            but__count = 0
        }
        else if(name == 1){
            but__count = 1
        }
        else if(name == 2){
            but__count = 2
        }
        else if(name == 3){
            but__count = 3
        }
        else if(name == 4){
            but__count = 4
        }
        else if(name == 5){
            but__count = 5
        }
        newImg()
    })
}

// $(file).click(function(){
//     var file__name = $(file).val()
//     pred__view.src = file__name

//     alert($(file).val());
// })