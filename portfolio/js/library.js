var LoopCall = 0;
var BitValue;
var LiteValue;
var start = (new Date()).getTime();
var current;
var elapsed;
var number = 0;
function Refresh()
{
	
	Pattern();
}
function Pattern()
{
	number++;
	console.log("teste: " + number)
}

//Loop
function deltaTime()
{
	current = (new Date()).getTime();
	elapsed = current - start;
	start = current;
	var delta = elapsed / 1000;			
	return delta;
}
function NoLoopTimeout()
{
	LoopCall += deltaTime()*60;
	if(LoopCall>1)
	{
		loop();
		LoopCall -= 1;
	}
	setTimeout(NoLoopTimeout, 1);
}
function loop()
{
	Refresh();
}
loop();
NoLoopTimeout();