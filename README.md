# ISETicket

ISETicket is a simple ticketing system for small events built on the Sepolia Web3 network using ERC-20 tokens. It is a decentralized application (dApp) that allows users to buy and return tickets for events. Doormen and security personnel can also use the dApp to verify the authenticity of tickets. The Venue can also use the dApp to create events and manage ticket sales.

Built using JQuery, BULMA CSS, and Web3.js.

## Etherscan records

### Wallets

- Contract creation [0xa3539b7fc7246396a1f07382d2625b1c4ad825e5](https://sepolia.etherscan.io/tx/0xf577220d64a96b42289ad92aa07dd2c59e0edd3a9f314c4fc13c9985f3c45fb0)
  - Parameters: `decimals=0`, `name=ISETicket`, `symbol=ISE`, `totalSupply=1000`
- Attendee wallet creation [0xA97E6537f9cF8625C804e706fBb504e388939cFD](https://sepolia.etherscan.io/address/0xA97E6537f9cF8625C804e706fBb504e388939cFD)
- Attendee buying a ticket [0x0749ba2872f5fdf1fd7ec9a3acd73ad7d58ca48a1ec5bd9e3347253c0854c6f6](https://sepolia.etherscan.io/tx/0x0749ba2872f5fdf1fd7ec9a3acd73ad7d58ca48a1ec5bd9e3347253c0854c6f6)
- Attendee returning a ticket [0x52cf64fa6ac49f66974e66b549f4927964ff6c26f66a8be1e447f17254567fd2](https://sepolia.etherscan.io/tx/0x52cf64fa6ac49f66974e66b549f4927964ff6c26f66a8be1e447f17254567fd2)

## Installation and Usage

```bash
git clone https://github.com/theadambyrne/ISETicket.git
cd ISETicket

# Serve with VSCode Live Server extension

# Or serve static files (tests require 127.0.0.1:5500)
python -m http.server 8000 
```

## Testing

This project is entirely client-side so I opted to run E2E UI and functionality tests using playwright. The testing suite is in `tests/` and is its own node project. To run the tests:

```bash
cd tests
npm install
npx playwright test # ensure port number in tests is correct (5500 at 127.0.0.1)

# note with CORS errors and potential thrashing over attendee wallet File I/O issues you can run the tests in seqential mode
npx playwright test -j 1
```

*Note: Node.js is required to run the tests not the dApp. Also the wallet keystores are required.*

| Test File | Test Case | Description |
| --- | --- | --- |
| [attendee_buy.spec.js](tests/attendee_buy.spec.js) | Buy token with keystore wallet | Tests for attendee buying a ticket with a keystore wallet |
| [attendee_buy.spec.js](tests/attendee_buy.spec.js) | Buy token with manual entry wallet | Tests for attendee buying a ticket with a manually entered wallet |
| [attendee_sell.spec.js](tests/attendee_sell.spec.js) | Return token with keystore wallet | Tests for attendee returning a ticket with a keystore wallet |
| [attendee_sell.spec.js](tests/attendee_sell.spec.js) | Return token with manual entry wallet | Tests for attendee returning a ticket with a manually entered wallet |
| [attendee_wallet.spec.js](tests/attendee_wallet.spec.js) | Creating a wallet | Tests for creating a wallet |
| [attendee_wallet.spec.js](tests/attendee_wallet.spec.js) | Checking wallet balance | Tests for checking the balance of a wallet |
| [security.spec.js](tests/security.spec.js) | Check wallet for ticket | Tests for checking a wallet for a ticket |
| [venue.spec.js](tests/venue.spec.js) | Ticket distribution results | Tests for ticket distribution results |
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
