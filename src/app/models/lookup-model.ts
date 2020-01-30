export class LookupModel {
    id: number;
    desc: string;
    code: string;

    constructor(d = '', c = '') {
        this.desc = d;
        this.code = c;
    }
  }
