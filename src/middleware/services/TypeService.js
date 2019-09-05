export default {
  loadTypes() {
    return this.apiClient
      .get('contract-types')
      .then(res => {
        return this.data(false, res.data);
      });
  }
};
