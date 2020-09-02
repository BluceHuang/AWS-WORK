# aws-work
## using cloudformaion and s3 trigger lambda
* 1. create dynamodb table
  > ```./script/create-table.sh```
* 2. create sns error notify 
  > ```./script/create-sns.sh```
* 3. create s3 bucket for code deploy
  > ```./script/create-bucket.sh```
* 4. build lambda layer
  > ```./script/build-layer.sh```
* 5. deploy stack by cloudformation
  > s3 trigger: ```npm run deploy```  
  > api gateway trigger:  ```npm run deploy -- api```
* 6. invoke lambda function by event
  > s3 trigger:  ```npm run invoke```  
  > api gateway trigger:  ```npm run invoke -- api```