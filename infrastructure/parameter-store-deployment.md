### GLOBAL ###

> deploy parameters to Parameter Store
```
aws cloudformation deploy --stack-name app-parameters \
    --template-file infrastructure/parameter-store.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --region us-east-1
    --profile default
```