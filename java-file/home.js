document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function () {
        const donateBalanceNoakhali = getInputfeildValue('donate-noakhali-input');
        const balanceNoakhali = getTextValue('balance-noakhali');
        const accountBalance = getTextValue('account-balance');
        if (isNaN(donateBalanceNoakhali)) {
            alert('Please input a valid number');
        }
        else {
            if (donateBalanceNoakhali > accountBalance) {
                alert("You don't have enough balance")
            }
            else {
                const totalDonateBalanceNoakhali = donateBalanceNoakhali + balanceNoakhali;
                document.getElementById('balance-noakhali').innerText = totalDonateBalanceNoakhali.toFixed(2);
                const newAccountBalance = accountBalance - donateBalanceNoakhali;
                document.getElementById('account-balance').innerText = newAccountBalance.toFixed(2);
                alert(`Congrates You donate for Noakhali ${donateBalanceNoakhali}tk.`);

                const div = document.createElement('div');
                div.className = "bg-white rounded-md p-3  mt-2";
                div.innerHTML = `
                <div class="flex w-2/3 mx-auto p-4 text-2xl text-center justify-center border-l-2 border-indigo-500 shadow-lg rounded-md">
                        <div>
                            <p> ${donateBalanceNoakhali} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
                            <p> Date: ${new Date().toLocaleString()}</p>
                        </div>
                    </div>
            `
                getId('history-container').appendChild(div);
            }
        }


    })

document.getElementById('btn-donate-feni')
    .addEventListener('click', function () {
        const balanceFeni = getTextValue('balance-feni');
        const donateBalanceFeni = getInputfeildValue('donate-feni-input');
        const accountBalance = getTextValue('account-balance');
        if (isNaN(donateBalanceFeni)) {
            alert('Please input a valid number');
        }
        else {
            if (donateBalanceFeni > accountBalance) {
                alert("You don't have enough balance")
            }
            else {
                const totalDonateBalanceFeni = balanceFeni + donateBalanceFeni;
                document.getElementById('balance-feni').innerText = totalDonateBalanceFeni.toFixed(2);
                const newAccountBalance = accountBalance - donateBalanceFeni;
                document.getElementById('account-balance').innerText = newAccountBalance.toFixed(2);
                alert(`Congrates You donate for Feni ${donateBalanceFeni}tk.`);

                const div = document.createElement('div');
                div.className = "bg-white rounded-md p-3  mt-2";
                div.innerHTML = `
            <div class="flex w-2/3 mx-auto p-4 text-2xl text-center justify-center border-l-2 border-indigo-500 shadow-lg rounded-md">
                    <div>
                        <p> ${donateBalanceFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
                        <p> Date: ${new Date().toLocaleString()}</p>
                   </div>
                </div>
        `
                getId('history-container').appendChild(div);
            }
        }

    })

document.getElementById('btn-donate-quta')
    .addEventListener('click', function () {
        const donateBalaceQuta = getInputfeildValue('donate-quta-input');
        const balanceQuta = getTextValue('quta-balance');
        const accountBalance = getTextValue('account-balance');
        if (isNaN(donateBalaceQuta)) {
            alert('Please input a valid number')
        }
        else {
            if (donateBalaceQuta > accountBalance) {
                alert("You don't have enoough balance");
            }
            else {
                const totalDonateBalanceQuta = balanceQuta + donateBalaceQuta;
                document.getElementById('quta-balance').innerText = totalDonateBalanceQuta.toFixed(2);
                const newAccountBalance = accountBalance - donateBalaceQuta;
                document.getElementById('account-balance').innerText = newAccountBalance.toFixed(2);
                alert(`Congrates You donate for Quta movement ${donateBalaceQuta}tk.`);
    
                const div = document.createElement('div');
                div.className = "bg-white rounded-md p-3  mt-2";
                div.innerHTML = `
                <div class="flex w-2/3 mx-auto p-4 text-2xl text-center justify-center border-l-2 border-indigo-500 shadow-lg rounded-md">
                        <div>
                            <p> ${donateBalaceQuta} Taka is Donated for Injured people in Quta movement-2024, Bangladesh</p>
                            <p> Date: ${new Date().toLocaleString()}</p>
                        </div>
                    </div>
            `
                getId('history-container').appendChild(div);
            }
        }
        
    })

document.getElementById('history-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-section').classList.add('hidden');
        const historyBtn = document.getElementById('history-btn');
        const donationBtn = document.getElementById('donation-btn');
        historyBtn.classList.add('bg-[#B4F461]', 'text-black');
        donationBtn.classList.remove('bg-[#B4F461]');
        document.getElementById('history-section').classList.remove('hidden');
    })

document.getElementById('donation-btn')
    .addEventListener('click', function () {
        getId('donation-section').classList.remove('hidden');
        getId('history-section').classList.add('hidden');
        getId('donation-btn').classList.add('bg-[#B4F461]', 'text-black');
        getId('history-btn').classList.remove('bg-[#B4F461]');
        getId('history-section').classList.add('hidden');
    })

document.getElementById('blog-btn')
    .addEventListener('click', function () {
        window.location.href = 'question.html';
    })
