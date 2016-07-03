

function toggleElement(id)
{
    if(document.getElementById(id).style.height == 'auto')
    	{document.getElementById(id).style.height = '0px';document.getElementById(id).style.padding = '0px';}
    else
    	{document.getElementById(id).style.height = 'auto';document.getElementById(id).style.padding = '10px 25px 10px 25px';}
}