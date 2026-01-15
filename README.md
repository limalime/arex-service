# Arex Service

Runs a small API to store and retrieve records keyed by `index` with fields `{ media_hash, validUpto, txHash, AmountPaid, payerAddress, recieverAddress }`.

### Endpoints
- **POST** `/hashes` — store a record
  - Body JSON:
    ```json
    {
      "index": "<unique-id>",
      "media_hash": "...",
      "validUpto": 1735689600,
      "txHash": "0x...",
      "AmountPaid": "1000000000000000000",
      "payerAddress": "0x...",
      "recieverAddress": "0x..."
    }
    ```
- **GET** `/hashes/:index` — retrieve by path param
- **GET** `/hashes?index=<id>` — retrieve by query param

### Setup

1. Create `.env` using `.env.example` fields (optional overrides only):
   - optionally `FIREBASE_COLLECTION=hashes`
   - optionally `PORT=3002`
2. Install deps and run (from `service/`):
   ```bash
   yarn install
   yarn dev
   ```

### Folder structure
```
arex-service/
  src/
    routes/
      routes.ts
    firebase.ts
    index.ts
  package.json
  tsconfig.json
  .env (not committed, optional)
  README.md
```

