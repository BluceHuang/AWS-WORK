# aws-work
## using cloudformaion deploy and test lambda function
* 1. create dynamodb table
  > ```./script/create-table.sh```
* 2. create sns error notify   
  > 2.1 ```./script/create-sns.sh```  
    2.2 copy snsTopicArn form sns-name.json file and update src/config.js 
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