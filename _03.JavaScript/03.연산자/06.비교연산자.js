/*
    (대소관계) 비교연산자 Relational Operator
    >(large then)  <(small then)  >=  <=  ==  ===

    일치 연산자 (잘 안쓰는 용어)
    = : A=B         - B를 A에 대입(할당)한다.
    == : A==B       - 일치한다는 의미 (타입 구분없이 비교)
    === : A==B      - 일치한다는 의미 (타입까지 구분하는 엄격한 비교)

    != : A!=B         - A와 B가 같지 않을 때 true 반환 (타입 구분없이 비교)
    != : A!=B         - A와 B의 값과 타입이 모두 같을 때를 제외하고는 모두 true 반환
*/

console.log(`5 > 7 ? ${5 > 7}`);    // 5는 7보다 큰가?
console.log(`5 < 7 ? ${5 < 7}`);    // 5는 7보다 직은가?
console.log(`5 < 5 ? ${5 < 5}`);    // 5는 5보다 직은가?
console.log(`5 <= 5 ? ${5 <= 5}`);  // 5는 5보다 직거나 같은가?

// console.log(`5 = 5 ? ${5 = 5}`);  // 대입연산자로 일치연산자의 의미를 가지지 않으며 오류발생
console.log(`5 == '5' ? ${5 == '5'}`);  // 5는 '5'와 같은가? - 문자열과 숫자열의 구분 없이 일치여부
console.log(`5 === '5' ? ${5 === '5'}`);  // 5는 '5'와 같은가? - 문자열과 숫자열을 구분하여 일치여부
console.log(`'5' === '5' ? ${'5' === '5'}`);  // 5는 '5'와 같은가? - 문자열이나 숫자열을 구분하여 일치여부


console.log(`'강남구' != '서초구' ? ${'강남구' != '서초구'}`);  // 같지 않을 때 true
console.log(`'123' != 123 ? ${'123' != 123}`);  // 타입 상관 없이 같지 않을 때 true
console.log(`'123' !== 123 ? ${'123' !== 123}`);  // 타입 포함 같지 않을 때 true
console.log(`'123' !== 123 ? ${'123' !== '123'}`);  // 타입 포함 같지 않을 때 true



const obj1 = {name:'js'};
const obj2 = {name:'js'};

console.log(`obj1 == obj2 ? ${obj1 == obj2}`);  //메모리 주소가 다르기 때문에 같다고 판단하지 않음 false
console.log(`obj1.name == obj2.name ? ${obj1.name == obj2.name}`);  //속성값이 동일하기 때문에 true

let obj3 = obj2;

console.log(`obj2 == obj3 ? ${obj2 == obj3}`);  //대입하면 메모리 주소가 같기 때문에 true