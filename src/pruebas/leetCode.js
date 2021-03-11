let nums = [2,7,11,15]
let  target = 9

let nums2 =[2,5,5,11]
let target2 = 10

var twoSum = function(nums, target) {
    let tan  = nums.length;
    for(let i = 0 ; i < tan ; i++){
        for(let k = i+1; k < tan ; k++){
            let sum = (nums[i] + nums[k]);
            console.log(i,k,sum);
            if( sum === target){
                return [i,k]
            }
        }
    }
};

//console.log(twoSum(nums2,target2));

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

ListNode.prototype.insert = function (node,data){
    if(node.next === null){
        node.next = new ListNode(data);
    }else{
        this.insert(node.next,data);
    }
}

ListNode.prototype.show = function (){
    let node = this;
    while(node !== null){
        console.log(node.val);
        node = node.next;
    }
}

lists1 = new ListNode(2);
lists1.insert(lists1,4);
lists1.insert(lists1,3);

lists2 = new ListNode(5);
lists2.insert(lists2,6);
lists2.insert(lists2,4);

var addTwoNumbers = function(l1, l2) {
    let num1 = "";
    while(l1 !== null){
        num1 = (l1.val).toString() + num1;
        l1 = l1.next;
    }
    let num2 = "";
    while(l2 !== null){
        num2 = (l2.val).toString() + num2;
        l2 = l2.next;
    }
    
    let sum = BigInt(num1) + BigInt(num2);
    console.log("suma: ", sum);
    let auxSum = sum.toString();
    
    let resultList = new ListNode(parseInt(auxSum[auxSum.length-1]));
    let forInit = auxSum.length - 2;
    let auxResultList = resultList;
    for(let i=forInit;i>=0;i--){
        auxResultList.next = new ListNode(parseInt(auxSum[i]));
        auxResultList = auxResultList.next;
    }
    return resultList;
};


var arraylists3 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
var arraylists4 = [5,6,4];
console.log(arraylists3.length);
lists3 = new ListNode(arraylists3[0]);
for(let i=1;i<arraylists3.length;i++){  
    lists3.insert(lists3,arraylists3[i]);
}

lists4 = new ListNode(arraylists4[0]);
for(let i=1;i<arraylists4.length;i++){
    lists4.insert(lists4,arraylists4[i]);
}

lists3.show();
console.log("-----------");
lists4.show();


addTwoNumbers(lists3,lists4).show();