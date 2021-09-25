var xhttp=new XMLHttpRequest();
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.onload=function()
{
        var response=JSON.parse(xhttp.responseText);
        // console.log(response[0]);
        var todo=response.id;
        var op = " ";
        op += "<th>&nbsp;sl.no&nbsp;</th><th>list</th><th>&nbsp;check&nbsp;</th></tr>";
        for(var i=0;i<response.length;i++)
        {
            var ch=response[i].completed;
            // console.log(ch);
            if(ch==true)
            {
                op += "<tr>" + "<td>" + response[i].id + "</td>" +  "<td>"+"<s>" + response[i].title +"</s>"+ "</td>" + "<td>" + "<input class=check type=checkbox disabled checked>" + "</td>" + "</tr>" ;               
            }
            else
            {
                op += "<tr>" + "<td>" + response[i].id + "</td>" +  "<td>" + response[i].title + "</td>" + "<td>" + "<input class=check type=checkbox onchange=done() >" + "</td>" + "</tr>" ;
            }

        }       
    document.getElementById("demo").innerHTML=op;
};

xhttp.send();

