class LongestCommonSubsequence {
    constructor(word, sequence){
        this.word = word;
        this.sequence = sequence;
        this.matrix = new Array(this.word.length +1 ).fill(0).map((el) => new Array(this.sequence.length + 1).fill(0));

    }

    get_longest(){
        return this.get_longest_helper(0, 0);
    }

    get_longest_helper(i, j){
        if( i > this.word.length - 1 || j > this.sequence.length -1)
            return 0;
        else if(this.word[i] === this.sequence[j])
            return 1 + this.get_longest_helper(i + 1, j + 1);
        else return Math.max(this.get_longest_helper(i + 1, j), this.get_longest_helper(i, j + 1))
    }

    get_longest_dynamic(){
        for(let i = 1; i <= this.word.length; i++){
            for(let j = 1; j <= this.sequence.length; j++){
                if(this.word[i - 1] === this.sequence[j - 1])
                    this.matrix[i][j] = 1 +  this.matrix[i-1][j-1]
                else this.matrix[i][j] =  Math.max(this.matrix[i - 1][j],this.matrix[i ][j - 1] )
            }
        }

        return this.matrix[this.word.length][this.sequence.length];
    }
}

let lcs = new LongestCommonSubsequence('bd', 'abcd');

console.log(lcs.get_longest())
console.log(lcs.get_longest_dynamic())
