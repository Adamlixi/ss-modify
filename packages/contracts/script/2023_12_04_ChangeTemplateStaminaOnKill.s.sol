// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "forge-std/Script.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";

import { ArcherTemplate, GolemTemplate, KnightTemplate, PikemanTemplate, RiderTemplate, SwordsmanTemplate } from "../src/codegen/Templates.sol";

contract ChangeTemplateStaminaOnKill is Script {
  function run() external {
    StoreSwitch.setStoreAddress(0x0c4363B384fBa51ABcaAeBB9b0c26Fe44eCeEe43);

    // Load the private key from the `PRIVATE_KEY` environment variable (in .env)
    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

    vm.startBroadcast(deployerPrivateKey);

    PikemanTemplate();

    vm.stopBroadcast();
  }
}