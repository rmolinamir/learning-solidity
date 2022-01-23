export interface SmartContract<Methods extends object = object> {

  abi: AbiItem[];

  address: string;

  networks: {
    [key: number]: {
      events: object;
      links: object;
      address: string;
      transactionHash: string;
    },
  };

  methods: Methods;

}
