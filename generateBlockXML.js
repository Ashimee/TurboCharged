/*
 * Created by @0znw | v5.1
 * Licensed under the MIT license
 * DO NOT REMOVE THIS COMMENT
*/
(function() {
    const ArgumentTypes = {
        ANGLE: "angle",
        BOOLEAN: "Boolean",
        COLOR: "color",
        NUMBER: "number",
        STRING: "string",
        MATRIX: "matrix",
        NOTE: "note",
        IMAGE: "image",
        COSTUME: "costume",
        SOUND: "sound",
        LABEL: "LABEL", //this does not actually do anything
        BUTTON: "BUTTON" //this does not actually do anything
    };

    const XMLtypes = {
        ANGLE: "angle", //unknown rn
        BOOLEAN: "boolean",
        COLOR: "color", //unknown rn
        NUMBER: "math_number",
        STRING: "text",
        MATRIX: "matrix", //unknown rn
        NOTE: "note", //unknown rn
        IMAGE: "image", //unknown rn
        COSTUME: "costume", //unknown rn
        SOUND: "sound", //unknown rn
        LABEL: "LABEL", //this does not actually do anything
        BUTTON: "BUTTON" //this does not actually do anything
    }

    const categorySeparator = '<sep gap="36"/>';
    const blockSeparator = '<sep gap="36"/>';

    const validScratchArgTypes = Object.keys(ArgumentTypes);

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

    function getCategoryColor(category_id) {
        const bubble = document.querySelector(`.scratchCategoryId-${category_id} .scratchCategoryItemBubble`);  
        const styles = window.getComputedStyle(bubble);
        const backgroundColor = styles.backgroundColor;
        const borderColor = styles.borderColor;
        function rgbToHex(rgb) {
            const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (match) {
                return "#" + match.slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
            }
            return rgb;
        }
        return {color1: rgbToHex(backgroundColor), color2: rgbToHex(borderColor)};
    }

    function ScratchArg2xmlArg(ScratchArg) {
        ScratchArg = ScratchArg.toString();
        ScratchArg = ScratchArg.toUpperCase();

        if (!validScratchArgTypes.includes(ScratchArg) && ScratchArg != "GETGLOBAL") {
            throw new Error("The provided scratch argument does not exist.");
            return;
        }

        if (ScratchArg == "GETGLOBAL") {
            return {
                ArgumentTypes,
                XMLtypes,
                validArgTypes
            };
        }

        return XMLtypes[ScratchArg];
    }

    function createValueForBlockXML(name, json, extension_id) {
            let fieldname = "";
            const extension_name = extension_id;
            let type = ScratchArg2xmlArg(json.type);
            switch (type) {
                case 'math_number':
                    fieldname = 'NUM';
                    break;
                case 'text':
                    fieldname = 'TEXT';
                    break;
                default:
                    fieldname = '';
                    break;
            }
            let hasNoMenu = true;
            if (json.menu) hasNoMenu = false;
            if (!hasNoMenu) {
                type = `${extension_name}_menu_${json.menu}`;
            }
            return `            <value name="${name}">
                <shadow type="${type}">${hasNoMenu?`\n<field name="${fieldname}">${json.defaultValue}</field>`:''}\n</shadow>
            </value>`;
    };

    function createBlockXML(json, extension_id) {
        //Generate xml for all the arguments
        if (json == '---') {
            return blockSeparator;
        }
        if (json.blockType) { json.blockType = json.blockType.toUpperCase(); json.type = json.blockType } else {if (json.type) { json.type = json.type.toUpperCase(); json.blockType = json.type } else {return ''}};
        console.log(json.type);
        switch (json.blockType) {
            case "LABEL":
                return `<label text="${json.text}"/>`;
            case "BUTTON":
                let extra = '';
                if (json.defaultValue) {
                    //extra = json.defaultValue;
                }
                return `<button text="${name}" callbackKey="EXTENSION_CALLBACK" callbackData="${extension_name}_${json.callback.toString().split('()')[0].replace('function ','')}">${extra}</button>`;
            default:
                break
        }
        var argsXML = ``;
        if(json.arguments) {
            const argument_names = Object.keys(json.arguments);
            const argument_values = Object.values(json.arguments);
            console.log(argument_names, argument_values)
            for (argument in argument_values) {
                const old_argument = argument;
                const argument_name = argument_names[argument];
                argument = argument_values[argument];
                argsXML += '\n'+createValueForBlockXML(argument_name, argument, extension_id/*, (function(json_){if(json_.defaultValue){return json_.defaultValue};return''})(argument)*/); 
            }
        }
        const finalXML = `        <block type="${extension_id}_${json.opcode}">${argsXML}\n        </block>`;
        return finalXML;
    }

    function convertExtensionToXml(extensionClass) {
        //this is not even close to being able to be started.
        const extension = new extensionClass();
        const extension_info = extension.getInfo();
        const blocks_xml = [];
        for (block in extension_info.blocks) {
            const old_block = block;
            block = extension_info.blocks[block];
            const block_xml = createBlockXML(block, extension_info.id);
            blocks_xml.push(block_xml);
        }
        const extension_xml = `<category name="${extension_info.name}" id="${extension_info.id}" colour="${extension_info.color2}" secondaryColour="${extension_info.color2}">
        ${blocks_xml.join('\n')}
        ${categorySeparator}
        </category>`;
        return extension_xml;
    }

    const getBlocksXML = vm.runtime.getBlocksXML;
    const _globalScope = true;
    if (_globalScope) {
        const _globalObject = {
            getCategoryColor,
            convertExtensionToXml,
            createValueForBlockXML,
            createBlockXML,
            xmlEscape,
            ArgumentTypes,
            validScratchArgTypes,
            XMLtypes,
            blockSeparator,
            categorySeparator,
            runtime: {
                getBlocksXML
            }
        };
        globalThis.BlockXMLcreator = _globalObject;
        console.log('GlobalScoped Object.\nObject name: BlockXMLcreator');
    };
})();