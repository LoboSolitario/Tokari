# Tokari

## Project Idea
We realised that there are no crypto-investment products made for people who are new to the crypto ecosystem or investors who want slightly less risk or want to invest passively. We believe the next billion on crypto are going to be onboarded from traditional finance platforms like Revolut, Robinhood, Zerodha, and others and their first instinct will be to look for an ETF kind of a product that gives them one-click exposure to the top ecosystems in the crypto space. We were shocked when we realised that there was no such platforms except for Indexcoop which gives you very specific thematic exposure.

We decided to solve this problem and started building Tokari. It is an investment platform that offers customised baskets for the crypto space. We also provide a platform, where portfolio managers can share their custom-made baskets with the users and scale their reach. At the same time, the investors get access to the best crypto basket products from experienced portfolio managers. The basket ranges from simple market-weighted crypto baskets to quant-managed thematic baskets. The current process of investing in crypto has a very high barrier to entry. A single user might have to create multiple wallets and might be using multiple exchanges for placing orders. So, we take care of this problem too by seamlessly integrating with exchanges Binance/FTX.

## How to run?

### Usage

Clone the project.

```bash 
git clone https://gitlab.lrz.de/seba-master-2022/team-26/prototype.git
```

This command might require username and passphrase to complete clonning the project.

Then, go into the project directory.

### Frontend Configuration

Firstly, change directory to access frontend project.

```bash 
cd client
```

Installing dependencies and running the frontend.

```bash 
npm install
npm start
```

Then, it will automatically open default browser and redirect to the frontend path. If it is not redirected access it by [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.\
You will also see any lint errors in the console.
### Backend Configuration

Keep frontend server up and running. Open another terminal and change directory to project directory.

```bash 
cd server
```

Installing dependencies and running the backend. Ensure that you have installed nodemon to run command below.

```bash 
npm install
nodemon index.js
```

If you do not have nodemon installed, run the commands below instead of above.

```bash 
npm install
node index.js
```

### Environment Files

We have two environment files. To run the project correctly, you should create two `.env` files in `client` folder and root folder.

The `.env` file in `client` folder should contain

```bash 
REACT_APP_BASE_URL=http://localhost:4600
```

The `.env` file in root folder should contain

```bash 
REACT_APP_PORT=3000
REACT_APP_API_URL=http://localhost:4600
APP_SERVER_PORT=4600
DB_PASSWORD=***
JWT_SECRET=***
STRIPE_SECRET_TEST=***
BINANCE_API_KEY=***
BINANCE_API_SECRET=***
```

### Stripe Integration

We have employed Stripe to realize payments for subscriptions. The commands below should be run to setup stripe

```bash 
stripe login
stripe listen --forward-to localhost:4600/webhook
```

## Folder structure

.
├── LICENSE
├── Notes.md
├── README.md
├── client
│   ├── nginx
│   │   └── default.conf
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
│       ├── api
│       ├── assets
│       │   ├── fonts
│       │   ├── img
│       │   └── svg
│       ├── components
│       │   ├── AppRouters
│       │   ├── Buttons
│       │   ├── Discover
│       │   ├── Elements
│       │   ├── InvestmentMngmt
│       │   ├── Nav
│       │   ├── PortfolioMngmt
│       │   ├── Sections
│       │   ├── Transactions
│       │   ├── Users
│       │   ├── contexts
│       │   └── payment
│       ├── index.js
│       ├── screens
│       └── style
│           └── index.css
├── package-lock.json
├── package.json
├── server
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── src
│       ├── controllers
│       │   ├── emailController
│       ├── db.js
│       ├── emailTemplate
│       ├── middleware
│       ├── models
│       └── routes