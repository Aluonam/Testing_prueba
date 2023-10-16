


--------------------**INSTALACIONES**-----------------
1. Montar proyecto
<code>npx create-next-app testing-app</code>


*Comprobar Jest instalado en package.json que existe: 
"devDependencies": {
    "jest": "^29.7.0"
  }
2. Instalar Jest 
npm install --save-dev jest


3. Instalar Jest Enviroment 
npm install --save-dev jest-environment-jsdom
```JSON
"devDependencies": {
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }
```

4.  Instalar RTL
npm install --save-dev @testing-library/react
```JSON
"devDependencies": {
    "@testing-library/react": "^14.0.0", //-> Este es el nuevo script
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }
```

5. Instalar Babel
npm install --save-dev @babel/preset-react @babel/preset-env
```JSON
"devDependencies": {
    "@babel/preset-env": "^7.23.2", //-> Este es el nuevo script
    "@babel/preset-react": "^7.22.15", //-> Este es el nuevo script
    "@testing-library/react": "^14.0.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }
```

6. Instalar controlador de eventos de usuario
npm install --save-dev @testing-library/user-event
```JSON
"devDependencies": {
    "@babel/preset-env": "^7.23.2",
    "@babel/preset-react": "^7.22.15",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.1", //-> Este es el nuevo script
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }
```
7. Instalamos jest-dom para algunas funciones con el expect
npm add --dev @testing-library/jest-dom



-------------------**FICHEROS**--------------------
8. Si no existe ese fichero en tu protecto: Crear fichero llamado .babelrc (sin nombre) que tenga el siguiente código:
Si hay fichero babel.config.js dentro del proyecto: añadir:
```JSON
{
    "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

9. En next.config.js añadir: (porque da error next con babel).
```JS
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  //linea que soluciona el error con babel.
  experimental: { 
    forceSwcTransforms: true,
  },
  //_______________________________________
  
}

module.exports = nextConfig
 ```

9. Añadir en el package.json un script para lanzar los test

```JSON
{
  ...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest" //-> Este es el nuevo script que hemos añadido.
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    "@babel/preset-env": "^7.22.20",
    "@babel/preset-react": "^7.22.15",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.1",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }
}
```

10. Crear fichero jest.config.js (para configurar Jest y poder lanzar RTL).
```javascript
module.exports = {
  // Configuraciónes de Jest
  testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
};
```