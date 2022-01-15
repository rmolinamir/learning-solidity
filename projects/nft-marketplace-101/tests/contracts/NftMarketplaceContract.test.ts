/**
 * NOTES:
 * 
 * - As usual, the test suites are implemented using the `describe` function.
 * - As usual, the test cases are implemented using the `test` or `it` functions.
 * - Test suites are NOT independent from each others.
 * - This means that test cases will have the same context regardless of parent suite.
 *    - E.g. Minting a token under a specific suite will result in that token being
 *      accessible from all test cases regardless of suite.
 * 
 * [Test cases and test suites](https://www.ibm.com/docs/en/elm/7.0.0?topic=scripts-test-cases-test-suites)
 */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import faker from 'faker';
import { describe, test, before } from 'mocha';
import { NftMarketplaceContractInstance } from '../../contracts/types';
import { Transfer } from '../../contracts/types/ERC721';
import nftMarketplaceConfig from '../../nft-marketplace-config';
import { NullAddress } from './mocks/NullAddress';

chai.use(chaiAsPromised);
const { expect } = chai;

const mintedNfts: string[] = [];

/**
 * Returns a Promise that resolves the minted token value.
 * Also stores the minted NFT into the `mintedNfts` array.
 */
async function mint(contract: NftMarketplaceContractInstance, nftVal: string = faker.datatype.uuid()): Promise<string> {

  await expect(contract.mint(nftVal)).to.eventually.be.fulfilled;

  mintedNfts.push(nftVal);

  return nftVal;

}

contract('NftMarketplaceContract', accounts => {

  let nftMarketplaceContract: NftMarketplaceContractInstance;
  const NftMarketplaceContract = artifacts.require('NftMarketplaceContract');

  before(async () => { nftMarketplaceContract = await NftMarketplaceContract.deployed(); });

  describe('deployment', () => {

    test('deploys successfully', async () => {

      expect(nftMarketplaceContract.address).not.to.be.empty;
      expect(nftMarketplaceContract.address).not.to.be.eq(0x0);

    });

    test('contract name matches the marketplace config', async () => {

      await expect(nftMarketplaceContract.name()).to.eventually.be.eq(nftMarketplaceConfig.name);

    });

    test('contract symbol matches the marketplace config', async () => {

      await expect(nftMarketplaceContract.symbol()).to.eventually.be.eq(nftMarketplaceConfig.symbol);

    });

  });

  describe('minting', () => {

    test('creates a new token', async () => {

      const nft = faker.datatype.uuid();

      const res = await nftMarketplaceContract.mint(nft);

      mintedNfts.push(nft);

      const totalSupply = await nftMarketplaceContract.totalSupply();
      expect(totalSupply.toNumber()).to.be.eq(1);

      const { event, args } = res.logs[0];

      expect(event).to.be.eq('Transfer');

      const transferArgs = args as Transfer['args'];
      expect(transferArgs.from).to.be.eq(NullAddress, 'Must be null address when minting.');
      expect(transferArgs.to).to.be.eq(accounts[0], 'By default, the first account should perform the mint.');
      expect(transferArgs.tokenId.toNumber()).to.be.eq(0, 'The implementation of token IDs should be integer counters starting at 0.');

    });

    test('cannot mint the same NFT value', async () => {

      const nft = faker.datatype.uuid();

      await expect(nftMarketplaceContract.mint(nft)).to.eventually.be.fulfilled;
      await expect(nftMarketplaceContract.mint(nft)).to.eventually.be.rejected;

      mintedNfts.push(nft);

    });

  });

  describe('enumeration/indexing of the tokens', () => {

    test('tokens are queryable by tokenIds/indexes', async () => {

      await mint(nftMarketplaceContract);
      await mint(nftMarketplaceContract);
      await mint(nftMarketplaceContract);

      const totalSupplyBn = await nftMarketplaceContract.totalSupply();
      const totalSupply = totalSupplyBn.toNumber();

      expect(totalSupply).to.be.equal(mintedNfts.length);

      for (let i = 0; i < totalSupply - 1; i++) {

        const tokenIdBn = await nftMarketplaceContract.tokenByIndex(i);
        const tokenId = tokenIdBn.toNumber();

        const nft = await nftMarketplaceContract.nftList(tokenId);

        expect(mintedNfts).to.include(nft);

      }

    });

  });

});
