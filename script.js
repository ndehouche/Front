

var accounts=[];
const contractAddress='0xAb9bf7078068b17764237E858E7525745506DE0e';
const contractABI=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_testator",
				"type": "address"
			}
		],
		"name": "logAlive",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "logFailedPayment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "logPayment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_testator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "willCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_testator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "willCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_testator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "willExecuted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_testator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "willUpdated",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "IAmAlive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_alive",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "cancelWill",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_cancelled",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "changeBeneficiary",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_updated",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maturity",
				"type": "uint256"
			}
		],
		"name": "changeMaturity",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_updated",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_decrease",
				"type": "uint256"
			}
		],
		"name": "changeReward",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_updated",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_decrease",
				"type": "uint256"
			}
		],
		"name": "changeValue",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_updated",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_reward",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maturity",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "createWill",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_testator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "executeWill",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_executed",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

async function connectWallet(){
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length == 0){
    console.log("User is not logged in to MetaMask");
    document.getElementById('div-interact').style.display = "none";
    this.alert("Please connect to Metamask");
}
    else{
    this.alert("Here is your current account: " + accounts[0]);
    document.getElementById('div-interact').style.display = "block";
    var web3=new Web3(window.ethereum);
    const EtherTrust= new web3.eth.Contract(contractABI, contractAddress);
    EtherTrust.setProvider(window.ethereum)
    //Create a will
    const create=document.getElementById('create-button');
    create.onclick = async ()=> {
    _reward=document.getElementById("reward").value; 
    _maturity=document.getElementById("maturity").value; 
    _beneficiary=document.getElementById("beneficiary").value;   
    _amount=document.getElementById("amount").value;   
    await EtherTrust.methods.createWill(_reward,_maturity,_beneficiary).send({from: ethereum.selectedAddress, to:contractAddress, value:_amount+_reward});
	   }
    const alive=document.getElementById('alive-button');
    alive.onclick = async ()=> {
    await EtherTrust.methods.IAmAlive().send({from: ethereum.selectedAddress, to:contractAddress});
    }
     const cancel=document.getElementById('cancel-button');
    cancel.onclick = async ()=> {
    _id=document.getElementById("id").value; 
    await EtherTrust.methods.cancelWill(_id).send({from: ethereum.selectedAddress, to:contractAddress});
    }
  const value=document.getElementById('value-button');
    value.onclick = async ()=> {
    _id=document.getElementById("idv").value; 
    _decrease=-document.getElementById("decreasev").value; 
    if (_decrease==0){ this.alert("This amount cannot be zero.");}
    else if (_decrease>0){await EtherTrust.methods.changeValue(_id, _decrease).send({from: ethereum.selectedAddress, to:contractAddress});}
    else{await EtherTrust.methods.changeValue(_id, 0).send({from: ethereum.selectedAddress, to:contractAddress, value:-_decrease});}
    }

  const reward=document.getElementById('reward-button');
    reward.onclick = async ()=> {
    _id=document.getElementById("idr").value; 
    _decrease=-document.getElementById("decreaser").value; 
    if (_decrease==0){ this.alert("This amount cannot be zero.");}
    else if (_decrease>0){await EtherTrust.methods.changeReward(_id, _decrease).send({from: ethereum.selectedAddress, to:contractAddress});}
    else{await EtherTrust.methods.changeReward(_id, 0).send({from: ethereum.selectedAddress, to:contractAddress, value:-_decrease});}
    }

  const beneficiary=document.getElementById('beneficiary-button');
    beneficiary.onclick = async ()=> {
    _id=document.getElementById("idb").value; 
    _newBeneficiary=document.getElementById("newbeneficiary").value; 
    await EtherTrust.methods.changeBeneficiary(_id, _newBeneficiary).send({from: ethereum.selectedAddress, to:contractAddress});
    }

  const maturity=document.getElementById('maturity-button');
    maturity.onclick = async ()=> {
    _id=document.getElementById("idm").value; 
    _newMaturity=document.getElementById("newmaturity").value; 
    await EtherTrust.methods.changeMaturity(_id, _newMaturity).send({from: ethereum.selectedAddress, to:contractAddress});
    }
  
  const execute=document.getElementById('execute-button');
    execute.onclick = async ()=> {
    _testator=document.getElementById("exectestator").value; 
    _id=document.getElementById("ide").value; 
    await EtherTrust.methods.executeWill(_testator, _id).send({from: ethereum.selectedAddress, to:contractAddress});
    }

}
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


