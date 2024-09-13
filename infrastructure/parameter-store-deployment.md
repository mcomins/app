### REGIONAL: US-EAST-1 ###

> deploy Parameter Store resources
```
aws cloudformation deploy --stack-name app-parameters \
    --template-file infrastructure/parameter-store.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --region us-east-1 \
    --profile default
```