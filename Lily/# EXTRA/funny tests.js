funny things

//name change for variables tab
(function(){
  let runtime = vm.runtime;
  if (runtime.getBlocksXMLbound == undefined) runtime.getBlocksXMLbound = runtime.getBlocksXML.bind(runtime);
  let gbx = runtime.getBlocksXMLbound;
  runtime.getBlocksXML = function(...args) {
    let tmp = gbx(...args);
    tmp[2].xml = '\n        <category\n          name="%{BKY_CATEGORY_VARIABLES} SUCK ASS"\n          id="variables"\n          colour="#FF8C1A"\n          secondaryColour="#DB6E00"\n          custom="VARIABLE">\n        </category>\n        <category\n          name="Lists"\n          id="lists"\n          colour="#FF661A"\n          secondaryColour="#FF5500"\n          custom="LIST">\n        </category>';
    return tmp;
  }
  vm.extensionManager.refreshBlocks();
})();

//microbit name override
(function(){
  let ext = vm.runtime.ext_microbit;
  if (ext.getInfoBound == undefined) ext.getInfoBound = ext.getInfo.bind(ext);
  let egi = ext.getInfoBound;
  ext.getInfo = function() {
    let tmp = egi();
    tmp.name = "micro:bit 🪄";
    return tmp;
  }
  vm.extensionManager.refreshBlocks();
})();

