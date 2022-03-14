//Homework: Remove a specific Element from an array
var n = prompt ("How many element are in your array?")
var array = []
var i=0
for (i;i<n;i++)
{
  array[i] = parseInt(prompt ("Give the element n°"+(i+1)))
}
var y = parseInt(prompt("Give the element you want to delete"))
i=0;
while(i<n && array[i]!==y)
  i++;
if (i!==n)
{
  for (i;i<n;i++)
    array[i]=array[i+1]
}
n--;
console.log(array)