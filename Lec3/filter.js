var arr = [2,4,8,9,34,56,45,9,7,5,6734];

Array.prototype.filterReplica = function (logic) {
    let output = [];
    for(var i=0;i<this.length;i++){
        if(logic(this[i])){

            output.push(logic(this[i]));
        }
    }
    return output;    
}
function odd_even(x){
    if(x%2==0){
      return x;
    }
    
}
const ans = arr.filterReplica(odd_even);
console.log(ans);

