var numbers=[1,2,-31,24,-67,5,3,555,79,-4,21,33,89,-90];
var max=0;
var min=0;
numbers.forEach(function(item,i,arr)
{
if (arr[i]>max) {max=arr[i];}
});
alert (max);

numbers.forEach(function(item,i,arr)
{
if (arr[i]<min) {min=arr[i];}
});
alert (min);

var arr2=[];

numbers.forEach(function(item,i,arr)
{
if (arr[i]>0||arr[i]%2==0) {arr2.push(arr[i]);}
});
alert (arr2);