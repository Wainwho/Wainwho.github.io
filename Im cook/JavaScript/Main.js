function Main() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
}

let srt = '9921';

console.log( srt.at(0) ) ;
console.log( srt.length );

let first = 'COOKIES!!!!!';
let second = 'COOK';

if(first.at(0) === second.at(0)) {
    console.log('Да они равны');
} else {
    console.log('Они не равны...');
}
let a = ('b' + 'a' + +'a' + 'a').toLowerCase();
console.log(a);


let b = 'asdadsad';

console.log( b.substr(7,1)) ;
