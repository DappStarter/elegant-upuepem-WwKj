require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth still attitude grace lobster forget gate'; 
let testAccounts = [
"0x413525b77c14487e640b2887ffa4b093c8d6a261d897aab432e59f5c1d30eb29",
"0x1d93f2293892786c327bc2347512f5f12bfc00325d784000ed9cfdb4bd91a7c1",
"0x46faa42e16061a7b77f03acd40276238a71def1bf8956ec3b637a558bb0bccb5",
"0x580039751bfc312b4774c2b82e9ad5afe36eb545c8f0adb9079983f74c1d1964",
"0x854ad598ac141710645506c3398aa0e04cb38749171fd02916111e79e2a34c56",
"0x62bfa518d23944b40b0f138d5c2226c8e9b42bf47c54b0f32020d5d75634854e",
"0x6aed8dc2c6c8fbb7d7e053bdfd0991f8403e8f7c52f2c21d017c9c1e1fd80619",
"0x3a404a7fe1a58559ddedf3e54401c81d6311b6414d62d42ad8dae6f2f126de9c",
"0x23357bdd68f071d5768f0728ba7407bd49c62ae3ceff8a2a8d82c30221f159cd",
"0xa0c012bf28e394efa83a3443d2e8ffb9cb3f737cae2e04e6c3435eda60f03b37"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


