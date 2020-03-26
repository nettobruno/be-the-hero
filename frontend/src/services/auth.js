class Auth{
  constructor(){
    this.ID_KEY = 'ongId';
    this.NAME_KEY = 'ongName';
  }
  isAuthenticated() {
    return localStorage.getItem(this.ID_KEY) ? true : false;
  }

  getOng() {
    let id = localStorage.getItem(this.ID_KEY);
    let name = localStorage.getItem(this.NAME_KEY);

    return {
      id,
      name
    }
  }

  login(id, name) {
    localStorage.setItem(this.ID_KEY, id);
    localStorage.setItem(this.NAME_KEY, name);
  }

  logout() {
    localStorage.removeItem(this.ID_KEY);
    localStorage.removeItem(this.NAME_KEY);
  }
}

export default new Auth();