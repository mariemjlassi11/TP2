const express = require('express');  
const app = express();  
const port = 3000;  

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

let users = [  
    { id: 1, name: "Alice", email: 'alice@example.com' },  
    { id: 2, name: 'Bob', email: 'bob@example.com' }  
];  

app.get("/users", (req, res) => {  
    res.json(users);  
});  

app.get('/users/:id', (req, res) => {  
    const userId = parseInt(req.params.id);  
    const user = users.find(u => u.id === userId);  
    if (!user) {  
        return res.status(404).send('User not found');  
    }  
    res.json(user);  
});  

app.listen(port, () => {  
    console.log('Server running on port ${port}');  
});