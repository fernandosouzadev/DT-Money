import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models:{
    transaction: Model,
  },
  
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Criação de site',
          amount:6000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date('2021-08-15 09:50:00')
        },

        {
          id: 2,
          title: 'Financiamento',
          amount: 360,
          type: 'withdraw',
          category: 'Apartamento',
          createdAt: new Date('2021-08-25 19:05:00')
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions',()=>{

      return this.schema.all('transaction')

    })

    this.post('/transactions', (schema , request) =>{
      
        const data = JSON.parse(request.requestBody)
        return schema.create('transaction', data)
      
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
