var submit = document.getElementById("btn-submit");
var inputCustum = document.getElementById("input-coin");
var back = document.getElementById("btn-back");
var btnLogin = document.getElementById("header-login-button");
var btnLogout = document.getElementById("header-logout-button");
var submitPay = document.getElementById("btn-submit-pay");
var inputAccount = document.getElementById("inputAccount");

for (let i = 1; i < 9; i++) {
    document.getElementById("btn-coin" + i).addEventListener("click", function () {
        if (
            document.getElementById("btn-coin" + i).classList.contains("tiktok-l4v9n8-ButtonContainer")
        ) {
            document.getElementById("btn-coin" + i).classList.remove("tiktok-l4v9n8-ButtonContainer");
            document.getElementById("btn-coin" + i).classList.add("tiktok-1xsxoj2-ButtonContainer");
        }
        for (let j = 1; j < 9; j++) {
            if (j != i) {
                document.getElementById("btn-coin" + j).classList.remove("tiktok-1xsxoj2-ButtonContainer");
                document.getElementById("btn-coin" + j).classList.add("tiktok-l4v9n8-ButtonContainer");
            }
        }

        // khi đến phần tử cuối thì khi lick vào sẽ ẩn phần tử con có id = custun-coin và hiện phần tử con khác lên có id = input-coin và khi click và chỗ khác thì nó về lại như ban đầu
        document.getElementById("custun-coin").style.display = "block";
        document.getElementById("input-coin").style.display = "none";

        if (i == 8) {
            document.getElementById("custun-coin").style.display = "none";
            document.getElementById("input-coin").style.display = "block";
            var inputCustom = document.getElementById("input-custom");
            inputCustum.addEventListener("input", function () {
                var inputValue = inputCustum.value;
                if (isNaN(inputValue)) {
                    alert("Vui lòng chỉ nhập số!");
                    return;
                }
                var result = parseInt(inputValue) * 0.0106;
                document.getElementById("total-money").innerHTML = "$" + result.toFixed(2);
                document.getElementById("money").innerHTML = "$" + result.toFixed(2);
                document.getElementById("text-coin-result").innerHTML = inputValue;
                if (inputValue == "") {
                    document.getElementById("total-money").innerHTML = 0;
                    document.getElementById("money").innerHTML = ' Large amount supported';
                }

            });

        }

        let money = document.querySelector("#btn-coin" + i + " .tiktok-10102vh-SpanTextNow").innerHTML;
        document.getElementById("total-money").innerHTML = money;
        let coin = document.querySelector("#btn-coin" + i + " .tiktok-wkgdjt-SpanNumDisplay").innerHTML;
        document.getElementById("text-coin-result").innerHTML = coin;
        document.getElementById("coins").innerHTML = coin + " Coins";
        document.getElementById("totalMoney1").innerHTML = money;
        document.getElementById("totalMoney2").innerHTML = money;

    })

}

submit.addEventListener("click", function () {
    // document.getElementById("resultload").style.display = "block";
    // setTimeout(() => {
    //     document.getElementById("resultload").style.display = "none";
    //     document.getElementById("result").style.display = "block"
    // }, 2000);
    
    // document.getElementById("input-coin").value = "";

    document.getElementById("payload").style.display = "block";
    let InputAcc = inputAccount.value;
    document.getElementById("Account").innerHTML = InputAcc;
    
})

document.getElementById("btn-close").addEventListener("click", function () {
    document.getElementById("payload").style.display = "none";

})

submitPay.addEventListener("click", function () {
    console.log("submitPay");
    document.getElementById("resultload").style.display = "block";
    setTimeout(() => {
        document.getElementById("resultload").style.display = "none";
        document.getElementById("result").style.display = "block"
    }, 2000);
    document.getElementById("payload").style.display = "none";
    document.getElementById("input-coin").value = "";
    document.getElementById("inputAccount").value = "";

})


back.addEventListener("click", function () {
    document.getElementById("result").style.display = "none";
    document.getElementById("custun-coin").style.display = "block";
    document.getElementById("input-coin").style.display = "none";
    document.getElementById("money").innerHTML = ' Large amount supported';
    document.getElementById("total-money").innerHTML = "$";
})

document.getElementById("EditCard").addEventListener("click", function () {
    document.getElementById("card").style.display = "block";
    document.getElementById("inputCard").checked = true;
    document.getElementById("inputPaypal").checked = false;
    document.getElementById("inputVemo").checked = false;
    
})
document.getElementById("payPal").addEventListener("click", function () {
    
    document.getElementById("card").style.display = "none";

    document.getElementById("inputCard").checked = false;
    document.getElementById("inputPaypal").checked = true;
    document.getElementById("inputVemo").checked = false;

})
document.getElementById("Vemo").addEventListener("click", function () {
    document.getElementById("card").style.display = "none";
    
    document.getElementById("inputVemo").checked = true;
    document.getElementById("inputCard").checked = false;
})







