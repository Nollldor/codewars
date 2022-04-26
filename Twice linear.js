function dblLinear(n) {
    let arrayU = [1];

    //cursors
    let x = 0;
    let y = 0;
    //potential values
    let nextX = 0;
    let nextY = 0;

    for(let i = 0 ; i < n; i++){
        //choice next value nextX or nextY
        nextX = 2 * arrayU[x] + 1;
        nextY = 3 * arrayU[y] + 1;
        if(nextX<=nextY){
            //shift cursor if needed
            x++;

            //push minimal value to arrayU
            arrayU.push(nextX);
            if(nextX===nextY){
                y++;
            }
        }else{
            y++;
            arrayU.push(nextY);
        }
    }

    return arrayU[n];
}

console.log(dblLinear(100));


/////////////////////////////////////////
//best practice

function dblLinear2(n) {

    let u = [1], pt2 = 0, pt3 = 0; //two pointer

    for(let i = 1;i<=n;i++){
        u[i] = Math.min(2* u[pt2] + 1, 3*u[pt3] + 1);
        if(u[i] == 2 * u[pt2] + 1) pt2++;
        if(u[i] == 3 * u[pt3] + 1) pt3++;
    }

    return u[n];

}