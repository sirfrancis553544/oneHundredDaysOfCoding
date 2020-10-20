const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init() {
    // create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // setup main elements
    this.elements.main.classLists.add("keyboard", "1keyboard--hidden");
      this.elements.keysContainer.classLists.add("keyboard_keys");
      
    //   add to DOM
      this.elements.main.appendChild(this.elements.keysContainer)
      document.body.appendChild(this.elements.main)
  },

  _createKeys() {},

  _triggerEvent(handlerName) {
    console.log("Event Triggered! Event Name: " + handlerName);
  },

  _toggleCapsLock() {
    console.log("Caps Lock Toggled! ");
  },

  open(initialValue, oninput, onclose) {},

  close() {},
};

window.addEventListener("DOMContentLoaded", () => {
  Keyboard.init();
});
