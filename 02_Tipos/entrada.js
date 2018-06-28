// process.stdin.setEncoding('utf8');
// process.stdout.write('¿Qué sugerencias puedes dar? ');

let num
console.log('Numero: ')
var stdin = process.openStdin();
process.stdin.once('data', function(res) {
    num = res   
    process.stdin.pause();
    console.log('El numero es', num.toString())
});


/* let num = []
for (let i = 0; i < 2; i++) {
    console.log('Numero: ')
    var stdin = process.openStdin();
    process.stdin.once('data', function(res) {
        num [i] = res   
        process.stdin.pause();
    });
}
 */