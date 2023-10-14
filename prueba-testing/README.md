
1. Montar proyexto
<code>npx create-next-app testing-app</code>


*Comprobar Jest instalado en package.json que existee: 
"devDependencies": {
    "jest": "^29.7.0"
  }
2. Instalar Jest 
npm install --save-dev jest


3. Instalar Jest Enviroment 
npm install --save-dev jest-environment-jsdom
"devDependencies": {
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }


4.  Instalar RTL
npm install --save-dev @testing-library/react
"devDependencies": {
    "@testing-library/react": "^14.0.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }


5. Instalar Babel
npm install --save-dev @babel/preset-react @babel/preset-env
"devDependencies": {
    "@babel/preset-env": "^7.23.2",
    "@babel/preset-react": "^7.22.15",
    "@testing-library/react": "^14.0.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }


6. Instalar controlador de eventos de usuario
npm install --save-dev @testing-library/user-event
"devDependencies": {
    "@babel/preset-env": "^7.23.2",
    "@babel/preset-react": "^7.22.15",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.1",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }


