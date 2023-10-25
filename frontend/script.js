const connectWalletMsg = document.getElementById("connectWalletMessage");
const connectWalletBtn = document.getElementById("connectWallet");
const votingStation = document.getElementById("votingStation");
const timerTime = document.getElementById("time");
const timerMessage = document.getElementById("timerMessage");
const mainBoard = document.getElementById("mainBoard");
const voteForm = document.getElementById("voteForm");
const vote = document.getElementById("vote");
const voteBtn = document.getElementById("sendVote");
const showResultContainer =  document.getElementById("showResultContainer");
const showResult =  document.getElementById("showResult");
const result =  document.getElementById("result");
const admin =  document.getElementById("admin");
const candidates = document.getElementById("candidates");
const electionDuration =  document.getElementById("electionDuration");
const startElectionBtn =  document.getElementById("startElectionBtn");
const candidate = document.getElementById("candidate");
const addCandidateBtn =  document.getElementById("addCandidateBtn");
const restartElectionBtn = document.getElementById("restartElectionBtn");

const contractAddress = "0x4fdD80178179Ea34cdC2E3A89A5A2814D1e2558B";
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Voting__AlreadyVoted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Voting__ElectionNotStarted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Voting__ElectionPeriodEnded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Voting__ElectionStarted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Voting__NotOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "numberOfVotes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "checkElectionPeriod",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "electionStarted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "electionTimer",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVotingEnd",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listOfVoters",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resetAllVoterStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resetElection",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieveVotes",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "numberOfVotes",
              "type": "uint256"
            }
          ],
          "internalType": "struct Voting.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_candidates",
          "type": "string[]"
        },
        {
          "internalType": "uint256",
          "name": "_votingDuration",
          "type": "uint256"
        }
      ],
      "name": "startElection",
      "outputs": [],
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
      "name": "voteTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        }
      ],
      "name": "voterStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingEnd",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingStart",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

let contract, signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, 11155111);
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        console.log(signer);
        contract = new ethers.Contract(contractAddress, contractABI, signer);
    })
});

// Functions
async function getAllCandidates() {
    if (document.getElementById("candidateBoard")) {
        document.getElementById("candidateBoard").remove();
    }

    let board = document.createElement("table");
    board.id = "candidateBoard";
    mainBoard.appendChild(board);

    let tableHeader = document.createElement("tr")
    tableHeader.innerHTML = `<th>ID No.</th>
                            <th>Candidate</th>`; 

    board.appendChild(tableHeader);

    let candidates = await contract.retrieveVotes();
    for (let i = 0 ; i < candidates.length ; i++) {
        let candidate = document.createElement("tr");
        candidate.innerHTML = `<td>${parseInt(candidates[i][0])}</td>
                        <td>${candidates[i][1]}</td>`; 
        board.appendChild(candidate);
    }
}

async function getResult() {
    result.style.display = "flex";

    if (document.getElementById("resultBoard")) {
        document.getElementById("resultBoard").remove();
    }

    let resultBoard = document.createElement("table")
    resultBoard.id = "resultBoard";
    result.appendChild(resultBoard);

    let tableHeader = document.createElement("tr");
    tableHeader.innerHTML = `<th>ID No.</th>
                        <th>Candidate</th>
                        <th>Votes</th>`;
    resultBoard.appendChild(tableHeader);

    let candidates = await contract.retrieveVotes();
    for (let i = 0 ; i < candidates.length ; i++) {
        let candidate = document.createElement("tr");
        candidate.innerHTML = `<td>${parseInt(candidates[i][0])}</td>
                        <td>${candidates[i][1]}</td>
                        <td>${parseInt(candidates[i][2])}</td>`; 
        resultBoard.appendChild(candidate);
    }

}

function refreshPage() {
    setInterval(async() => {
        let time;
        try {
            time = await contract.electionTimer();

        } catch(err) {
            console.log(err)
        }

        if (time > 0) {
            timerMessage.innerHTML = `<span id="time">${time}</span> seconds left`;
            voteForm.style.display  = "flex";
            showResultContainer.style.display = "none";
        } else {
            timerMessage.textContent = "Either no election or election already ended";
            voteForm.style.display = "none";
            showResultContainer.style.display = "block";
        }
    }, 1000)

    setInterval(async() => {
        await getAllCandidates();
    }, 10000)
}

async function sendVote() {
    await contract.voteTo(vote.value);
    vote.value = "";
}

async function startElection() {
    if (!candidates.value) {
        alert("List of candidates is empty");
    }

    if (!electionDuration.value) {
        alert("Please set the election duration");
    }

    const _candidates = candidates.value.split(",");
    const _votingDuration = electionDuration.value;

    await contract.startElection(_candidates, _votingDuration);
    refreshPage();

    candidates.value = "";
    electionDuration.value = "";

    voteForm.style.display = "flex";
    showResultContainer.style.display = "none";
}

async function addCandidate() {
    if (!candidate.value) {
        alert("Please provide candidate name first");
    }

    await contract.addCandidate(candidate.value);
    refreshPage();
    candidate.value = "";
}

async function getAccount() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 11155111);
    const ethAccounts = await provider.send("eth_requestAccounts", []).then(() => {
        provider.listAccounts().then((accounts) => {
            signer = provider.getSigner(accounts[0]);
            console.log(`I am the signer now: ${signer}`);
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            console.log(contract);
        })
    }).catch((err) => console.log(err));


    console.log(`Signer address: ${signer._address}`)
    connectWalletBtn.textContent = signer._address.slice(0, 10) + "...";
    connectWalletMsg.textContent = "Connected!"
    connectWalletBtn.disabled = true;

    let owner = await contract.owner();
    console.log(owner)
    if (owner == signer._address) {
        admin.style.display = "flex";
    }

    votingStation.style.display = "block";
    await getAllCandidates();
}

async function restartElection() {
    await contract.resetElection();
    timerMessage.textContent = "No election right now";
}

//Event listeners

connectWalletBtn.addEventListener("click", async() => {
    try {
        await getAccount();
    } catch (err) {
        console.log(err);
    }
});
showResult.addEventListener("click", async() => {
    try {
        await getResult();
    } catch(err) {
        console.log(err);
    }
});
voteBtn.addEventListener("click", async() => {
    try {
        await sendVote();
    } catch (err) {
        console.log(err);
    }
});
addCandidateBtn.addEventListener("click", async() => {
    try {
        await addCandidate();
    } catch(err) {
        console.log(err);
    }
});
startElectionBtn.addEventListener("click", async() => {
    try {
        await startElection();
    } catch(err) {
        console.log(err);
    }
});
restartElectionBtn.addEventListener("click", async() => {
    try {
        await restartElection();
    }
    catch (err) {
        console.log(err);
    }
})
