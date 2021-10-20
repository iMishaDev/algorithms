class HuffmanNode {
    constructor(data=null, char=''){
        this.leftChild = this.rightChild = null;
        this.data = data;
        this.char = char;
    }
}

class HuffmanCoding {
    constructor(){
        this.queue = [];
        this.root = null;
    }


    buildHuffmanTree(characters, frequency){
        for(let char = 0; char < characters.length; char++){
            let node = new HuffmanNode(frequency[char], characters[char]);
            this.queue.push(node);
        }

        this.queue.sort((a, b) => a.data - b.data);
        let root = null;
        while(this.queue.length > 1){
            let node1 = this.queue.shift();
            let node2 = this.queue.shift();

            let newNode = new HuffmanNode(node1.data + node2.data, '-')
            newNode.leftChild = node1;
            newNode.rightChild = node2; 
            root = newNode;

            this.queue.push(newNode);
            this.queue.sort((a, b) => a.data - b.data);
        }

        this.root = root;
    }

    printCode(root=this.root, s)
    {
        if (!root.leftChild && !root.rightChild ) {
            console.log(root.char + ':' + s);
            return;
        } 

        this.printCode(root.leftChild, s + '0');
        this.printCode(root.rightChild, s + '1');
    }
}


let n = 6;
let characters = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
let charactersFrequency = [ 5, 9, 12, 13, 16, 45 ];

let huffman = new HuffmanCoding();
huffman.buildHuffmanTree(characters, charactersFrequency)
huffman.printCode(huffman.root, '');