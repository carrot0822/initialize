function fa (n){
    if(n==1){
        return 1
    }
    return n * (n-1) + fa(n-1)
}

console.log(fa(3))