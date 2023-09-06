(function(Scratch){

    class ControlOverride { //Class
        getInfo() {
            return {
                id: 'control',
                colour: "#FFAB19",
                secondaryColour: "#CF8B17",
                blocks: []
            }
        }
    }

    const control = function (isInitialSetup, isStage) {
        return `<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block id="forever" type="control_forever"/>
        ${blockSeparator}
        <block type="control_if"/>
        <block type="control_if_else"/>
        <block id="wait_until" type="control_wait_until"/>
        <block id="repeat_until" type="control_repeat_until"/>
        <block id="while" type="control_while"/>
        <block id="for_each" type="control_for_each">
            <value name="VALUE">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="control_stop"/>
        ${blockSeparator}
        ${isStage ? `
            <block type="control_create_clone_of">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
        ` : `
            <block type="control_start_as_clone"/>
            <block type="control_create_clone_of">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
            <block type="control_delete_this_clone"/>
        `}
        ${categorySeparator}
        </category>`;
    }

    //Lily made this so this makes no sense to me xd.
    const vm = Scratch.vm;
    const runtime = vm.runtime;
    const categorySeparator = '<sep gap="36"/>';
    const blockSeparator = '<sep gap="36"/>'
    const gbx = runtime.getBlocksXML.bind(runtime);
    runtime.getBlocksXML = function (target) {
        const categoryInfo = this._blockInfo;
        const res = gbx(target);
        res.forEach((elem, idx) => {
            if (categoryInfo[idx].id === 'control') {
                let {
                    editingTarget: target,
                    runtime
                } = vm;
                elem.xml = control(false, target.isStage, target.id);
            }
        });
        return res;
    }

    //Register the override extension to update the toolbox.
    Scratch.extensions.register(new ControlOverride());
})(Scratch);