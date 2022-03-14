//Homework: Remove Duplicates from Sorted Array( no predefined functions allowed)
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
        else if(array[i]==array[j])
        {
            var k = j;
            for (k;k<n;k++)
            {
                array[k]=array[k+1]
            }
            n--
        }
    }
}
console.log(array)