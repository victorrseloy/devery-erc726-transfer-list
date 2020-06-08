 var Devery = require('@devery/devery')


function main(){
    let erc721 = new Devery.DeveryERC721({networkId:3});
     // Add the web3 node module
     var Web3 = require('web3');

     // Show web3 where it needs to look for the Ethereum node.
         var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ded14a7232434a4eb1116ad370d0fb86'));
     
     // The address we want to search by.
         var addr = erc721.address
     
     // Show the Hash in the console.
         console.log('Events by Address: ' + addr);
     
     // Define the contract ABI
         var abi = erc721.abi
     
     // Define the contract ABI and Address
         var contract = new web3.eth.Contract(abi,addr);
     
     // Fun console text, you can ignore this.
         console.log('-----------------------------------');
         console.log('Matching Smart Contract Events');
         console.log('-----------------------------------');
     
     // Search the contract events for the hash in the event logs and show matching events.
         contract.getPastEvents('Transfer', {
           filter: {_from: addr},
           fromBlock: 0,
           toBlock: 'latest'
         }, (error, events) => {
           console.log(events.length);
           console.log(error)
           for (var i=0; i<events.length; i++) {
             var eventObj = events[i];
             console.log('Address: ', eventObj.returnValues);
           
           }
         });
}

main();