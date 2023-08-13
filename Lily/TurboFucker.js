/*!
 * PenguinPatcher - A joke extension by LukeManiaStudios
 * Default XML OVerride by Xeltalliv
 */

(function (Scratch) {
    'use strict';

    class TurboFuckedMotion {
        getInfo() {
            return {
                id: 'motion',
                blocks: []
            }
        }
    }

    class TurboFuckedLooks {
        getInfo() {
            return {
                id: 'looks',
                blocks: []
            }
        }
    }

    class TurboFuckedSound {
        getInfo() {
            return {
                id: 'sound',
                blocks: []
            }
        }
    }

    class TurboFuckedEvents {
        getInfo() {
            return {
                id: 'event',
                blocks: []
            }
        }
    }

    class TurboFuckedControl {
        getInfo() {
            return {
                id: 'control',
                blocks: []
            }
        }
    }

    class TurboFuckedSensing {
        getInfo() {
            return {
                id: 'sensing',
                blocks: []
            }
        }
    }

    class TurboFuckedOperators {
        getInfo() {
            return {
                id: 'operators',
                blocks: []
            }
        }
    }

    class TurboFuckedVariables {
        getInfo() {
            return {
                id: 'variables',
                blocks: []
            }
        }
    }

    class TurboFuckedMyBlocks {
        getInfo() {
            return {
                id: 'myBlocks',
                blocks: []
            }
        }
    }

    const motion = function (isInitialSetup, isStage, targetId) {const stageSelected = ScratchBlocks.ScratchMsgs.translate('MOTION_STAGE_SELECTED','Stage selected: no motion blocks');return `<category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC"></category>`;};
    const looks = function (isInitialSetup, isStage, targetId, costumeName, backdropName) {const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');return `<category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB"></category>`;};
    const sound = function (isInitialSetup, isStage, targetId, soundName) {return `<category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD"></category>`;};
    const event = function (isInitialSetup, isStage) {return `<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900"></category>`;};
    const control = function (isInitialSetup, isStage) {return `<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17"></category>`;};
    const sensing = function (isInitialSetup, isStage) {const name = ScratchBlocks.ScratchMsgs.translate('SENSING_ASK_TEXT', 'What\'s your name?');return `<category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8"></category>`;};
    const operators = function (isInitialSetup) {const apple = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_APPLE', 'apple');const banana = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_BANANA', 'banana');const letter = ScratchBlocks.ScratchMsgs.translate('OPERATORS_LETTEROF_APPLE', 'a');return `<category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438"></category>`;};
    const variables = function () {return `<categoryname="%{BKY_CATEGORY_VARIABLES}"id="variables"colour="#FF8C1A"secondaryColour="#DB6E00"></category>`;};
    const myBlocks = function () {return `<categoryname="%{BKY_CATEGORY_MYBLOCKS}"id="myBlocks"colour="#FF6680"secondaryColour="#FF4D6A"></category>`;};

    const vm = Scratch.vm;
    const runtime = vm.runtime;
    const categorySeparator = '<sep gap="36"/>';
    const blockSeparator = '<sep gap="36"/>'
    const gbx = runtime.getBlocksXML.bind(runtime);
    runtime.getBlocksXML = function(target) {
        const categoryInfo = this._blockInfo;
        const res = gbx(target);
        res.forEach((elem, idx) => {
            if (categoryInfo[idx].id === "motion") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = motion(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "looks") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = looks(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "sound") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = sound(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "event") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = event(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "control") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = control(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "sensing") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = sensing(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "operators") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = operators(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "variables") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = variables(false, target.isStage, target.id);
            }
            if (categoryInfo[idx].id === "myBlocks") {
                let {editingTarget: target, runtime} = vm;
                const stage = runtime.getTargetForStage();
                if (!target) target = stage;
                elem.xml = myBlocks(false, target.isStage, target.id);
            }
        });
        return res;
    }

    Scratch.extensions.register(new TurboFuckedMotion());
    Scratch.extensions.register(new TurboFuckedLooks());
    Scratch.extensions.register(new TurboFuckedSound());
    Scratch.extensions.register(new TurboFuckedEvents());
    Scratch.extensions.register(new TurboFuckedControl());
    Scratch.extensions.register(new TurboFuckedSensing());
    Scratch.extensions.register(new TurboFuckedOperators());
    Scratch.extensions.register(new TurboFuckedVariables());
    Scratch.extensions.register(new TurboFuckedMyBlocks());

})(Scratch);