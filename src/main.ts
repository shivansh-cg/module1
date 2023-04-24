export class Main {
  #fetch: any;
  special_func = ()=>{
    return "Bye From Module1";
  }
  constructor(fetch: any) {
    this.#fetch = fetch;
  }

  async getData() {
    const res = await this.#fetch('https://google.com');
    return res.json();
  }
}
