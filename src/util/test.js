for(let i =0; i<10;i++){
    console.log(i)
     console.log(setTimeout(()=>{
         console.log(i,'定时器内的i')
        i++
    },1000)) 
}