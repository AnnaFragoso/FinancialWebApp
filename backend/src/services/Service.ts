import Client from 'belvo';

export class Service {
  private client: Client;
  private secretId: string = process.env.SECRET_KEY_ID!;
  private secretPassword: string = process.env.SECRET_PASSWORD!;
  private env: string = process.env.ENV!;
  
  constructor() {
    this.client = new Client(this.secretId, this.secretPassword, this.env);
  }

  public async createWidget() {
    try {
      await this.client.connect()
      return await this.client.widgetToken.create();
    } catch (error) {
        console.log(error);
    }
  }

  public async linkRegister(institution: string, username: string, password: string) {
    try {
      await this.client.connect()
      return await this.client.links.register(institution, username, password);
    } catch (error) {
        console.log(error);
        return error;
    }
  }
  
  public async retrieveAccounts(linkId: string) {
    try {
      // const linkId = await this.linkRegister
        await this.client.connect()
        return await this.client.accounts.retrieve(linkId);
    } catch (error) {
        console.log(error);
    }
  }
}