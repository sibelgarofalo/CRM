# parameter
param(
    $imagename,
    $ecr
)
if ($imagename.Length -eq 0) {
    Write-Error "Parameter -imagename is mandatory"
    exit
}
if ($ecr.Length -eq 0) {
    Write-Error "Parameter -ecr is mandatory"
    exit
}

# Build
docker build -t $imagename ../src/api/.
docker images filter --filter reference=$imagename

# Retag
docker tag $imagename $ecr
docker images filter --filter reference=$ecr
docker push $ecr