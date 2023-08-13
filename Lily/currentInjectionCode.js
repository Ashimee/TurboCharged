const vm = Scratch.vm;
const runtime = vm.runtime;
const categorySeparator = '<sep gap="36"/>';
const blockSeparator = '<sep gap="36"/>'
const gbx = runtime.getBlocksXML.bind(runtime);
runtime.getBlocksXML = function (target) {
    const categoryInfo = this._blockInfo;
    const res = gbx(target);
    res.forEach((elem, idx) => {
        if (categoryInfo[idx].id === 'motion') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            elem.xml = motion(false, target.isStage, target.id);
        }
        if (categoryInfo[idx].id === 'operators') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            elem.xml = operators(false, target.isStage, target.id);
        }
        if (categoryInfo[idx].id === 'sound') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            elem.xml = sound(false, target.isStage, target.id);
        }
        if (categoryInfo[idx].id === 'sensing') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            elem.xml = sensing(false, target.isStage, target.id);
        }
        if (categoryInfo[idx].id === 'control') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            elem.xml = control(false, target.isStage, target.id);
        }
        if (categoryInfo[idx].id === 'events') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            elem.xml = events(false, target.isStage, target.id);
        }
        if (categoryInfo[idx].id === 'looks') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            elem.xml = looks(false, target.isStage, target.id);
        }
    });
    return res;
}

Scratch.extensions.register(new TurboChargedMotion());
Scratch.extensions.register(new TurboChargedSensing());
Scratch.extensions.register(new TurboChargedControl());
Scratch.extensions.register(new TurboChargedSound());
//Scratch.extensions.register(new TurboChargedEvents());
Scratch.extensions.register(new TurboChargedOperators());
Scratch.extensions.register(new TurboChargedLooks());
//window.globalScratch = Scratch;