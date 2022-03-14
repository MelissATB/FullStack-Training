//HomeWork: Write a JavaScript program that  sorts the items of an array.
var n = prompt ("How many element are in your array?")
var x
var array = []
var i=0;
for (i;i<n;i++)
{
  array[i] = parseInt(prompt ("Give the element n°"+(i+1)))
}
for (i=0;i<n-1;i++)
{
    var j = i+1
    for (j;j<n;j++)
    {
        if (array[i]>array[j])
        {
            x=array[i]
            array[i]=array[j]
            array[j]=x
        }
    }
}
console.log(array)