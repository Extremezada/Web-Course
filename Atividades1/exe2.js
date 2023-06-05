function triangulos(l1, l2 ,l3){
    
    if(l1 == l2 && l2 == l3){
        console.log("Equilatero")
    }
    else if((l1 == l2 && l2 != l3) || 
            (l2 == l3 && l1 != l3) ||
            (l1 == l3 && l2 != l3)){
        console.log("Isósceles")
    }
    else{
        console.log("Escaleno")
    }
}

triangulos(1,3,1)