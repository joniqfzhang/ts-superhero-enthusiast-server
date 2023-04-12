# Getting Started with ts-superhero-enthusiast (server)

##### This project create a basic application for a superhero enthusiast, that can perform following functions:

```
 1. Allow a user to search for their favourite superhero.

 2. Select the superhero and see his/her image and power stats.

 3. Edit the power stats

 4. Save the image and stats to be viewed later.
```
 
#### The app would allow a user to search superheroes by name, see his/her details, edit them and view all their saved super heroes.
##### You can use https://superheroapi.com/ for fetching super hero details. (clicking this link might not work but type superheroapi.com in browser)
---
#### Assumptions: 
- there is no user account managment
- it assumes that users login to their own account.
---
##### The Thch stack are ReactJS, Apollo(GraphQL), NodeJS and mongodb (MARN)
---


## Install Server package.json denpendency
Under folder ts-superhero-enthusiast/server, you can
 1. install package :
> `npm install`

  2. run available Scripts (from package.json)

      #### 2.1 start development nodemon server by:
      >   `npm run dev` 
```
    based on tsconfig.json:
    {
      "compilerOptions": {
        "baseUrl": ".",
        "rootDirs": [
          "src"
        ],
        "outDir": "dist",
        "lib": [
          "es2020"
        ],
        "target": "es2020",
        "module": "esnext",
        "moduleResolution": "node16",
        "esModuleInterop": true,
        "types": [
          "node"
        ]
      },
      "ts-node": {
        "esm": true,
        "experimentalSpecifierResolution": "node",
      }
    }
```
2.2. compile & build server into dist folder : 
  >  `npm run tsc` 
``` 
base on :
1). tsconfig.base.json, 2). tsconfig.ems.json 3). tsconfig.cjs.json
```

2.3. start built server :  
> `npm start` 

```
with console logs like below :
> tsc --project tsconfig.esm.json & tsc --project tsconfig.cjs.json

connectDB mongodb+srv://qfzhang18:test123@cluster0.nvqpr1i.mongodb.net/myhero-db?retryWrites=true&w=majority
heroInfoDBConnection Promise { <pending> }
🚀  Server ready at: http://localhost:4000/ 
connected to database successfully!
```
***Note: port unmber can be change with environment PORT variable defined in .env***





