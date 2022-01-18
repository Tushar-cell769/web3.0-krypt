require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/TsizCxHfUq1lz4JxRV4VMb8G9SKn0R49",
      accounts: [
        "ccb8674c91218dfa23990b507f8c1a482fceac3cbf1604e92338095bc79ce977",
      ],
    },
  },
};
