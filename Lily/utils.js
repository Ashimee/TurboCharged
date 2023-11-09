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
        type: "text document"
    });
    return URL.createObjectURL(blob)
};

function parseCreditsCommentIntoHTML(_comment) {
    let comment = _comment;
    comment = comment.replace('/**', `<!DOCTYPE html><html><head><title>TurboCharged Credits</title></head><body><h1>Credits</h1><span>`)
    comment = comment.replaceAll('         * ', '<!-- line -->&nbsp;&nbsp;');
    comment = comment.replace('*/', '</span></body></html>');
    comment = comment.replaceAll('<!-- line -->', '<br>');
    const comment_lines = comment.split('<br>');
    for (let comment_line in comment_lines) {
        const lineNo = comment_line;
        comment_line = comment_lines[comment_line].toString();
        if (comment_line.includes('https://')) {
            const link = comment_line.substring(comment_line.indexOf('https://'), comment_line.length);
            comment_line = comment_line.replace(link, `<a href="${link.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}">${xmlEscape(link)}</a>`);
        }
        comment_lines[lineNo] = comment_line;
    };
    comment = comment_lines.join('<br>');
    comment = comment.replace('}', '');
    return comment;
}
const credits_blob = function() {
    if (!window.extensionData.createBlobTo.hasRanBlob) {
        window.extensionData.createBlobTo.hasRanBlob = true;
        window.extensionData.createBlobTo.url = cbto(parseCreditsCommentIntoHTML(credits_comment));
    };
    window.open(window.extensionData.createBlobTo.url, '_blank');
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