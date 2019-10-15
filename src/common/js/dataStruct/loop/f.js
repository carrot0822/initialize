function fa (n){
    if(n==1){
        return 1
    }
    return n * fa(n-1)
}

console.log(fa(16))