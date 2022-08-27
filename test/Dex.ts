import { ethers } from "hardhat";
import { Contract, ContractFactory, constants, BigNumber } from "ethers";

describe("DEX test", function () {
  let addr0: any;
  let addr1, addr2, addr3, addrs;
  let Uniswap: Contract;

  before(async function () {
    const [_addr0, _addr1, _addr2, _addr3, ..._addrs] =
      await ethers.getSigners();
    addr0 = _addr0;
    addr1 = _addr1;
    addr2 = _addr2;
    addr2 = _addr2;
    addr3 = _addr3;
    addrs = _addrs;

    const UniswapV2Factory = await ethers.getContractFactory(
      "UniswapV2Factory"
    );
    Uniswap = await UniswapV2Factory.connect(addr0).deploy(addr0.address);
  });

  describe("fetch oracle data", function () {
    it("consoling the token address", async function () {
      console.log(await Uniswap.INIT_CODE_PAIR_HASH());
      let codepair: string = await Uniswap.INIT_CODE_PAIR_HASH()
      codepair = codepair.substring(2);
      console.log(codepair)
    });
  });
});
