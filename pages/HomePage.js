const { I } = inject();

module.exports = {

  // insert your locators and methods here
  jQueryURL: 'https://jqueryui.com/',
  jqueryTitleText: 'jQuery UI',
  menu: {
    Draggable : 'Draggable'
  }
  ,
  async goToHomePage(url){
    I.amOnPage(this.homeUrl.url);
  }

}
