class TurboChargedBETAVariables {
    getInfo() {
        return {
            id: 'variables',
            name: 'Variables (extension) 🪄',
            color1: Colors.data.primary,
            color2: Colors.data.secondary,
            color3: Colors.data.tertiary,
            blocks: [],
            /*menus: []{
                variablesMenu: {
                    acceptReporters: false,
                    items: 'getVariables'
                },
            }*/
        }
    }/*
    getVariables() {
        // @ts-expect-error - Blockly not typed yet
        // eslint-disable-next-line no-undef
        const variables = typeof Blockly === 'undefined' ? [] : Blockly.getMainWorkspace()
            .getVariableMap()
            .getVariablesOfType('')
            .filter(model => model.isLocal)
            .map(model => ({
                text: model.name,
                value: model.getId()
            }));
        if (variables.length > 0) {
            return variables;
        } else {
            return [{
                text: "",
                value: ""
            }];
        }
    }*/
}

const MotionBlocks = blocksFromClassToObject(TurboChargedMotion);

function variables(isInitialSetup, target) {
    let LocalVariablesXML, GlobalVariablesXML;
    let LocalVariableBlocks = [], GlobalVariableBlocks = [];
    
    const variables = target.getAllVariableNamesInScopeByType('', '');
    const GlobalVariables = runtime.getTargetForStage().getAllVariableNamesInScopeByType('', '');
    const LocalVariables = variables.filter(varName => !GlobalVariables.includes(varName));

    for (let i = 0; i < GlobalVariables.length; i++) {
        let variable = target.lookupVariableByNameAndType(GlobalVariables[i]);
        let variableXML = generateVariableBlock(variable);
        GlobalVariableBlocks.push(variableXML);
    }
    if (!target.isStage) {
        for (let i = 0; i < LocalVariables.length; i++) {
            let variable = target.lookupVariableByNameAndType(LocalVariables[i]);
            let variableXML = generateVariableBlock(variable);
            LocalVariableBlocks.push(variableXML);
        }
    }

function lists(isInitialSetup, target) {
    let LocalListsXML, GlobalListsXML;
    let LocalListBlocks = [], GlobalListBlocks = [];
    
    const lists = target.getAllVariableNamesInScopeByType('list', '');
    const GlobalLists = runtime.getTargetForStage().getAllVariableNamesInScopeByType('list', '');
    const LocalLists = lists.filter(varName => !GlobalLists.includes(varName));

    let firstList = target.lookupVariableByNameAndType(lists[0], 'list') || 'my list';

    for (let i = 0; i < GlobalLists.length; i++) {
        let list = target.lookupVariableByNameAndType(GlobalLists[i], 'list');
        let listsXML = generateListBlock(list);
        GlobalListBlocks.push(listsXML);
    }
    if (!target.isStage) {
        for (let i = 0; i < LocalLists.length; i++) {
            let list = target.lookupVariableByNameAndType(LocalLists[i], 'list');
            let listsXML = generateListBlock(list);
            LocalListBlocks.push(listsXML);
        }
    }

    LocalListsXML = `
${(LocalListBlocks.length > 0 ? '<label text="For this sprite only:"/>' : '')}
${LocalListBlocks.join('\n')}`;
    GlobalListsXML = `
${(GlobalListBlocks.length > 0 ? '<label text="For all sprites:"/>' : '')}
${GlobalListBlocks.join('\n')}`;

    return `<category name="Lists 🪄" id="lists" ${Colors.data_lists.xml}>
    <button text="${ScratchBlocks.Msg.NEW_LIST}" callbackKey="CREATE_LIST"></button>
    ${GlobalListBlocks.length > 0 || LocalListBlocks.length > 0 ? `
    <block type="data_addtolist">
        ${generateListField(firstList)}
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_deleteoflist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="data_deletealloflist">
        ${generateListField(firstList)}
    </block>
    <block type="data_insertatlist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
            <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_replaceitemoflist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_itemoflist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="data_itemnumoflist">
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
        ${generateListField(firstList)}
    </block>
    <block type="data_lengthoflist">
        ${generateListField(firstList)}
    </block>
    <block type="data_listcontainsitem">
        ${generateListField(firstList)}
            <value name="ITEM">
                <shadow type="text">
                    <field name="TEXT">thing</field>
                </shadow>
            </value>
    </block>
    <block type="data_showlist">
        ${generateListField(firstList)}
    </block>
    <block type="data_hidelist">
        ${generateListField(firstList)}
    </block>
        ${GlobalListsXML}
        ${target.isStage ? '' : LocalListsXML}
    ` : ''}
    </category>`
}

    LocalVariablesXML = `
${(LocalVariableBlocks.length > 0 ? '<label text="For this sprite only:"/>' : '')}
${LocalVariableBlocks.join('\n')}`;
    GlobalVariablesXML = `
${(GlobalVariableBlocks.length > 0 ? '<label text="For all sprites:"/>' : '')}
${GlobalVariableBlocks.join('\n')}`;
    //<shadow type="data_variablemenu"></shadow>
    return `
<category name="%{BKY_CATEGORY_VARIABLES} 🪄" id="variables" ${Colors.data.xml} ${''/* we would put custom="VARIABLES" here but then it would not work */}>
<button text="${ScratchBlocks.Msg.NEW_VARIABLE}" callbackKey="CREATE_VARIABLE"></button>
${GlobalVariableBlocks.length > 0 || LocalVariableBlocks.length > 0 ?`
// <block type="motion_data_deleteVariable">
//     ${spawnMutator(MotionBlocks['data_deleteVariable'])}
//     <value name="VARIABLE">
//         <shadow type="text">
//             <field name="TEXT">my variable</field>
//         </shadow>
//     </value>
// </block>
<block type="data_setvariableto" gap="20">
    <value name="VARIABLE">
    <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
    <value name="VALUE">
        <shadow type="text">
            <field name="TEXT">0</field>
        </shadow>
    </value>
</block>
<block type="data_changevariableby">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
<block type="data_showvariable">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
</block>
<block type="data_hidevariable">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
</block>
<block type="motion_data_hasVariable">
    ${spawnMutator(MotionBlocks['data_hasVariable'])}
    <value name="VARIABLE">
        <shadow type="text">
            <field name="TEXT">my variable</field>
        </shadow>
    </value>
</block>
<block type="motion_data_getVariable">
    ${spawnMutator(MotionBlocks['data_getVariable'])}
    <value name="VARIABLE">
        <shadow type="text">
            <field name="TEXT">my variable</field>
        </shadow>
    </value>
</block>
${GlobalVariablesXML}
${(target.isStage ? '' : `
${LocalVariablesXML}
`)}` : ''}
</category>
${lists(isInitialSetup, target)}
`;
/*!
 * <category
    name="Lists"
    id="lists"
    colour="#FF661A"
    secondaryColour="#FF5500"
    custom="LIST">
    </category>"
*/
//yes
}