import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe, test, before } from 'mocha';
import { NftMarketplaceContractInstance } from '../types';
import nftMarketplaceConfig from '../nft-marketplace-config';

chai.use(chaiAsPromised);
const { expect } = chai;

contract('NftMarketplaceContract', accounts => {

  const NftMarketplaceContract = artifacts.require('NftMarketplaceContract');

  describe('deployment', () => {

    let nftMarketplaceContract: NftMarketplaceContractInstance;

    before(async () => { nftMarketplaceContract = await NftMarketplaceContract.deployed(); });

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

});
