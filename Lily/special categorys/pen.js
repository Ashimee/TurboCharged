function addPenBlocks() {
    let runtime = vm.runtime;
    try {
        var tmp = runtime.ext_pen
    } catch {
        return ('');
    };
    let ext = runtime.ext_pen;
    if (ext.getInfoBound == undefined) ext.getInfoBound = ext.getInfo.bind(ext);
    let egi = ext.getInfoBound;

    //ext.test = function({  }, util) {}
    ext.getInfo = function() {
        const DefaultExtensions = vm.TurboCharged.extensionData.DefaultExtensions;
        let tmp = egi();
        let blocks = tmp.blocks;
        tmp.name = "Pen 🪄";
        blocks = DefaultExtensions.addBlocks(blocks, []);
        return tmp;
    }
    vm.extensionManager.refreshBlocks();
}