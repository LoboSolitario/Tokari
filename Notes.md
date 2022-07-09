# Notes

1. req.body empty while post from POSTMAN

sol: use "Content-Type:application/json" and send the body as json. and also remove the default "Content-Type"fsda

## Integration with Binance for order placement.

1. Require the API_KEY and API_SECRET for binance account (OAUTH still not possible for binance. It is locked for insitituions. i.e you have to apply in order to recieve the oauth access.(https://developers.binance.com/docs/login/introduction)
2. To access the private routes of the binance API, we would be required to specific parameters,
    a. Timestamp: It stores the current date and time of the request being sent.
    b. Signature: The APIT_KEY and the API_SECRET is used to create a unique signature that identifies that user. It is created as follows.
    ```
    if (binance_api_secret) {
        const queryString = Object.keys(paramsObject).map((key) => {
            return `${key}=${paramsObject[key]}`;
        }).join('&');
        const signature = CryptoJS.HmacSHA256(queryString, binance_api_secret).toString();
    }
    ```

3. These parameters have to be appended everytime we send a new request to a private route.

### Supported cryptocurrencies in the testnet
1. BNB
2. BTC
3. ETH
4. LTC
5. TRX
6. XRP
7. USDT

### Usecases:

We have multiple use cases:

1. Retrieve the cost of the crypto currencies. 

    In order to retreive the USD price of cryptocurrency, we use:
    `GET /api/v3/avgPrice?symbol=BTCUSDT`
    which returns: 
    ```
    {
        "mins": 1,
        "price": "20729.17053510"
    }
    ```

2. Placing an order.

    The order can be placed initially with only USD. Placing an order for a basket will contain a list of crypto currency with the weight and the total investment amount. An example basket order will contain:
    ```
    {
        "investment_cost": 100,
        "crypto_alloc" :[{
            cryptoName: Bitcoin,
            cryptoSymbol: BTC,
            cryptoPrice: 20729.17053510,
            weight: 0.5
        },{
            cryptoName: Ethereum,
            cryptoSymbol: ETH,
            cryptoPrice: 1107.31215222,
            weight: 0.5
        }]
    }
    ```
    From here we can calculate the order quantity required to place the order for individual crypto with the following API call.
    `POST /api/v3/order?symbol=BTCUSDT&side=BUY&type=MARKET&quantity=0.1&timestamp={{timestamp}}&signature={{signature}}`

3. Order tracking.

    The user can definitely track their investments in their binance accounts. But on our website, we will also be tracking the status of their investments.
    We can track the change in the current price of the crypto and the track the profit and loss for the basket.
    we can use the following API call to find the order of that user.

    ```GET /api/v3/allOrders?symbol=BTCUSDT&orderId=4969958&timestamp={{timestamp}}&signature={{signature}}```

    With this data, we can give insights about the user. 

4. If we have time, we can also implement the thing where the user can buy with any supported currency.