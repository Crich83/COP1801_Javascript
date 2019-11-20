var reversenum=prompt("Enter number to be reversed")
function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
document.write(reverseNumber(reversenum));