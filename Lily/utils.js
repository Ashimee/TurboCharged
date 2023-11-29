/**
 * @param {VM.Target|null} target
 * @param {string|unknown} thing
 * @returns {string|number|boolean}
 */
const getThingOfTarget = (target, thing) => {
    if (!target) {
        return '';
    }
    if (thing === 'x position') {
        return target.x;
    }
    if (thing === 'y position') {
        return target.y;
    }
    if (thing === 'direction') {
        return target.direction;
    }
    if (thing === 'costume num') {
        return (target.currentCostume + 1);
    }
    if (thing === 'costume name') {
        return target.getCostumes()[target.currentCostume].name;
    }
    if (thing === 'size') {
        return target.size;
    }
    if (thing === 'volume') {
        return target.volume;
    }
    // this should never happen
    return '';
};

const xmlEscape = function(unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '\'':
                return '&apos;';
            case '"':
                return '&quot;';
        }
    });
}

function cbto(a) {
    const blob = new Blob([a], {
        type: "text/html"
    });
    return URL.createObjectURL(blob)
};

const credits_blob = function() {
    if (!vm.TurboCharged.extensionData.createBlobTo.hasRanBlob) {
        vm.TurboCharged.extensionData.createBlobTo.hasRanBlob = true;
        vm.TurboCharged.extensionData.createBlobTo.url = cbto(creditsHTML);
    };
    window.open(vm.TurboCharged.extensionData.createBlobTo.url, '_blank');
};

const generateVariableField = (function(vari, type){
    return `<field name="${type}" id="${vari.id}" variabletype="${vari.type}">${vari.name}</field>`;
});


// <field name="LIST" variabletype="list" id="">variablename</field>
const generateListField = (function(vari){
    return `<field name="LIST" id="${vari.id}" variabletype="list">${vari.name}</field>`;
});

// <block id="variableId" type="data_variable">
//    <field name="VARIABLE">variablename</field>
// </block>
const generateVariableBlock = (function(vari){
    const variType = (vari.type != '' ? 'list' : 'variable');
    const field = generateVariableField(vari, variType.toUpperCase());
    const xml = `<block type="data_${variType}" id="${vari.id}">${field}</block>`;
    return xml;
});

// <block id="variableId" type="data_listcontents">
//    <field name="LIST">variablename</field>
// </block>
const generateListBlock = (function(vari){
    const field = `<field name="LIST">${vari.name}</field>`;
    const xml = `<block type="data_listcontents" id="${vari.id}">${field}</block>`;
    return xml;
});

function spawnMutator(block) {
    function addProp(prop, def) { if (block.hasOwnProperty(prop)) return; block[prop] = def };
    if (!block.hasOwnProperty('blockType')) return;
    addProp('terminal', false);
    addProp('blockAllThreads', false);
    addProp('opcode', '');
    addProp('func', block.opcode);
    addProp('isDynamic', true);
    addProp('color1', '#ff0000');
    addProp('color2', '#00ff00');
    addProp('color3', '#0000ff');
    addProp('disableMonitor', true);
    addProp('isTerminal', false);
    addProp('arguments', {});
    /* mutator example:
            {"blockType":"reporter","terminal":false,"blockAllThreads":false,"arguments":{},"opcode":"data_getVariable","text":"var [VARIABLE]","isDynamic":true,"color1":"${Colors.data.primary}","color2":"${Colors.data.secondary}","color3":"${Colors.data.tertiary}","isTerminal":false,"disableMonitor":true,"arguments":{"VARIABLE":{"type":"string","menu":"variablesMenu","defaultValue":"my variable"}}}
    */
    const mutator = `<mutation blockInfo='${JSON.stringify(block)}'/>`;
    return mutator;
}

function blocksFromClassToObject(extension) {
    extension = new extension().getInfo().blocks;
    let blocks = {};
    for (let i = 0; i < extension.length; i++) {
        const block = extension[i];
        if (!block.hasOwnProperty('opcode') || !block.hasOwnProperty('blockType')) continue;
        blocks[block.opcode] = block;
    }
    return blocks;
}

function isGlobalVariable(name) {
    return (Stage.lookupVariableByNameAndType(name) !== null);
}

function getVariableByName(name, target) {
    return Stage.lookupVariableByNameAndType(name) || target.lookupVariableByNameAndType(name);
}

function deleteVariableByName(name, target) {
    const variable = getVariableByName(name, target);
    target.deleteVariable(variable);
}

function setVariableByName(name, value, target) {
    const variable = getVariableByName(name);
    if (isGlobalVariable(name)) {
        vm.setVariableValue(Stage.id, variable, value);
    } else {
        vm.setVariableValue(target.id, variable, value);
    }
}

const getVarObjectFromName = function (name, util, type) {
    const stageTarget = Scratch.vm.runtime.getTargetForStage();
    const target = util.target;
    let listObject = Object.create(null);

    listObject = stageTarget.lookupVariableByNameAndType(name, type);
    if (listObject) return listObject;
    listObject = target.lookupVariableByNameAndType(name, type);
    if (listObject) return listObject;
  }

  const cloneObj = function (original) {
    return JSON.parse(JSON.stringify(original));
  }

  const arraysEqual = function (a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }