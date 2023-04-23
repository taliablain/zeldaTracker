var PersistentCheckboxes = function(){
  var genKey, load, save, addListeners, init;

  var PAGE = window.location.href;

  /**
   * Generates a key to store information for a checkbox in localStorage. This
   * is in the format: checkbox:<page>:<id>, where <page> is the URL of the
   * page and <id> is the checkbox id (passed in as a parameter).
   * 
   * @param {string} id The id of the checkbox.
   * @return A key that should be unique for the given checkbox on the current
   *         page.
   */
  genKey = function(id){
      return 'checkbox:'+ PAGE +':'+ id;
  }

  /**
   * A listener to be placed on a checkbox. Saves the checked property (true 
   * or false) of the checkbox provided in localStorage using its id as the 
   * key. Checkboxes without an id are not saved.
   *
   * @param event The triggered event (ignored). 
   */
  save = function(event){
      // Only inputs with an id will be saved.
      if(this.id === ""){ return; }
      localStorage.setItem(genKey(this.id), this.checked+"");
  };

  /**
   * Loads any saved checkbox statuses from localStorage.
   */
  load = function(){
      jQuery('input[type="checkbox"]').each(function(i, elm){
          // Ignore checkboxes with no id.
          var key = genKey(elm.id);
          if(elm.id !== "" && key in localStorage){
              elm.checked = localStorage.getItem(key) === "true";
          }
      });
  };

  /**
   * Places a listener on checkbox changes, which triggers the save function.
   */
  addListeners = function(){
      jQuery(document).on('change', 'input[type=checkbox]', save);
  };

  /**
   * Loads any saved data and adds listeners for changes to checkboxes.
   */
  init = function(options){
      // Only supported if localStorage is available.
      if(typeof(Storage) === "undefined"){ return; }
      load();
      addListeners();
  };

  init();

  return this;
};


// Let's get this party started!
var persistentCheckboxes;
jQuery(document).ready(function(){
  persistentCheckboxes = new PersistentCheckboxes();
});