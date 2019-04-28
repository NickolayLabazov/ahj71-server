const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

app.use(koaBody({
    urlencoded: true,
    }));
     
/* const subscriptions = new Map();
app.use(async ctx => {
    //const { name, phone } = ctx.request.querystring;
    const { name, phone } = ctx.request.body;
    ctx.response.set({
    'Access-Control-Allow-Origin': '*',
    });
      if (subscriptions.has(phone)) {
    ctx.response.status = 400
    ctx.response.body = 'You already subscribed'
    return;
    }
    subscriptions.set(phone, name);  
    ctx.response.body = 'Ok';
    }); */

    let tickets = [{id: 1, name: 'text', description: 'Описание', status: false, created: '1.01.01'}, {id: 2, name: 'text2', description: 'Описание', status: false, created: '1.01.01'}, {id: 3, name: 'text3', description: 'Описание', status: false, created: '1.01.01'}];
    
    app.use(async ctx => {
        //const tick =ctx.request.querystring;
        
        ctx.response.set({
        'Access-Control-Allow-Origin': '*',
        });
       if(ctx.request.method === 'GET'){
        if(ctx.request.querystring === 'tickets'){
            ctx.response.body = tickets;
        }    
       }else if(ctx.request.method === 'POST'){
         let ticked = JSON.parse(ctx.request.body);
          let id = [];
         let newId = 10;
         for(let elem of tickets){
             id.push(elem.id);
         }
         for(let i = 0; i <= id.length; i += 1){
             if(id.indexOf(i) === -1){
                 newId = i;
                 break;
             }
         }
         ticked.id = newId; 
        tickets.push(ticked);
        ctx.response.body = tickets;
       }

             
    }); 










    /* app.use(async ctx => {
        //const tick =ctx.request.querystring;
        
        ctx.response.set({
        'Access-Control-Allow-Origin': '*',
        });
       
        if(ctx.request.querystring === 'tickets'){
            ctx.response.body = tickets;
        }        
    });        */  
     
          
            
const server = http.createServer(app.callback()).listen(7070);
       
       
       
         
 
 
      
 
 
       
    
    
        
 
 
     
       
       
         
 
       
        
 
 
     
       
             
    
    
 
 
       
 
       
          
          
        
      
      