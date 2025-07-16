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
    GlobalLogger.init();
  },

  onAppUpdate() {
    Ext.Msg.confirm(
      "Application Update",
      "The application has an update available, would you like to update now?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
