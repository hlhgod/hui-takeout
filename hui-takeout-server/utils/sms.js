function randcode(length){
    
    let codeRange=['0','1','2','3','4','5','6','7','8','9'];
    let result='';
    for(let i=1;i<=length;i++){
        result+=codeRange[Math.ceil(Math.random()*9)];
    }
    return result;
    
}

exports.randcode = randcode;

function sendCode(phone){
    return '1234';
}

exports.sendCode = sendCode;