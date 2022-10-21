import "regenerator-runtime/runtime";

const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
    alert("hi!");
    getAccount();
});

async function getAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //alert(accounts);
    const account = accounts[0];
    showAccount.innerHTML = account;
}