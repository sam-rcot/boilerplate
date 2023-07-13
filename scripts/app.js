const getFormValues = () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return { email, capitalized };
};

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
        loop(chars, 10)
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
const setResultText = ({ email, capitalized, tempPassword }) => {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Hello ${capitalized},<br>
<br>
Apologies for the issues you have been having logging in. I have now updated your account and created a new temporary password.<br>
Please login to the <a href="https://portal.rcot.co.uk/"><strong>RCOT Portal</strong></a> (https://portal.rcot.co.uk/) on a fresh web browser using the access credentials shown below and amend your password to something more secure.<br>
<br>
<strong>Username:</strong> <span id="emailSpan" ondblclick="highlightText(this)">${email}</span><br>
<strong>Temporary password:</strong> <span id="tempPasswordSpan" ondblclick="highlightText(this)">${tempPassword}</span><br>
<br>
Kind Regards,<br>
Web Team`;
    document.querySelector(".wrapper").style.display = "flex";
};

const highlightText = (element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
};

const copyToClipboard = (text) => {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
};

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const { email, capitalized } = getFormValues();
    const tempPassword = generatePassword();

    setResultText({ email, capitalized, tempPassword });
});

document.getElementById("copyButton").addEventListener("click", function () {
    const resultText = document.getElementById("result").textContent;
    copyToClipboard(resultText);
});
