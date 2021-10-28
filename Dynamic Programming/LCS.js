class LongestCommonSubsequence {
    constructor(word, sequence){
        this.word = word;
        this.sequence = sequence;
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
}


console.log(new LongestCommonSubsequence('abdace', 'babce').get_longest())