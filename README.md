# aws-work
## using cloudformaion and s3 triggle lambda
* 1. create dynamodb table
  > ```./script/create-table.sh```
* 2. create sns error notify 
  > ```./script/create-sns.sh```
* 3. create s3 bucket for code deploy
  > ```./script/create-bucket.sh```
* 4. build lambda layer
  > ```./script/build-layer.sh```
* 5. deploy stack by cloudformation
  > ```./script/deploy.sh```
* 6. test lambda by s3 event
  > ```./script/invoke.sh```