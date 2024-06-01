# ISETicket

ISETicket is a simple ticketing system for small events built on the Sepolia Web3 network using ERC-20 tokens. It is a decentralized application (dApp) that allows users to buy and return tickets for events. Doormen and security personnel can also use the dApp to verify the authenticity of tickets. The Venue can also use the dApp to create events and manage ticket sales.

Built using JQuery, BULMA CSS, and Web3.js.

## Etherscan records

### Wallets

- Doorman [0x146Ce754F553A25588002a37A535b5333B88e820](https://sepolia.etherscan.io/address/0x146Ce754F553A25588002a37A535b5333B88e820)
- Venue [0xd82228Fb451b0f774b65704FD560008653E79F18](https://sepolia.etherscan.io/address/0xd82228Fb451b0f774b65704FD560008653E79F18)
- Attendee [0xA97E6537f9cF8625C804e706fBb504e388939cFD](https://sepolia.etherscan.io/address/0xA97E6537f9cF8625C804e706fBb504e388939cFD)

### Transactions

- Contract creation [0xa3539b7fc7246396a1f07382d2625b1c4ad825e5](https://sepolia.etherscan.io/tx/0xf577220d64a96b42289ad92aa07dd2c59e0edd3a9f314c4fc13c9985f3c45fb0)
  - Parameters: `decimals=0`, `name=ISETicket`, `symbol=ISE`, `totalSupply=1000` 
- Attendee buying a ticket [0x0749ba2872f5fdf1fd7ec9a3acd73ad7d58ca48a1ec5bd9e3347253c0854c6f6](https://sepolia.etherscan.io/tx/0x0749ba2872f5fdf1fd7ec9a3acd73ad7d58ca48a1ec5bd9e3347253c0854c6f6)
- Attendee returning a ticket [0x52cf64fa6ac49f66974e66b549f4927964ff6c26f66a8be1e447f17254567fd2](https://sepolia.etherscan.io/tx/0x52cf64fa6ac49f66974e66b549f4927964ff6c26f66a8be1e447f17254567fd2)

## Installation and Usage

```bash
git clone https://github.com/theadambyrne/ISETicket.git
cd ISETicket

# Serve static files - can use Live Server VSCode extension too (beware CORS issues)
python -m http.server 8000

# then open your browser and go to http://localhost:8000
```

## Features

| Actor | Feature | Description | Status |
| --- | --- | --- | --- |
| Attendee | Create wallet | Create a Sepolia testnet wallet |🟢|
| Attendee | Download wallet | Save keystore locally |🟢|
| Attendee | Load wallet | Import wallet manually and via keystore |🟢|
| Attendee | Buy ticket | Buy a ticket for an event |🟢|
| Attendee | Check balances | Check ticket and SETH balances |🟢|
| Attendee | Return ticket | Return a ticket for an event |🟢|
| Doorman | Verify ticket | Verify the authenticity of a ticket |🟢|
| Venue | Monitor tickets | Monitor the distribution of tickets (sold/supply) |🟢|