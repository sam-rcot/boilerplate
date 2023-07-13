const generatePassword = () => {
    let password = ""
    const loop = (chars, passwordLength) => {
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars[randomNumber];
        }
        
    }
    const letters = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        loop(chars, 12)
    }
    const numbers = () => {
        const chars = "0123456789"
        loop(chars, 3)
    }
    const symbols = () => {
        const chars = "-_!£"
        loop(chars, 2)
    }
    
    letters()
    numbers()
    symbols()
    
    return password.split('').sort(function(){return 0.5-Math.random()}).join('');
};
console.log(generatePassword())