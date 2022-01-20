export function getNftImage(nft: string): string {

  const parts = nft.split(/\/|\\/);

  const nftFileName = parts[parts.length - 1];

  const img = require(`../img/procedually-generated-images/${nftFileName}`) as string;

  return img;

}
