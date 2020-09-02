#!/bin/bash
set -eo pipefail

if [[ $# -gt 0 ]] && [[ $1 == 'api' ]]
then
  FUNCTION=$(aws cloudformation describe-stack-resource --stack-name blank-api-nodejs --logical-resource-id acceptCsvData --query 'StackResourceDetail.PhysicalResourceId' --output text)
  echo $FUNCTION
  aws lambda invoke --function-name $FUNCTION --payload fileb://event-api.json out.json
  cat out.json
  echo ""
else
  FUNCTION=$(aws cloudformation describe-stack-resource --stack-name blank-nodejs --logical-resource-id acceptCsvData --query 'StackResourceDetail.PhysicalResourceId' --output text)
  echo $FUNCTION
  aws lambda invoke --function-name $FUNCTION --payload fileb://event.json out.json
  cat out.json
  echo ""
fi

