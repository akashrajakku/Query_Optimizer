const express= require('express');
const app=express();

const {PrismaClient}= require('@prisma/client');
const client=new PrismaClient();

app.use(express.json());

//testing express app
app.get('/', (req, res)=>{
    res.send("app is up");
})

//testing prisma integration
app.get('/test', async (req, res) => {
    try {
      const log = await client.queryLog.create({
        data: {
          query: 'SELECT * FROM users',
          analysis: 'No issues detected',
          suggestions: 'N/A',
        },
      });
      res.json(log);
    } catch (error) {
      console.error('Error creating query log:', error);
      res.status(500).send('Server Error');
    }
  });
  


app.listen(3000, ()=>{
    console.log("app is up on p: 3000");
})