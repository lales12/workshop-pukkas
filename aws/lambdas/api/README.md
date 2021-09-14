# Serverless

Install serverless as global

```
npm install -g serverless
```

## Serverless framework

Allow work with different providers (azure, aws ...) without change nothing on the code and help work on local or deploy the resources, serverless have severals plugins to add more features
Use Yaml file to define all the configuration

### Commands

Serverless don't have very useful tools to work on local, for these reason we add serverless-offline plugin

Install (important use version 1.2)
```
npm install --dev serverless-plugin-typescript@1.2.0
```

Now we can run 
```
serverless offline
```

Deploy the service
```
serverless deploy
```