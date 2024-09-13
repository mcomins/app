### REGIONAL: US-EAST-1 ###

> deploy API Gateway resources
```
aws cloudformation deploy --stack-name app-api-gateway \
    --template-file infrastructure/api-gateway.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --region us-east-1 \
    --profile default
```