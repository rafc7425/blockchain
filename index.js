import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;

console.log(`${name} v${version}`);

const{genesis}=Block;

const block1 = Block.mine(genesis,'d4ta-1');
console.log(block1.toString());
