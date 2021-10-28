

var accounts=[];
async function connectWallet(){
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length == 0){
    console.log("User is not logged in to MetaMask");
    this.alert("Please connect to Metamask");
}
    else{
    this.alert("Here is your current account: " + accounts[0]);}
}


window.addEventListener('load', (event) => {
if (typeof window.ethereum !== 'undefined'){
        console.log('Wallet detected');
        const ethereumButton = document.getElementById('wallet-button');
        ethereumButton.addEventListener('click', () => {
        //Will Start the metamask extension
        connectWallet();
        
});
    
        
        }
        
    else{
        console.log('No Wallet')
        this.alert('You need to install an Ethereum Wallet!')
    }
})