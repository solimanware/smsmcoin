const SHA256 = require('crypto-js/sha256')
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, '22/12/2019', "Genesis Block", "0")
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
            return true;
        }
    }
}

let smsmCoin = new Blockchain();
smsmCoin.addBlock(new Block(1, "23/12/2019", { amount: 4 }));
smsmCoin.addBlock(new Block(2, "24/12/2019", { amount: 100 }));

console.log('is Block chan valid?', smsmCoin.isChainValid())
smsmCoin.chain[1].data = { amount: 100 };
smsmCoin.hash = smsmCoin.chain[1].calculateHash();
console.log('is Block chan valid?', smsmCoin.isChainValid())

//console.log(JSON.stringify(smsmCoin, null, 4))