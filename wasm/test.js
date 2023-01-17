const fs = require('fs/promises')
const path = require('path')
require('./wasm_exec')

async function initWasm() {
    const go = new globalThis.Go()
    const wasmFile = await fs.readFile(path.join(__dirname, 'runme.wasm'))
    return WebAssembly.instantiate(wasmFile, go.importObject).then(
      (result) => {
        go.run(result.instance)
      },
      (err) => {
        console.error(`[Runme] failed initializing WASM file: ${err.message}`)
        return err
      }
    )
  }

;(async function main() {
    await initWasm()
})()