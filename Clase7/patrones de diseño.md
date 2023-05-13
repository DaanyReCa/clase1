# Desing Patterns

Builder, Factory y Singleton

## Builder

```javascript
class Authentication {
    constructor() {}

    setProvider(provider){
        this.provider = provider;
        return this;
    }
    serOAuthUrl(url) {
        this.url =url;
    }

    build() {
        //process sttings
        return this;
    }
}

const obj =new Authentication()
.setPtovider("firebase")
.build();
console.log("new instamce", instanceof obj); //Authentication
class
```

## Factory
```javascript
 
 class AuthenticationFactory {
    static createFirebaseAuth()
return new Authentication()
.setProvider("firebase")
.build(;)
    }

     static create(provider){
return new Authentication()
.setProvider("firebase")
.build(;)

 }

const obj = AuthenticationFactory.create("firebase");
```

## Singleton (no es el whisky)
```javascript

class Authentication {
    static_instance;

    static getInstance(){
        if(Authentication._instance ){
            Authentication._instance =new Authentication().
            setProvider("Google"). build();
        }
        return Authentication._instance;
    }

}
```


