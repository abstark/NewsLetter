var connectionStatus = navigator.onLine ? 'online' : 'offline';
if(connectionStatus=="offline")
{
	$('.content').append("<center class='text-danger'>You are not Connected to Internet.</center>");
}
else
{	
var d=new Date();
var obj=new XMLHttpRequest();
obj.onreadystatechange=function()
{
	$('.content').empty();
	$('.content').append("Updated on"+d+"<br>");
	var i=JSON.parse(obj.responseText);
	for(var j=0;j<i.articles.length;j++)
	{
		if(i.articles[j].description!=null)
		{
			$('.content').append("<strong>"+(j+1)+"."+i.articles[j].title+"<br></strong>");
			
			  

		}
	}
}
obj.open("GET","https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=4e5a0680a46c4499958aa9521dbcac9c",true);
obj.send();
var m=document.getElementById('a');
m.addEventListener("change",function()
{
	var k=document.getElementById('a').value;
	if(k==="Indian")
	{
		$('#text').hide();
		var obj=new XMLHttpRequest();
		obj.onreadystatechange=function()
		{
			$('.content').empty();
			$('.content').append("updated on"+d+"<br>");
			var i=JSON.parse(obj.responseText);
			for(var j=0;j<i.articles.length;j++)
			{

				if(i.articles[j].description!=null)
				{
					$('.content').append((j+1)+".<strong>"+i.articles[j].title+"</strong><br>");
					// $('.content').attr("href", i.articles[j].url);
					
					// $('.content').append("<br>");
					// $(this).wrap("<a href='"+i.articles[j].url+"'></a>");

				}
			}
		}
		obj.open("GET","https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=4e5a0680a46c4499958aa9521dbcac9c",true);
		obj.send();
	}
	else if(k==="Sports")
	{
		$('#text').hide();
		var obj=new XMLHttpRequest();
		obj.onreadystatechange=function()
		{

			$('.content').empty();
			$('.content').append("updated on"+d+"<br>");
			var i=JSON.parse(obj.responseText);
			for(var j=0;j<i.articles.length;j++)
			{
				if(i.articles[j].description!=null)
				{
					$('.content').append("<strong>"+(j+1)+"."+i.articles[j].title+"<br></strong>");

				}
			}
		}
		obj.open("GET"," https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=4e5a0680a46c4499958aa9521dbcac9c",true);
		obj.send();	
	}

//for Gaming

else if(k==="Gaming")
{
	$('#text').hide();
	var obj=new XMLHttpRequest();
	obj.onreadystatechange=function()
	{

		$('.content').empty();
		$('content').append("updated on"+d+"<br>");
		var i=JSON.parse(obj.responseText);
		for(var j=0;j<i.articles.length;j++)
		{
			if(i.articles[j].description!=null)
			{
				$('.content').append("<strong>"+(j+1)+"."+i.articles[j].title+"<br></strong>");

			}
		}
	}
	obj.open("GET","https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=4e5a0680a46c4499958aa9521dbcac9c",true);
	obj.send();	
}

//for Business

else if(k==="Business")
{
	$('#text').hide();
	var obj=new XMLHttpRequest();
	obj.onreadystatechange=function()
	{

		$('.content').empty();
		var i=JSON.parse(obj.responseText);
		for(var j=0;j<i.articles.length;j++)
		{
			if(i.articles[j].description!=null)
			{
				$('.content').append("<strong>"+(j+1)+"."+i.articles[j].title+"<br></strong>");

			}
		}
	}
	obj.open("GET","https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=4e5a0680a46c4499958aa9521dbcac9c",true);
	obj.send();	
}
});



chrome.notifications.create({
	type:'basic',
	title:'NewsLetter',
	iconUrl:'image/news.png',
	message:'Check out the latest news.'
});	

}