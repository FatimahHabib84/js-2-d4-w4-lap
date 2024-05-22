// • باستعمال for loop قم بطباعة الاعداد الزوجيه الموجودة في نطاق من 25- الى 0.
for(i=0 ; i<=25 ; i+=2){
    console.log(i)
}

// • باستعمال for loop  احسب تربيع الاعداد من 1 - 10.
for(i=0 ; i<=10 ; i++){
    console.log(Math.pow(i,2))
}

// • باستعمال loop قم بطباعة الاعداد الفردية من 1 - 20 .
for( i=1 ; i<=20 ; i+=2 ){
    console.log(i)
}

// Fibonacci sequence:
fibonacciSequence = 0
temp=1
for(i = 0 ; i<=10 ; i++){
    temp = fibonacciSequence
    fibonacciSequence += i
    fibonacciSequence=temp
    console.log(`${fibonacciSequence} , `)
}

// Multiplication table
for(var i=0 ; i<=3 ; i++){
    for(var j=0; j<=3 ; j++){
        console.log(i*j)
    }
}