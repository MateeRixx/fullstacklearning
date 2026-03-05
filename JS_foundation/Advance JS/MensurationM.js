

export  default function TriangleArea(a ,b ,c){
    let semiperimeter=(a+b+c)/2;
    let area=(semiperimeter*(semiperimeter-a)*(semiperimeter-b)*(semiperimeter-c))**0.5;
    return area;

}

