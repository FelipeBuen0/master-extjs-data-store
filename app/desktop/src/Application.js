Ext.define("JsDaysDataStore.Application", {
  extend: "Ext.app.Application",
  name: "JsDaysDataStore",
  requires: [
    "JsDaysDataStore.*",
  ],
  defaultToken: "home",
  launch() {
    Ext.Viewport.add([
      {
        xtype: "main-view"
      },
    ]);
  },

  onAppUpdate() {
    Ext.Msg.confirm(
      "Atualização de aplicação",
      "A aplicação possui uma atualização, deseja atualizar agora?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
