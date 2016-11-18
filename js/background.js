
// function myfunction(select)
// {
 	// chrome.tabs.create({url:'https://twitter.com/intent/tweet?text='+select.selectionText });
	

// }
// chrome.contextMenus.create({
// 	title:'Ab',
// 	contexts:['selection'],
// 	onclick:myfunction
// });
var obj=new XMLHttpRequest();
obj.onreadystatechange=function()
{
	var i=JSON.parse(obj.responseText);
	for(var j=0;j<i.articles.length;j++)
		console.log(i.articles[j].description);
}
obj.open("GET","https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=4e5a0680a46c4499958aa9521dbcac9c",true);
obj.send();