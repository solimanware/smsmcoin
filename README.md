# smsm coin
it's a hello world project for creating a coin using Blockchain very basics

## Block Class
### Constructor:
#### - index
#### - timestamp
#### - data
#### - previous hash
#### - hash

### Methods:
#### calculateHash();

and it calculates the block hash

## BlockChain Class 
### Constructor:

it contains the chain of blocks inside the blockchain

### Methods:

#### createGenesisBlock()

it creates the first block in the chain as it's dependable

#### getLatestBlock()

it gets the latest block in the blockchain

#### addBlock(newBlock)

it adds new block to the blockchain debending on the previous hash and calculated current hash

#### isChainValid()

it checks the validity of the blockchain against wrong data entered or trials to manipulations 

