class MovieActor {

  get actors() {
    return $(
      ".ipc-sub-grid.ipc-sub-grid--page-span-2.ipc-sub-grid--wraps-at-above-l.ipc-shoveler__grid"
    );
  }

  findActor(name) {
    return this.actors.$(`.sc-11eed019-9.gRPuwU`).$(`//a[text()='${name}']`);
  }
}

module.exports = new MovieActor();
