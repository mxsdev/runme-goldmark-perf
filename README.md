Run with:

```
node ./wasm/test.js
```

Build the wasm module with:

```
GOOS=js GOARCH=wasm go build -o ./wasm/runme.wasm -trimpath ./main.go
```