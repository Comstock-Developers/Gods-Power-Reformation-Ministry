console.log("in javascript");
const contractSource = `

contract tripNumber =

  record trip =
    { creatorAddress : address,
      url            : string,
      name           : string,
      numberCount      : int }

  record state =
    { trips      : map(int, trip),
      tripsLength : int }

  entrypoint init() =
    { trips = {},
      tripsLength = 0 }
  
  payable stateful entrypoint maketrip()=
    Chain.spend(ak_2bKhoFWgQ9os4x8CaeDTHZRGzUcSwcXYUrM12gZHKTdyreGRgG,Call.value)

  entrypoint gettrip(index : int) : trip =
  	switch(Map.lookup(index, state.trips))
	    None    => abort("There is no trip with this item registered.")
	    Some(x) => x

  stateful entrypoint registertrip(url' : string, name' : string) =
    let trip = { creatorAddress = Call.caller, url = url', name = name', numberCount = 0}
    let index = gettripsLength() + 1
    put(state{ trips[index] = trip, tripsLength = index })

  entrypoint gettripsLength() : int =
    state.tripsLength

  stateful entrypoint numbertrip(index : int) =
    let trip = gettrip(index)
    Chain.spend(trip.creatorAddress, Call.value)
    let updatednumberCount = trip.numberCount + Call.value
    let updatedtrips = state.trips{ [index].numberCount = updatednumberCount }
    put(state{ trips = updatedtrips })
 

`;

//Address of the trip voting smart contract on the testnet of the aeternity blockchain
const contractAddress = 'ct_25B3k7DZ2WLXMRVPZREqpviHNJXJzLe1WABAPVyGFVq4asbhQ';
//Create variable for client so it can be used in different functions
var client = null;
//Create a new global array for the trips
var tripArray = [];
//Create a new variable to store the length of the trip globally
var tripsLength = 0;



//Create a asynchronous read call for our smart contract
async function callStatic(func, args) {
  //Create a new contract instance that we can interact with
  const contract = await client.getContractInstance(contractSource, {contractAddress});
  //Make a call to get data of smart contract func, with specefied arguments
  const calledGet = await contract.call(func, args, {callStatic: true}).catch(e => console.error(e));
  //Make another call to decode the data received in first call
  const decodedGet = await calledGet.decode().catch(e => console.error(e));

  return decodedGet;
}

//Create a asynchronous write call for our smart contract
async function contractCall(func, args, value) {
  const contract = await client.getContractInstance(contractSource, {contractAddress});
  //Make a call to write smart contract func, with aeon value input
  const calledSet = await contract.call(func, args, {amount: value}).catch(e => console.error(e));

  return calledSet;
}

//Execute main function
window.addEventListener('load', async () => {
  //Display the loader animation so the user knows that something is happening
  $("#loader").show();

  //Initialize the Aepp object through aepp-sdk.browser.js, the base app needs to be running.
  client = await Ae.Aepp();

 
  $("#loader").hide();
});


$('#add_zanzibar').click(function(){
  $("#loader").show();
  console.log("added zanzibar");
 contractCall("maketrip",[],2*1000000000000000000);
 $("#loader").hide();
});
$('#add_dar').click(function(){
  $("#loader").show();
   console.log("added dar es salam");
  contractCall("maketrip",[],2*1000000000000000000);
  $("#loader").hide();
});
$('#add_mombasa').click(function(){
  $("#loader").show();
  console.log("added mombasa");
  contractCall("maketrip",[],3*1000000000000000000);
  $("#loader").hide();
});
$('#add_addis').click(function(){
  $("#loader").show();
  console.log("added addis ababa");
  contractCall("maketrip",[],3*1000000000000000000);
  $("#loader").hide();
});
$('#add_indonesia').click(function(){
  $("#loader").show();
  console.log("added indonesia");
  contractCall("maketrip",[],3*1000000000000000000);
  $("#loader").hide();
});


