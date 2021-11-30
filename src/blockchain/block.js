class Block {
    constructor(timestamp, previousHash, hash, data) {
      this.timestamp = timestamp;
      this.previousHash = previousHash;
      this.hash = hash;
      this.data = data;
    }
    static get genesis(){
      const timestamp = (new Date(2000,0,1)).getTime();
      return new this(timestamp, undefined, 'g3n3sis-hash','yeah');
    }

    static mine(previousBlock, data){
      const timestamp=Date.now();
      const hash='@TODO-hash';
      const { hash: previoushash}=previousBlock;

      return new this(timestamp,previoushash,hash,data);

    }
    toString() { 
      const {
        timestamp, previousHash, hash, data,
      } = this;
  
      return `Block -
        timestamp       : ${timestamp}
        previousHash    : ${previousHash}
        hash            : ${hash}
        data            : ${data}
      `;
    }
  }
  
  export default Block;