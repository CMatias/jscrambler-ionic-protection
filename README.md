# Protecting your Ionic application with Jscrambler

### 1. Install dependencies
```
npm install -g cordova ionic

npm install jscrambler --save-dev
```

### 2. Create an ionic project
```
ionic start myProj tabs
```

### 3. Create a new hook which uses [Jscrambler](https://jscrambler.com/)

Inside the `after_prepare` directory create a new hook. You can use the one provided [here](https://github.com/CMatias/jscrambler-ionic-protection/blob/master/hooks/after_prepare/jscrambler.js).

### 4. Build / Prepare the application
```
ionic prepare
```

or

```
ionic build <platform>
```
