# ReactJestEnzymeSample
Reactのテストコードサンプル

ghpages: https://k8shiro.github.io/ReactJestEnzymeSample/

**起動**

```
docker-compose run --rm --service-ports node ash -c "cd \$REACT_APP_NAME; yarn start"
```

**buildと公開**

```
docker-compose run --rm --service-ports node ash -c "cd \$REACT_APP_NAME; yarn build"
rm -rf docs/*
cp -rf app/build/* docs
```