# parameters
param (
    $stackname,
    $bucketname
)
if ($stackname.Length -eq 0) {
    Write-Error "Parameter -stackname is mandatory"
    exit
}
if ($bucketname.Length -eq 0) {
    Write-Error "Parameter -bucketname is mandatory"
    exit
}

# react
Write-Host "-> *** Starting React build ***" -ForegroundColor yellow
npm run build --prefix ..\src\web\
Write-Host "-> *** Publishing to $bucketname ***" -ForegroundColor yellow
aws s3 sync ..\src\web\build s3://$bucketname

# done
Write-Host "-> *** Deployment done ***" -ForegroundColor green

aws cloudformation describe-stacks --stack-name $stackname --query "Stacks[0].Outputs[?OutputKey=='Domain']"