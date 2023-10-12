// arrays 
//  []
// arrays can hold any data typs and can can unlimited indexes
// arrays always begin at index 

let colors = ["red", "green", "yellow", "blue"]
// console.log(colors)
let cars = ["bmw","Nissan","Honda","porsche",colors]
// console.log(colors[3])

//for (let number = 0; number < cars.length; number++)
    console.log(cars[4][3])


    // exercise:even odd and prime

    // for(let i=0;i<=20;i++)
    // console.log(i)

    // example:odd
    for(let counter=1;counter<=20;counter++){
        if(counter %2==1){
            console.log(counter +"odd")
        }
        if (counter %2==0){
            console.log(counter +"even")
        }
    }
    // for(let counter=0;counter<=20;counter++){
    //     if{
    //         console.log(counter +"prime")
    //     }
    //     }

    // 