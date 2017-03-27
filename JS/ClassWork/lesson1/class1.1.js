var user={};
user.name="Vasya";
user.surname="Petrov";
user.name="Sergey";

delete user.name;

function IsEmpty(obj)
{
	for(var key in obj){ return false;}
		return true;
		
}
var res;
res=IsEmpty(user);
alert (res);
var menu={};
res=IsEmpty(menu);
alert (res);

