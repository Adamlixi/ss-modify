// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "forge-std/Script.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";

// table imports
import { HeroInRotation, HeroInSeasonPassRotation } from "../src/codegen/index.sol";
import { GolemTemplateId, DragonTemplateId, WizardTemplateId, GolemTemplate, DragonTemplate, WizardTemplate } from "../src/codegen/Templates.sol";

contract CreateHeroes is Script {
  function run() external {
    IWorld world = IWorld(0xE3a6D6D5570f1d87D45036eAC17342FfE32d8F46);
    StoreSwitch.setStoreAddress(0xE3a6D6D5570f1d87D45036eAC17342FfE32d8F46);

    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    vm.startBroadcast(deployerPrivateKey);

    GolemTemplate();
    DragonTemplate();
    WizardTemplate();

    vm.stopBroadcast();
  }
}
