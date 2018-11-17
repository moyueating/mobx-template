import Global from './Global';

class appStore {
  constructor() {
    this.Global = new Global()
  }
}

export default new appStore()