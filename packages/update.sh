#!/bin/bash
cd /Users/adam/ss-test2_副本/packages/contracts
echo $1
pnpm run templategen $1
forge script migrations/1704334615_CreateHeroes.sol --sig "run()" --rpc-url http://127.0.0.1:8545