class MovieActor {
  constructor() {
    this.parentLocator = $(".ipc-sub-grid.ipc-sub-grid--page-span-2.ipc-sub-grid--wraps-at-above-l.ipc-shoveler__grid");
  }

  async findActor(name) {
    const objectActor = this.parentLocator.$(`.sc-11eed019-9.gRPuwU`).$(`//a[text()='${name}']`);
    return await objectActor.getText();
  }
}

module.exports = new MovieActor();
