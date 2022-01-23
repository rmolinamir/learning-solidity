import { expect, use } from 'chai';
import asPromisd from 'chai-as-promised';
import { ethers } from 'hardhat';
import { MockProvider, solidity } from 'ethereum-waffle';
import faker from 'faker';
import { DeBay } from '../typechain';

use(asPromisd);
use(solidity);

const NullAddress: string = '0x0000000000000000000000000000000000000000';

describe('DeBay', function () {

  const [wallet] = new MockProvider().getWallets();
  let deBay: DeBay;

  beforeEach(async () => {

    const DeBay = await ethers.getContractFactory('DeBay');

    deBay = await DeBay.deploy();
    await deBay.deployed();

  });

  describe('metadata', () => {

    it('should have the correct symbol', async function () {

      await expect(deBay.name()).to.eventually.eq('DeBay');

    });

    it('should have the correct name', async function () {

      await expect(deBay.symbol()).to.eventually.eq('DBAY');

    });

  });

  describe('mint', () => {

    it('should mint from NullAddress to sender\'s address', async function () {

      const expectedId = 1;

      const image = faker.random.image();

      const mintTx = deBay.mintItem(wallet.address, image);

      // wait until the transaction is mined
      await expect(mintTx).to
        .emit(deBay, 'Transfer')
        .withArgs(NullAddress, wallet.address, expectedId);

    });

    it('should should map token to the correct URI and sender\'s address', async function () {

      const image = faker.random.image();

      const receipt = await deBay.mintItem(wallet.address, image);

      const tokenId = receipt.v;

      await expect(deBay.ownerOf(tokenId!)).to.eventually.be.eq(wallet.address);
      await expect(deBay.tokenURI(tokenId!)).to.eventually.be.eq(image);

    });

    it('should revert invalid minting', async () => {

      await expect(deBay.mintItem(NullAddress, '')).to.be.reverted;

    });

  });

});
