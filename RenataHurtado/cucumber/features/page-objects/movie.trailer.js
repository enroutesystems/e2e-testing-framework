class MovieTrailer {
  constructor() {
    this.parentLocator = `.ipc-page-grid`;
  }
  get player() {
    // return $(this.parentLocator).$(`a=${name}`);
    return $(this.parentLocator).$(`.jw-video`);
    //return $(`${this.parentLocator} a = Cerrar`);
  }

  async clickPlayer() {
    const click = this.player;
    await click.waitForDisplayed({
      timeout: 15000,
    });

    await click.click();
    await browser.pause(5000);
  }

  async checkPlayer() {
    const resultado = await browser.execute(() => jwplayer().getState());
    return resultado;
  }
}
module.exports = new MovieTrailer();
