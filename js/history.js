chrome.history.search({text:"",maxResults:10},function(history)
{
	
	for(var i=0;i<history.length;i++)
	{
		$('body').append((history[i].url)+"<br>");

	}
});