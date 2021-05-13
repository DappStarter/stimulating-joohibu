require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict person forget turn ship riot pizza smooth coin fat swift spend'; 
let testAccounts = [
"0x5c9e6511b0fc6decce07ec6c20a6c8af563699140290ee14a24b97292bfcf5a5",
"0x55991a684263b1d68db894d7b04830c4348bae5b54e8f046089d5ba9bafc1fe8",
"0x0ca50319d86c478fd075bdfba9242eadb6a7abeb01d5ab18f7da70c13a290b3a",
"0xdfe8e18ee52fbed32e3b07396b84fc38d80a1605117f3900fb725ee5a5348b93",
"0xd34790bb3116c34c390b473709d5eef8be4327c34133feb1d51f9ce7732d7d50",
"0x7ebd4cdaa185ce779ed62648b78a4d0cb0cf359db22388a18e6f9f76eaf5ba03",
"0x7163cb5f1002e0f71b2d377748a3e401184d7d85669d4c4954feae79813d3a3e",
"0xfb6a26d89574bc856616343fe1e891e0975b5462ba5dca2bfb3948ba7eee8abd",
"0xc0f4aa26ae5a5036c2918b7790e563343a3aa02444039b55deafeccbaa633a29",
"0x39023fb78b4222d6135b507530a06c5ecadc085ec4551a139611442a6ea4935e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

