Documentacion Básica Proyecto Mini Core

## Iniciar Proyecto

Una vez clonado el repositorio, ejecute los siguientes comandos en la consola:

```bash
npm install axios styled-components
npm run dev
```

Abra [http://localhost:3000/home](http://localhost:3000/home) con el navegador para ver la página con los gastos filtrados.

Para editar los componentes, diríjase a cada uno de los listados bajo la carpeta Components o la página principal en App/(content)/home.

Este proyecto depende del API creado en Python en el siguiente enlace [`(https://github.com/DoAle34411/backend-minicore)`](https://github.com/DoAle34411/backend-minicore) para obtener los datos desde una base de datos no relacional.

## Aprender más

Para aprender más sobre Next js, revisa los siguientes enlaces

- [Next.js Documentation](https://nextjs.org/docs) - sobre las características de Next.
- [Learn Next.js](https://nextjs.org/learn) - un tutorial de Next.

## Recomendación Deploy

En caso de querer deployar, asegúrate que el siguiente comando no genere errores:
```bash
npm run build
```
