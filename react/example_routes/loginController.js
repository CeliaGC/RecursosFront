// // server.js
// const loginController = () => {

//   const jsonServer = require('json-server');
//   // import { create, router as _router, defaults, bodyParser } from 'json-server';
//   const server = jsonServer.create();
//   const router = jsonServer.router('db.json');
//   const middlewares = jsonServer.defaults();
//   const PORT = 3000;
  
//   server.use(middlewares);
//   server.use(jsonServer.bodyParser);
  
//   server.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const user = db.users.find(user => user.username === username && user.password === password);
  
//     if (user) {
//       res.status(201).json({ message: 'Login successful', user });
//     } else {
//       res.status(401).json({ message: 'Invalid username or password' });
//     }
//   });
  
//   server.use(router);
  
//   server.listen(PORT, () => {
//     console.log(`JSON Server is running on http://localhost:${PORT}`);
//   });

// };
// export default loginController;

