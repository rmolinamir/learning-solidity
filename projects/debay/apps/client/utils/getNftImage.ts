export function getNftImage(nft: string): string {

  const parts = nft.split(/\/|\\/);

  const nftFileName = parts[parts.length - 1];

  return `/assets/procedually-generated-images/${nftFileName}`;

}
