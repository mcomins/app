### REGIONAL: US-EAST-1 ###

> deploy parameters to Parameter Store
```
aws cloudformation deploy --stack-name app-route-53 \
    --template-file infrastructure/route-53.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --region us-east-1 \
    --profile default
```