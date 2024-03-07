function calculate(type, value) {
    type === 'action'
        if(value === 'c'){
            document.getElementById('result').value = ''
        }
        
        if(value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
            document.getElementById('result').value += value
        }
        
        if(value === '='){
        var fieldValue = eval(document.getElementById('result').value)
       document.getElementById('result').value = fieldValue
        }
                    
        type === 'value'
            ? document.getElementById('result').value += value
            : null;
}

// function calculate(type, value){
//     if(type === 'action'){
//         if(value === 'c'){
//             document.getElementById('result').value = ''
//         }

//         if(value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
//             document.getElementById('result').value += value
//         }

//         if(value === '='){
//             var fieldValue = eval(document.getElementById('result').value)
//             document.getElementById('result').value = fieldValue
//         }

//     }else if(type === 'value'){
//         document.getElementById('result').value += value
//     }

// }

// function calculate(type, value) {
//     type === 'action'
//         ? value === 'c'
//             ? document.getElementById('result').value = ''
//             : value === '+' || value === '-' || value === '*' || value === '/' || value === '.'
//                 ? document.getElementById('result').value += value
//                 : value === '='
//                     ? document.getElementById('result').value = eval(document.getElementById('result').value)
//                     : null

//         : type === 'value'
//             ? document.getElementById('result').value += value
//             : null;
// }
