export interface SmartContract<Methods extends object = object> {

  address: string;

  methods: Methods;

}
