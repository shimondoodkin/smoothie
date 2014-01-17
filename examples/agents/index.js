status=function (){
 console.log("ils:"+coins.ils+" usd:"+coins.usd+" ils/usd:"+(coins.ils/coins.usd) )
}
//setInterval(status,30);;
coins={
 ils:1
,usd:1
};

agents=[];

addagent=function (agent)
{
 if(agent.start)agent.start();
 agent.timer=setInterval(function(){agent.run();},agent.interval); agents.push(agent);
}


usd={
  interval:10,
  coins:0,
  start:function(){
   this.interval=Math.floor(Math.random()*100)+50
   this.limit=Math.floor(Math.random()*100)+5
   this.unit=3//Math.floor(Math.random()*50)+5
   //this.limit=this.limit*this.unit
  },
  run:function (){
    if(this.coins>this.limit)
    {
	 var buy=-this.coins;
    }
	else
     var buy=Math.floor(Math.random()*this.unit)+0;
	 
    this.coins+=buy;
	coins.usd+=buy;
  }
}

ils={
  interval:10,
  coins:0,
  start:function(){
   this.interval=Math.floor(Math.random()*100)+5
   this.limit=Math.floor(Math.random()*100)+5
   this.unit=3//Math.floor(Math.random()*50)+5
  },
  run:function (){
    if(this.coins>this.limit)
    {
	 var buy=-this.coins;
    }
	else
     var buy=Math.floor(Math.random()*this.unit)+0;
	 
    this.coins+=buy;
	coins.ils+=buy;
  }
}

for(var i=0;i<1;i++)
{
 addagent(usd);
 addagent(ils);
}



var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/coinsstatus', function(req, res){
  res.send(JSON.stringify(coins));
});

app.listen(3000);
console.log('Express started on port 3000');