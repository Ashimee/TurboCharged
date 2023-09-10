//The original code is credited to the very lovely lilymakesthings!
//Her scratch: https://scratch.mit.edu/users/LilyMakesThings
//XML Injector / Overrider
runtime.getBlocksXML = function(target) {
    const categoryInfo = this._blockInfo;
    const res = gbx(target);
    res.map(category => {
        if (category.id === 'motion') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = motion(false, target.isStage, target.id);
        }
        if (category.id === 'looks') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = looks(false, target.isStage, target.id, target.getCurrentCostume().name, stage.getCurrentCostume().name);
        }
        if (category.id === 'sound') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = sound(false, target.isStage, target.id);
        }
        if (category.id === 'event') { //events is a bitch
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = events(false, target.isStage, target.id);
        }
        if (category.id === 'control') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = control(false, target.isStage, target.id);
        }
        if (category.id === 'sensing') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = sensing(false, target.isStage, target.id);
        }
        if (category.id === 'operators') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = operators(false, target.isStage, target.id);
        }
        if (category.id === 'myBlocks') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = myBlocks(false, target.isStage, target.id);
        }
        return category;
    });
    return res;
}