const otp = Math.floor(Math.random() * (2000 - 1000) + 1000).toString();
let otpnumber = otp.split("");
console.log(Array.isArray(otpnumber));

//~Display the OTP in an alert
alert("The OTP is: " + otp);

//~Get the input elements
let div = document.getElementsByTagName("input");

//~Convert the HTMLCollection to an array
let adiv = Array.from(div);
for (let i = 0; i < 4; i++) {
  setInterval(() => {
    div[i].value = otpnumber[i];
  }, i * 1000);
}
