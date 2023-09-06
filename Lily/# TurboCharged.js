//Credits in the "cred_comment" function.
(function(Scratch) {'use strict';globalThis.Scratch = Scratch;
const vm = Scratch.vm;
const runtime = vm.runtime;
const categorySeparator = '<sep gap="36"/>';
const blockSeparator = '<sep gap="36"/>';
const gbx = runtime.getBlocksXML.bind(runtime);
const translate = ScratchBlocks.ScratchMsgs.translate; // due to it being in some of the category's, i will from now on have this.
const cbfsb = runtime._convertBlockForScratchBlocks.bind(runtime);
const eventsID = 'event';

//THE CREDITS
    const cred_comment = (function(){/*this is here to get the comment*/
        /**
         * v9.1
         * Idea by LilyMakesThings.
         * XML Injection based on Xeltallivs and LilyMakesThings XML Injectors.
         * Smooshed by 0znzw
         * 
         * Color Change Attempt also by Lily, 0znzw for the XML.
         * 
         * Licensed under MIT license.
         * 
         * Extensions used:
         * Text+ (by CST1229)
         * Base (by TrueFantom)
         * Bitwise (by TrueFantom)
         * BigInt (by SkyHigh173)
         * Math (by TrueFantom)
         * Cast (by Lily aka LilyMakesThings)
         * More Comparisons (by NOname-awa)
         * Tween (by JeremyGamer13)
         * High Precision (by Qxsck)
         * More motion (by NamelessCat aka NexusKitten)
         * Clones+ (by Lily aka LilyMakesThings)
         * Sensing+ (by ObviousAlexC)
         * 
         * 
         * Lily: https://scratch.mit.edu/users/LilyMakesThings/
         * 0znzw: https://scratch.mit.edu/users/0znzw
         * Xeltalliv: https://github.com/Xeltalliv
         * CST1229: https://scratch.mit.edu/users/CST1229/
         * Skyhigh173: https://github.com/SkyHigh173
         * TrueFantom: https://scratch.mit.edu/users/TrueFantom/
         * JeremyGamer13: https://scratch.mit.edu/users/JeremyGamer13/
         * NOname-awa: https://github.com/NOname-awa
         * Qxsck: https://github.com/qxsck
         * NamelessCat: https://scratch.mit.edu/users/NamelessCat/
         * ObviousAlexC: https://scratch.mit.edu/users/pinksheep2917/
         * 
         * Turbowarp: https://turbowarp.org/
         * Extension gallery: https://extensions.turbowarp.org/
         * Turbowarp Extension Github: https://github.com/Turbowarp/extensions
         * 
         */
    });

    const version = cred_comment.toString().split('        * v')[1].replace('\n', '');
    const credits_comment = cred_comment.toString().replace('*/}', '*/').replace('function(){/*this is here to get the comment*/', '');

let Colors = {
    generateXML: function(cat) {
        return `colour="${cat.primary}" secondaryColour="${cat.secondary}"`;
    },
    gcc: function(cat) {
        return ScratchBlocks.Colours[cat];
    }
};
Object.keys(ScratchBlocks.Colours).forEach(category => {
    let obj = (Object.assign(Colors.gcc(category), {
        xml: (Colors.generateXML(Colors.gcc(category)))
    }));
    let colors = {};
    colors[category] = obj;
    Object.assign(Colors, colors);
});
Colors.events = structuredClone(Colors.event);
Colors.sound = structuredClone(Colors.sounds);

window.extensionData = {
    textPlus: {
        splitCache: [],
        matchCache: [],
        CaseParam: {
            LOWERCASE: "lowercase",
            UPPERCASE: "uppercase",
            MIXEDCASE: "mixedcase",
            TITLECASE: "titlecase",
            EXACTTITLECASE: "exacttitlecase"
        }
    },
    createBlobTo: {
        hasRanBlob: false,
        url: ''
    },
    DefaultExtensions: {
        addBlocks(old_blocks, new_blocks) {
            for (let block in new_blocks) {
                block = new_blocks[block];
                old_blocks.push(block);
            }
            return old_blocks;
        }
    }
}

const stopIcon =
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAC/UFC8Q0OzTU24SEi4SEi3SEi4R0e4SEi4SEi4SEi4SEi7SUm8SUnMTk7MT0/OT0/PT0/gVVXiVVXsWVn///+CoOd2AAAAC3RSTlMAEBMUu7zLz9D8/dIXnJwAAAABYktHRBXl2PmjAAAAxklEQVRIx+3WwRKDIBAD0JWqVEOtWv7/W3twOqKwELzW3N9wYhORMMYiztgZUZMUAKxqmh5Kno/MG256nzI59Z2mB+BWH+XzUt5RhWoyQjFZkTQFkTBFERlCnAwlDoYUgaHFblpaeL86AK0MvNjMIABmT2cGIAAWniw3ucm/k9ovduEjXzgXtUfJmtrTt9VZzYH9FSB/xvfKZMsiLFmuko61zBTfucjL9RpXf6nEU2MhPxXS86J+kORmjz6V6seViOnG8oT7ApMcjsYZwhXCAAAAAElFTkSuQmCC";

// Source:
// https://github.com/TurboWarp/scratch-vm/blob/develop/src/io/keyboard.js
// https://github.com/TurboWarp/scratch-blocks/blob/develop/blocks_vertical/event.js
const validKeyboardInputs = [
// Special Inputs
{
    text: "space",
    value: "space"
},
{
    text: "up arrow",
    value: "up arrow"
},
{
    text: "down arrow",
    value: "down arrow"
},
{
    text: "right arrow",
    value: "right arrow"
},
{
    text: "left arrow",
    value: "left arrow"
},
{
    text: "enter",
    value: "enter"
},
// TW: Extra Special Inputs
{
    text: "backspace",
    value: "backspace"
},
{
    text: "delete",
    value: "delete"
},
{
    text: "shift",
    value: "shift"
},
{
    text: "caps lock",
    value: "caps lock"
},
{
    text: "scroll lock",
    value: "scroll lock"
},
{
    text: "control",
    value: "control"
},
{
    text: "escape",
    value: "escape"
},
{
    text: "insert",
    value: "insert"
},
{
    text: "home",
    value: "home"
},
{
    text: "end",
    value: "end"
},
{
    text: "page up",
    value: "page up"
},
{
    text: "page down",
    value: "page down"
},
// Letter Keyboard Inputs
{
    text: "a",
    value: "a"
},
{
    text: "b",
    value: "b"
},
{
    text: "c",
    value: "c"
},
{
    text: "d",
    value: "d"
},
{
    text: "e",
    value: "e"
},
{
    text: "f",
    value: "f"
},
{
    text: "g",
    value: "g"
},
{
    text: "h",
    value: "h"
},
{
    text: "i",
    value: "i"
},
{
    text: "j",
    value: "j"
},
{
    text: "k",
    value: "k"
},
{
    text: "l",
    value: "l"
},
{
    text: "m",
    value: "m"
},
{
    text: "n",
    value: "n"
},
{
    text: "o",
    value: "o"
},
{
    text: "p",
    value: "p"
},
{
    text: "q",
    value: "q"
},
{
    text: "r",
    value: "r"
},
{
    text: "s",
    value: "s"
},
{
    text: "t",
    value: "t"
},
{
    text: "u",
    value: "u"
},
{
    text: "v",
    value: "v"
},
{
    text: "w",
    value: "w"
},
{
    text: "x",
    value: "x"
},
{
    text: "y",
    value: "y"
},
{
    text: "z",
    value: "z"
},
// Number Keyboard Inputs
{
    text: "0",
    value: "0"
},
{
    text: "1",
    value: "1"
},
{
    text: "2",
    value: "2"
},
{
    text: "3",
    value: "3"
},
{
    text: "4",
    value: "4"
},
{
    text: "5",
    value: "5"
},
{
    text: "6",
    value: "6"
},
{
    text: "7",
    value: "7"
},
{
    text: "8",
    value: "8"
},
{
    text: "9",
    value: "9"
},
];

var lastValues = {};
var runTimer = 0;
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

class TurboChargedControl {
    getInfo() {
        return {
            id: 'control',
            name: 'Control 🪄',
            color1: Colors.control.primary,
            color2: Colors.control.secondary,
            color3: Colors.control.tertiary,
            blocks: [{
                    opcode: 'clonespluswhenCloneStartsWithVar',
                    blockType: Scratch.BlockType.HAT,
                    text: 'when I start as a clone with [INPUTA] set to [INPUTB]',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonespluscreateCloneWithVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'create clone with [INPUTA] set to [INPUTB]',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'clonesplustouchingCloneWithVar',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching clone with [INPUTA] set to [INPUTB]?',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplustouchingMainSprite',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching main sprite?',
                },

                {
                    opcode: 'clonesplussetVariableOfClone',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        INPUTC: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTD: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetVariableOfClone',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'variable [INPUTA] of clone with [INPUTB] set to [INPUTC]',

                    disableMonitor: true,
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTC: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplussetVariableOfMainSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set variable [INPUTA] to [INPUTB] for main sprite',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetVariableOfMainSprite',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'variable [INPUT] of main sprite',

                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        }
                    }
                },

                {
                    opcode: 'clonespluscloneExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'clone with [INPUTA] set to [INPUTB] exists?',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetThingOfClone',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[INPUTA] of clone with [INPUTB] set to [INPUTC]',
                    disableMonitor: true,
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'x position',
                            menu: 'thingOfMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTC: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetThingOfMainSprite',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[INPUT] of main sprite',

                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'x position',
                            menu: 'thingOfMenu'
                        }
                    }
                },

                {
                    opcode: 'clonesplusstopScriptsInSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'stop scripts in [INPUT]',
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'spriteMenu'
                        }
                    }
                }, {
                    opcode: 'clonesplusstopScriptsInClone',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'stop scripts in clones with [INPUTA] set to [INPUTB]',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusstopScriptsInMainSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'stop scripts in main sprite',
                },

                {
                    opcode: 'clonesplusdeleteClonesInSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete clones in [INPUT]',
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'spriteMenu'
                        }
                    },
                    text: 'is clone?'
                }, {
                    opcode: 'clonesplusdeleteCloneWithVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete clones with [INPUTA] set to [INPUTB]',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                },

                {
                    opcode: 'clonesplusisClone',
                    blockType: Scratch.BlockType.BOOLEAN,
                },

                {
                    opcode: 'clonespluscloneCount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'clone count',
                }, {
                    opcode: 'clonesplusspriteCloneCount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'clone count of [INPUT]',
                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'spriteMenu'
                        }
                    }
                }
            ],
            menus: {
                spriteMenu: {
                    acceptReporters: true,
                    items: 'getSprites'
                },
                // menus use acceptReporters: false for Scratch parity
                variablesMenu: {
                    acceptReporters: false,
                    items: 'getVariables'
                },
                thingOfMenu: {
                    acceptReporters: false,
                    items: [{
                        text: 'x position',
                        value: 'x position'
                    }, {
                        text: 'y position',
                        value: 'y position'
                    }, {
                        text: 'direction',
                        value: 'direction'
                    }, {
                        text: 'costume #',
                        value: 'costume num'
                    }, {
                        text: 'costume name',
                        value: 'costume name'
                    }, {
                        text: 'size',
                        value: 'size'
                    }, {
                        text: 'volume',
                        value: 'volume'
                    }, ]
                }
            }
        }
    }
    //clonesplus extension
    clonespluswhenCloneStartsWithVar(args, util) {
        // TODO: this is really not ideal. this should be an event-based hat ideally, but we don't have a good
        // way to do that right now...
        if (util.target.isOriginal) {
            return false;
        }
        const variable = util.target.lookupVariableById(args.INPUTA);
        const expectedValue = args.INPUTB;
        if (variable) {
            return Scratch.Cast.compare(variable.value, expectedValue) === 0;
        }
        return false;
    }

    clonespluscreateCloneWithVar(args, util) {
        // @ts-expect-error - not typed yet
        Scratch.vm.runtime.ext_scratch3_control._createClone(util.target.sprite.name, util.target);
        const clones = util.target.sprite.clones;
        const cloneNum = clones.length - 1;
        const cloneVariable = clones[cloneNum].lookupVariableById(args.INPUTA);
        if (cloneVariable) {
            cloneVariable.value = args.INPUTB;
        }
    }

    clonesplustouchingCloneWithVar(args, util) {
        const drawableCandidates = util.target.sprite.clones
            .filter(clone => {
                const variable = clone.lookupVariableById(args.INPUTA);
                return variable && Scratch.Cast.compare(variable.value, args.INPUTB) === 0;
            })
            .map(clone => clone.drawableID);
        if (drawableCandidates.length === 0) {
            return false;
        }
        return Scratch.vm.renderer.isTouchingDrawables(util.target.drawableID, drawableCandidates);
    }

    clonesplustouchingMainSprite(args, util) {
        if (util.target.isOriginal) {
            return false;
        }
        const main = util.target.sprite.clones[0];
        const drawableCandidates = [main.drawableID];
        return Scratch.vm.renderer.isTouchingDrawables(util.target.drawableID, drawableCandidates);
    }

    clonesplussetVariableOfClone(args, util) {
        const newVariableValue = args.INPUTB;
        const expectedVarValue = args.INPUTD;
        const clones = util.target.sprite.clones;
        for (let index = 1; index < clones.length; index++) {
            const checkVar = clones[index].lookupVariableById(args.INPUTC);
            if (checkVar && Scratch.Cast.compare(checkVar.value, expectedVarValue) === 0) {
                const editVar = clones[index].lookupVariableById(args.INPUTA);
                if (editVar) {
                    editVar.value = newVariableValue;
                }
            }
        }
    }

    clonesplusgetVariableOfClone(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTB, args.INPUTC, util.target.sprite.clones);
        if (!clone) {
            return '';
        }
        // guaranteed to exist by getCloneFromVariable
        const cloneVar = clone.lookupVariableById(args.INPUTA);
        return cloneVar.value;
    }

    clonesplussetVariableOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        const variableObj = main.lookupVariableById(args.INPUTA);
        if (variableObj) {
            variableObj.value = args.INPUTB;
        }
    }

    clonesplusgetVariableOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        const variableObj = main.lookupVariableById(args.INPUT);
        if (variableObj) {
            return variableObj.value;
        }
        return '';
    }

    clonespluscloneExists(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTA, args.INPUTB, util.target.sprite.clones);
        return !!clone;
    }

    clonesplusgetThingOfClone(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTB, args.INPUTC, util.target.sprite.clones);
        return getThingOfTarget(clone, args.INPUTA);
    }

    clonesplusgetThingOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        return getThingOfTarget(main, args.INPUT);
    }

    clonesplusstopScriptsInSprite(args) {
        const targetObj = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (targetObj) {
            Scratch.vm.runtime.stopForTarget(targetObj);
        }
    }

    clonesplusstopScriptsInMainSprite(args, util) {
        Scratch.vm.runtime.stopForTarget(util.target.sprite.clones[0]);
    }

    clonesplusstopScriptsInClone(args, util) {
        const clones = util.target.sprite.clones;
        let expectedValue = args.INPUTB;
        for (let index = 1; index < clones.length; index++) {
            const cloneVariable = clones[index].lookupVariableById(args.INPUTA);
            if (cloneVariable && Scratch.Cast.compare(cloneVariable.value, expectedValue) === 0) {
                Scratch.vm.runtime.stopForTarget(clones[index]);
            }
        }
    }

    clonesplusdeleteClonesInSprite(args, util) {
        const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (!target) {
            return;
        }
        const clones = target.sprite.clones;
        for (let index = clones.length - 1; index > 0; index--) {
            Scratch.vm.runtime.disposeTarget(clones[index]);
        }
    }

    clonesplusdeleteCloneWithVar(args, util) {
        const clones = util.target.sprite.clones;
        const expectedValue = args.INPUTB;
        for (let index = clones.length - 1; index > 0; index--) {
            const cloneVar = clones[index].lookupVariableById(args.INPUTA);
            if (cloneVar && Scratch.Cast.compare(cloneVar.value, expectedValue) === 0) {
                Scratch.vm.runtime.disposeTarget(clones[index]);
            }
        }
    }

    clonesplusisClone(args, util) {
        return !util.target.isOriginal;
    }

    clonespluscloneCount(args, util) {
        return Scratch.vm.runtime._cloneCounter;
    }

    clonesplusspriteCloneCount(args, util) {
        const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (target) {
            return (target.sprite.clones.length - 1);
        }
        return 0;
    }

    /**
     * @param {string} variableId
     * @param {unknown} expectedValue
     * @param {VM.Target[]} clones
     * @returns {VM.Target|null}
     */
    getCloneFromVariable(variableId, expectedValue, clones) {
        for (let index = 1; index < clones.length; index++) {
            const cloneVar = clones[index].lookupVariableById(variableId);
            if (cloneVar && Scratch.Cast.compare(cloneVar.value, expectedValue) === 0) {
                return clones[index];
            }
        }
        return null;
    }

    getSprites() {
        let spriteNames = [];
        const targets = Scratch.vm.runtime.targets;
        const myself = Scratch.vm.runtime.getEditingTarget().sprite.name;
        for (let index = 1; index < targets.length; index++) {
            const curTarget = targets[index].sprite;
            let display = curTarget.name;
            if (myself === curTarget.name) {
                display = 'myself';
            }
            if (targets[index].isOriginal) {
                const jsonOBJ = {
                    text: display,
                    value: curTarget.name
                };
                spriteNames.push(jsonOBJ);
            }
        }
        if (spriteNames.length > 0) {
            return spriteNames;
        } else {
            return [{
                text: "",
                value: 0
            }]; //this should never happen but it's a failsafe
        }
    }

    clonesplusgetSpriteObj(name) { //This is unused but I'm leaving it in for potential future blocks
        const spriteObj = Scratch.vm.runtime.getSpriteTargetByName(name);
        return JSON.stringify(spriteObj);
    }

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
    }
    //end block
}

const control = function(isInitialSetup, isStage) {
    return `
<category name="%{BKY_CATEGORY_CONTROL} 🪄" id="control" ${Colors.motion.xml}>
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
    <block type="control_clonespluscloneCount">
    </block>
    <block type="control_clonesplusdeleteClonesInSprite">
    <value name="INPUT">
        <shadow type="control_menu_spriteMenu">
</shadow>
    </value>
</block>
<block type="control_clonesplusstopScriptsInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
` : `
    <block type="control_start_as_clone"/>
    <block type="control_clonespluswhenCloneStartsWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
    <block type="control_create_clone_of">
        <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
        </value>
    </block>
    <block type="control_clonespluscreateCloneWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
    <block type="control_delete_this_clone"/>
    <block type="control_clonesplusdeleteCloneWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
<block type="control_clonesplussetVariableOfMainSprite">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplussetVariableOfClone">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">0</field>
</shadow>
</value>
<value name="INPUTC">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTD">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplusstopScriptsInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusdeleteClonesInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
    <block type="control_clonesplusisClone">
    </block>
    <block type="control_clonesplusspriteCloneCount">
    <value name="INPUT">
        <shadow type="control_menu_spriteMenu">
</shadow>
    </value>
</block>
<block type="control_clonespluscloneExists">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplustouchingMainSprite">
</block>
<block type="control_clonesplustouchingCloneWithVar">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>

<block type="control_clonesplusgetThingOfMainSprite">
<value name="INPUT">
<shadow type="control_menu_thingOfMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusgetThingOfClone">
<value name="INPUTA">
<shadow type="control_menu_thingOfMenu">
</shadow>
</value>
<value name="INPUTB">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTC">
<shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplusgetVariableOfMainSprite">
<value name="INPUT">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusgetVariableOfClone">
<value name="INPUTA">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTC">
<shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonespluscloneCount">
</block>
<block type="control_clonesplusstopScriptsInMainSprite">
</block>
<block type="control_clonesplusstopScriptsInClone">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
`}
${categorySeparator}
</category>
`;
};
class TurboChargedEvents {
    constructor() {
        // Stop Sign Clicked contributed by @CST1229
        runtime.shouldExecuteStopClicked = true;
        runtime.on("BEFORE_EXECUTE", () => {
            runTimer++;
            runtime.shouldExecuteStopClicked = false;

            runtime.startHats(eventsID + "_MoreEventsforever");
            runtime.startHats(eventsID + "_MoreEventswhileTrueFalse");
            runtime.startHats(eventsID + "_MoreEventswhenValueChanged");
            runtime.startHats(eventsID + "_MoreEventseveryDuration");
            runtime.startHats(eventsID + "_MoreEventswhileKeyPressed");
        });
        runtime.on("PROJECT_START", () => {
            runTimer = 0;
        });
        runtime.on("PROJECT_STOP_ALL", () => {
            runTimer = 0;
            if (runtime.shouldExecuteStopClicked)
                queueMicrotask(() =>
                    runtime.startHats(eventsID + "_MoreEventswhenStopClicked")
                );
        });
        runtime.on("AFTER_EXECUTE", () => {
            runtime.shouldExecuteStopClicked = true;
        });
        const originalGreenFlag = vm.greenFlag;
        vm.greenFlag = function() {
            runtime.shouldExecuteStopClicked = false;
            originalGreenFlag.call(this);
        };
    }
    getInfo() {
        return {
            id: eventsID,
            name: 'Events 🪄',
            color1: Colors.events.primary,
            color2: Colors.events.secondary,
            color3: Colors.events.tertiary,
            blocks: [{
                    opcode: "MoreEventswhenStopClicked",
                    blockType: Scratch.BlockType.EVENT,
                    text: "when [STOP] clicked",
                    isEdgeActivated: false,
                    arguments: {
                        STOP: {
                            type: Scratch.ArgumentType.IMAGE,
                            dataURI: stopIcon,
                        },
                    },
                },
                {
                    opcode: "MoreEventsforever",
                    blockType: Scratch.BlockType.EVENT,
                    text: "forever",
                    isEdgeActivated: false,
                },
                {
                    opcode: "MoreEventswhenTrueFalse",
                    blockType: Scratch.BlockType.HAT,
                    text: "when [CONDITION] becomes [STATE]",
                    isEdgeActivated: true,
                    arguments: {
                        CONDITION: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        },
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "boolean",
                        },
                    },
                },
                {
                    opcode: "MoreEventswhileTrueFalse",
                    blockType: Scratch.BlockType.HAT,
                    text: "while [CONDITION] is [STATE]",
                    isEdgeActivated: false,
                    arguments: {
                        CONDITION: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        },
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "boolean",
                        },
                    },
                },
                {
                    opcode: "MoreEventswhenValueChanged",
                    blockType: Scratch.BlockType.HAT,
                    text: "when [INPUT] is changed",
                    isEdgeActivated: false,
                    arguments: {
                        INPUT: {
                            // Intentional:
                            // Encourages people to place a block
                            // (as opposed to typing a value)
                            type: null,
                        },
                    },
                },
                {
                    opcode: "MoreEventseveryDuration",
                    blockType: Scratch.BlockType.HAT,
                    text: "every [DURATION] frames",
                    isEdgeActivated: false,
                    arguments: {
                        DURATION: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3,
                        },
                    },
                },
                {
                    opcode: "MoreEventswhenKeyAction",
                    blockType: Scratch.BlockType.HAT,
                    text: "when [KEY_OPTION] key [ACTION]",
                    isEdgeActivated: true,
                    arguments: {
                        KEY_OPTION: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "space",
                            menu: "keyboardButtons",
                        },
                        ACTION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "action",
                        },
                    },
                },
                {
                    opcode: "MoreEventswhileKeyPressed",
                    blockType: Scratch.BlockType.HAT,
                    text: "while [KEY_OPTION] key pressed",
                    isEdgeActivated: false,
                    arguments: {
                        KEY_OPTION: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "space",
                            menu: "keyboardButtons",
                        },
                    },
                },
                {
                    opcode: "MoreEvents_broadcastToTarget",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET]",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastToTargetAndWait",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET] and wait",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastData",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] with data [DATA]",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastDataAndWait",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] with data [DATA] and wait",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    blockType: Scratch.BlockType.XML,
                    xml: `<block type="${eventsID}_MoreEvents_broadcastToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
            </block>
            <block type="${eventsID}_MoreEvents_broadcastToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="${eventsID}_MoreEvents_broadcastData">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${eventsID}_MoreEvents_broadcastDataAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`,
                },
                {
                    opcode: "MoreEventsreceivedData",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "received data",
                    disableMonitor: true,
                    allowDropAnywhere: true,
                },
                {
                    opcode: "MoreEvents_broadcastDataToTarget",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA]",
                    func: "MoreEvents_broadcastToTarget",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastDataToTargetAndWait",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA] and wait",
                    func: "MoreEvents_broadcastToTargetAndWait",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    blockType: Scratch.BlockType.XML,
                    xml: `<block type="${eventsID}_MoreEvents_broadcastDataToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${eventsID}_MoreEvents_broadcastDataToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`,
                }
            ],
            menus: {
                // Targets have acceptReporters: true
                targetMenu: {
                    acceptReporters: true,
                    items: "_getTargets",
                },
                keyboardButtons: {
                    acceptReporters: true,
                    items: validKeyboardInputs,
                },
                // Attributes have acceptReporters: false
                action: {
                    acceptReporters: false,
                    items: ["hit", "released"],
                },
                boolean: {
                    acceptReporters: false,
                    items: ["true", "false"],
                },
                state: {
                    acceptReporters: false,
                    items: ["enabled", "disabled"],
                },
            },
        }
    }

    MoreEventswhenTrueFalse(args) {
        return args.STATE === "true" ? args.CONDITION : !args.CONDITION;
    }

    MoreEventswhileTrueFalse(args) {
        return args.STATE === "true" ? args.CONDITION : !args.CONDITION;
    }

    MoreEventswhenValueChanged(args, util) {
        const blockId = util.thread.peekStack();
        if (!lastValues[blockId])
            lastValues[blockId] = Scratch.Cast.toString(args.INPUT);
        if (lastValues[blockId] !== Scratch.Cast.toString(args.INPUT)) {
            lastValues[blockId] = Scratch.Cast.toString(args.INPUT);
            return true;
        }
        return false;
    }

    MoreEventseveryDuration(args, util) {
        const duration = Math.max(
            Math.round(Scratch.Cast.toNumber(args.DURATION)),
            0
        );
        return !!(runTimer % duration === 0);
    }

    MoreEventswhenKeyAction(args, util) {
        const key = Scratch.Cast.toString(args.KEY_OPTION).toLowerCase();
        const pressed = util.ioQuery("keyboard", "getKeyIsDown", [key]);
        return args.ACTION === "released" ? !pressed : pressed;
    }

    MoreEventswhileKeyPressed(args, util) {
        const key = Scratch.Cast.toString(args.KEY_OPTION).toLowerCase();
        return util.ioQuery("keyboard", "getKeyIsDown", [key]);
    }

    MoreEvents_broadcastToTarget(args, util) {
        const broadcastOption = Scratch.Cast.toString(args.BROADCAST_OPTION);
        if (!broadcastOption) return;

        const data = Scratch.Cast.toString(args.DATA);
        console.log(data);

        const cloneTargets = this._getTargetFromMenu(args.TARGET).sprite.clones;
        let startedThreads = [];

        for (const clone of cloneTargets) {
            startedThreads = [
                ...startedThreads,
                ...util.startHats(
                    "event_whenbroadcastreceived", {
                        BROADCAST_OPTION: broadcastOption,
                    },
                    clone
                ),
            ];
            if (data) {
                startedThreads.forEach((thread) => (thread.receivedData = args.DATA));
            }
        }
    }

    MoreEvents_broadcastToTargetAndWait(args, util) {
        if (!util.stackFrame.broadcastVar) {
            util.stackFrame.broadcastVar = Scratch.Cast.toString(
                args.BROADCAST_OPTION
            );
        }

        const spriteTarget = this._getTargetFromMenu(args.TARGET);
        if (!spriteTarget) return;
        const cloneTargets = spriteTarget.sprite.clones;

        const data = Scratch.Cast.toString(args.DATA);

        if (util.stackFrame.broadcastVar) {
            const broadcastOption = util.stackFrame.broadcastVar;
            if (!util.stackFrame.startedThreads) {
                util.stackFrame.startedThreads = [];
                for (const clone of cloneTargets) {
                    util.stackFrame.startedThreads = [
                        ...util.stackFrame.startedThreads,
                        ...util.startHats(
                            "event_whenbroadcastreceived", {
                                BROADCAST_OPTION: broadcastOption,
                            },
                            clone
                        ),
                    ];
                    if (data) {
                        util.stackFrame.startedThreads.forEach(
                            (thread) => (thread.receivedData = args.DATA)
                        );
                    }
                }
                if (util.stackFrame.startedThreads.length === 0) {
                    return;
                }
            }

            const waiting = util.stackFrame.startedThreads.some(
                (thread) => runtime.threads.indexOf(thread) !== -1
            );
            if (waiting) {
                if (
                    util.stackFrame.startedThreads.every((thread) =>
                        runtime.isWaitingThread(thread)
                    )
                ) {
                    util.yieldTick();
                } else {
                    util.yield();
                }
            }
        }
    }

    MoreEvents_broadcastData(args, util) {
        const broadcast = Scratch.Cast.toString(args.BROADCAST_OPTION);
        if (!broadcast) return;

        const data = Scratch.Cast.toString(args.DATA);

        let threads = util.startHats("event_whenbroadcastreceived", {
            BROADCAST_OPTION: broadcast,
        });
        threads.forEach((thread) => (thread.receivedData = data));
    }

    MoreEvents_broadcastDataAndWait(args, util) {
        const data = Scratch.Cast.toString(args.DATA);

        if (!util.stackFrame.broadcastVar) {
            util.stackFrame.broadcastVar = Scratch.Cast.toString(
                args.BROADCAST_OPTION
            );
        }

        if (util.stackFrame.broadcastVar) {
            const broadcastOption = util.stackFrame.broadcastVar;
            if (!util.stackFrame.startedThreads) {
                util.stackFrame.startedThreads = util.startHats(
                    "event_whenbroadcastreceived", {
                        BROADCAST_OPTION: broadcastOption,
                    }
                );
                if (util.stackFrame.startedThreads.length === 0) {
                    return;
                } else {
                    util.stackFrame.startedThreads.forEach(
                        (thread) => (thread.receivedData = data)
                    );
                }
            }

            const waiting = util.stackFrame.startedThreads.some(
                (thread) => runtime.threads.indexOf(thread) !== -1
            );
            if (waiting) {
                if (
                    util.stackFrame.startedThreads.every((thread) =>
                        runtime.isWaitingThread(thread)
                    )
                ) {
                    util.yieldTick();
                } else {
                    util.yield();
                }
            }
        }
    }

    MoreEventsreceivedData(args, util) {
        const received = util.thread.receivedData;
        return received ? received : "";
    }

    _getTargetFromMenu(targetName) {
        let target = Scratch.vm.runtime.getSpriteTargetByName(targetName);
        if (targetName === "_stage_") target = runtime.getTargetForStage();
        return target;
    }

    _getTargets() {
        const spriteNames = [{
            text: "Stage",
            value: "_stage_"
        }];
        const targets = Scratch.vm.runtime.targets;
        for (let index = 1; index < targets.length; index++) {
            const target = targets[index];
            if (target.isOriginal) {
                const targetName = target.getName();
                spriteNames.push({
                    text: targetName,
                    value: targetName,
                });
            }
        }
        if (spriteNames.length > 0) {
            return spriteNames;
        } else {
            return [{
                text: "",
                value: 0
            }]; //this should never happen but it's a failsafe
        }
    }
}

const events = function(isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS} 🪄" id="${eventsID}" ${Colors.events.xml}>
    <block type="event_whenflagclicked"/>
    <block type="${eventsID}_MoreEventswhenStopClicked"></block>
    <block type="${eventsID}_MoreEventsforever"></block>
            ${blockSeparator}
            
    <block type="event_whenkeypressed"></block>
    <block type="${eventsID}_MoreEventswhenKeyAction">
        <value name="KEY_OPTION">
            <shadow type="${eventsID}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEventswhileKeyPressed">
        <value name="KEY_OPTION">
            <shadow type="${eventsID}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
            ${blockSeparator}
            
    <block type="${eventsID}_MoreEventswhenTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${eventsID}_MoreEventswhileTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${eventsID}_MoreEventswhenValueChanged">
        <value name="INPUT"></value>
    </block>
            ${isStage ? `
                
    <block type="event_whenstageclicked"/>
            ` : `
                
    <block type="event_whenthisspriteclicked"/>
            `}
            
    <block type="event_whenbackdropswitchesto"></block>
            ${blockSeparator}
            
    <block type="event_whengreaterthan">
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
            ${blockSeparator}
            
    <block type="event_whenbroadcastreceived"></block>
    <block type="event_broadcast">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
    <block type="event_broadcastandwait">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
    </block>
    ${blockSeparator}
    <block type="${eventsID}_MoreEvents_broadcastData">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastDataAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEventsreceivedData"></block>
    ${blockSeparator}
    <block type="${eventsID}_MoreEvents_broadcastDataToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastDataToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
            ${categorySeparator}
        
</category>
    `;
};
class TurboChargedLooks {
    getInfo() {
        return {
            id: 'looks',
            name: 'Looks 🪄',
            color1: Colors.looks.primary,
            color2: Colors.looks.secondary,
            color3: Colors.looks.tertiary,
            blocks: []
        }
    }
}

const looks = function(isInitialSetup, isStage, targetId, costumeName, backdropName) {
    const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');
    const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');
    return `
<category name="%{BKY_CATEGORY_LOOKS} 🪄" id="looks" ${Colors.looks.xml}>
${isStage ? '' : `
<block type="looks_sayforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hello}</field>
        </shadow>
    </value>
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">2</field>
        </shadow>
    </value>
</block>
<block type="looks_say">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hello}</field>
        </shadow>
    </value>
</block>
<block type="looks_thinkforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hmm}</field>
        </shadow>
    </value>
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">2</field>
        </shadow>
    </value>
</block>
<block type="looks_think">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hmm}</field>
        </shadow>
    </value>
</block>
${blockSeparator}
`}
${isStage ? `
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_switchbackdroptoandwait">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
` : `
    <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto">
        <value name="COSTUME">
            <shadow type="looks_costume">
                <field name="COSTUME">${costumeName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextcostume"/>
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
    ${blockSeparator}
    <block type="looks_changesizeby">
        <value name="CHANGE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="looks_setsizeto">
        <value name="SIZE">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
`}
${blockSeparator}
<block type="looks_changeeffectby">
    <value name="CHANGE">
        <shadow type="math_number">
            <field name="NUM">25</field>
        </shadow>
    </value>
</block>
<block type="looks_seteffectto">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="looks_cleargraphiceffects"/>
${blockSeparator}
${isStage ? '' : `
    <block type="looks_show"/>
    <block type="looks_hide"/>
${blockSeparator}
    <block type="looks_gotofrontback"/>
    <block type="looks_goforwardbackwardlayers">
        <value name="NUM">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
`}
${isStage ? `
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
` : `
    <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
    <block id="${targetId}_size" type="looks_size"/>
`}
${categorySeparator}
</category>
`;
};
class TurboChargedMotion {
    getInfo() {
        return {
            id: 'motion',
            name: 'Motion 🪄',
            color1: Colors.motion.primary,
            color2: Colors.motion.secondary,
            color3: Colors.motion.tertiary,
            blocks: [
                /* this block of code is for the credits category */
                {
                    //buttons dont need color change.
                    blockType: Scratch.BlockType.BUTTON,
                    text: 'Credits',
                    func: 'credit',
                }, {

                    disableMonitor: true,
                    opcode: 'credit_version',
                    func: 'credit_version',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'TurboCharged Version',
                    isDynamic: true,
                    color1: '#ffb6c1'
                },
                /* end credit blocks and start motion */
                {
                    opcode: 'rotationStyle',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'rotation style'
                }, {
                    opcode: 'moremotionchangexy',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'change x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotionpointto',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'point towards x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotionfence',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'manually fence'
                }, {
                    opcode: 'moremotionsteptowards',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'move [STEPS] steps towards x: [X] y: [Y]',
                    arguments: {
                        STEPS: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiontweentowards',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'move [PERCENT]% of the way to x: [X] y: [Y]',
                    arguments: {
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiondirectionto',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'direction to x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiondistanceto',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'distance from x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotionspritewh',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sprite [WHAT]',
                    disableMonitor: true,
                    arguments: {
                        WHAT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'moremotionWHAT'
                        }
                    }
                }, {
                    opcode: 'moremotiontouchingxy',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching x: [X] y: [Y]?',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiontouchingrect',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching rectangle x1: [X1] y1: [Y1] x2: [X2] y2: [Y2]?',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '-100'
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '-100'
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '100'
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '100'
                        }
                    }
                }
            ],
            menus: {
                moremotionWHAT: {
                    acceptreporters: true,
                    items: [
                        'width', 'height', 'costume width', 'costume height'
                    ]
                }
            }
        }
    }
    /* this block of code is for the credits category */
    doNothing() {}
    credit() {
        credits_blob();
    }
    credit_version() {
        return parseInt(version.toString());
    }
    /* end credit blocks and start motion */

    rotationStyle(args, util) {
        return util.target.rotationStyle;
    }
    //more motion extension
    moremotionchangexy(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        util.target.setXY(util.target.x + x, util.target.y + y);
    }

    // LORAX APPROVED
    moremotionpointto(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        if (util.target.y > y) {
            util.target.setDirection(((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y))) + 180);
        } else {
            util.target.setDirection(((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y))));
        }
    }

    moremotionfence(args, util) {
        const newpos = Scratch.vm.renderer.getFencedPositionOfDrawable(util.target.drawableID, [util.target.x, util.target.y]);
        util.target.setXY(newpos[0], newpos[1]);
    }

    moremotiondirectionto(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        if (util.target.y > y) {
            return ((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y))) + 180;
        } else {
            return ((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y)));
        }
    }

    moremotiondistanceto(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        // Shoutout to Pythagoras!
        return Math.sqrt(((x - util.target.x) ** 2) + ((y - util.target.y) ** 2));
    }

    moremotionsteptowards(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        const steps = Scratch.Cast.toNumber(args.STEPS);
        const val = steps / (Math.sqrt(((x - util.target.x) ** 2) + ((y - util.target.y) ** 2)));
        if (val >= 1) {
            util.target.setXY(x, y);
        } else {
            util.target.setXY(((x - util.target.x) * (val)) + util.target.x, ((y - util.target.y) * (val)) + util.target.y);
        }
    }

    moremotiontweentowards(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        const val = Scratch.Cast.toNumber(args.PERCENT);
        // Essentially a smooth glide script.
        util.target.setXY(((x - util.target.x) * (val / 100)) + util.target.x, ((y - util.target.y) * (val / 100)) + util.target.y);
    }

    moremotiontouchingrect(args, util) {
        let left = Scratch.Cast.toNumber(args.X1);
        let right = Scratch.Cast.toNumber(args.X2);
        let bottom = Scratch.Cast.toNumber(args.Y1);
        let top = Scratch.Cast.toNumber(args.Y2);

        // Fix argument order if they got it backwards
        if (left > right) {
            let temp = left;
            left = right;
            right = temp;
        }
        if (bottom > top) {
            let temp = bottom;
            bottom = top;
            bottom = temp;
        }

        const drawable = Scratch.vm.renderer._allDrawables[util.target.drawableID];
        if (!drawable) {
            return false;
        }

        // See renderer.isTouchingDrawables

        const drawableBounds = drawable.getFastBounds();
        drawableBounds.snapToInt();

        // This is bad, need to rewrite this when renderer exports Rectangle
        const Rectangle = Object.getPrototypeOf(drawableBounds).constructor;

        /** @type {RenderWebGL.Rectangle} */
        const containsBounds = new Rectangle();
        containsBounds.initFromBounds(left, right, bottom, top);
        containsBounds.snapToInt();

        if (!containsBounds.intersects(drawableBounds)) {
            return false;
        }

        drawable.updateCPURenderAttributes();

        /** @type {RenderWebGL.Rectangle} */
        const intersectingBounds = Rectangle.intersect(drawableBounds, containsBounds);
        for (let x = intersectingBounds.left; x < intersectingBounds.right; x++) {
            for (let y = intersectingBounds.bottom; y < intersectingBounds.top; y++) {
                // technically should be a twgl vec3, but does not actually need to be
                if (drawable.isTouching([x, y])) {
                    return true;
                }
            }
        }
        return false;
    }

    moremotiontouchingxy(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        const drawable = Scratch.vm.renderer._allDrawables[util.target.drawableID];
        if (!drawable) {
            return false;
        }
        // Position should technically be a twgl vec3, but it doesn't actually need to be
        drawable.updateCPURenderAttributes();
        return drawable.isTouching([x, y]);
    }

    moremotionspritewh(args, util) {
        if (args.WHAT === 'width' || args.WHAT === 'height') {
            const bounds = Scratch.vm.renderer.getBounds(util.target.drawableID);
            if (args.WHAT === 'width') {
                return Math.ceil(bounds.width);
            } else {
                return Math.ceil(bounds.height);
            }
        } else if (args.WHAT === 'costume width' || args.WHAT === 'costume height') {
            const costume = util.target.sprite.costumes[util.target.currentCostume];
            if (args.WHAT === 'costume width') {
                return Math.ceil(costume.size[0]);
            } else {
                return Math.ceil(costume.size[1]);
            }
        }
    }
    //end block
}

class TurboChargedCredits {
    getInfo() {
        return {
            id: '_credits',
            name: 'Credits 🪄',
            color1: '#4C97FF',
            color2: '#3373CC',
            blocks: []
        }
    }
}

const credits = function(isInitialSetup, isStage, targetId) {
    return `
<category name="Credits 🪄" id="credits" colour="#ffb6c1" secondaryColour="#ffc0cb"> //oooooo :D
<button text="Credits" callbackKey="EXTENSION_CALLBACK" callbackData="motion_credit"></button>
<block type="motion_credit_version">
<mutation blockInfo='{"blockType":"reporter","terminal":false,"blockAllThreads":false,"arguments":{},"opcode":"credit_version","text":"TurboCharged Version","isDynamic":true,"color1":"#ffb6c1","isTerminal":false,"disableMonitor":true}'/> // this was extremely annoying but worth it.
</block>
${categorySeparator}
</category>`;
}

const motion = function(isInitialSetup, isStage, targetId) {
    const stageSelected = ScratchBlocks.ScratchMsgs.translate(
        'MOTION_STAGE_SELECTED', 'Stage Selected: No Motion Blocks'
    );
    return `
${credits(isInitialSetup, isStage, targetId)}
<category name="%{BKY_CATEGORY_MOTION} 🪄" id="motion" ${Colors.motion.xml}>
${isStage ? `
<label text="${stageSelected}"></label>
` : `
<block type="motion_movesteps">
    <value name="STEPS">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_moremotionsteptowards">
<value name="STEPS">
    <shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_changexby">
    <value name="DX">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_setx">
    <value name="X">
        <shadow id="setx" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="motion_changeyby">
    <value name="DY">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_sety">
    <value name="Y">
        <shadow id="sety" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
        <block type="motion_moremotionchangexy">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
${blockSeparator}
<block type="motion_goto">
    <value name="TO">
        <shadow type="motion_goto_menu">
        </shadow>
    </value>
</block>
<block type="motion_gotoxy">
    <value name="X">
        <shadow id="movex" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="movey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="motion_glideto" id="motion_glideto">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="motion_glideto_menu">
        </shadow>
    </value>
</block>
<block type="motion_glidesecstoxy">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="X">
        <shadow id="glidex" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="glidey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="motion_moremotiontweentowards">
<value name="PERCENT">
    <shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
<value name="X">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
${blockSeparator}
<block id="${targetId}_xposition" type="motion_xposition"/>
<block id="${targetId}_yposition" type="motion_yposition"/>
${blockSeparator}
<block type="motion_moremotiontouchingxy">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_moremotiontouchingrect">
    <value name="X1">
        <shadow type="math_number">
<field name="NUM">-100</field>
</shadow>
    </value>
    <value name="Y1">
        <shadow type="math_number">
<field name="NUM">-100</field>
</shadow>
    </value>
    <value name="X2">
        <shadow type="math_number">
<field name="NUM">100</field>
</shadow>
    </value>
    <value name="Y2">
        <shadow type="math_number">
<field name="NUM">100</field>
</shadow>
    </value>
</block>
${blockSeparator}
<block type="motion_pointindirection">
    <value name="DIRECTION">
        <shadow type="math_angle">
            <field name="NUM">90</field>
        </shadow>
    </value>
</block>
<block type="motion_pointtowards">
    <value name="TOWARDS">
        <shadow type="motion_pointtowards_menu">
        </shadow>
    </value>
</block>
<block type="motion_moremotionpointto">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_moremotiondirectionto">
<value name="X">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_turnright">
    <value name="DEGREES">
        <shadow type="math_number">
            <field name="NUM">15</field>
        </shadow>
    </value>
</block>
<block type="motion_turnleft">
    <value name="DEGREES">
        <shadow type="math_number">
            <field name="NUM">15</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_direction" type="motion_direction"/>
${blockSeparator}
<block type="motion_setrotationstyle"/>
<block id="${targetId}_rotationStyle" type="motion_rotationStyle"/>
<block type="motion_moremotionspritewh">
<value name="WHAT">
    <shadow type="motion_menu_moremotionWHAT">
</shadow>
</value>
</block>
${blockSeparator}
<block type="motion_ifonedgebounce"/>
${blockSeparator}
<block type="motion_moremotionfence">
</block>
`}
${categorySeparator}
</category>
`;
}

class TurboChargedOperators {
    getInfo() {
        return {
            id: 'operators',
            name: 'Operators 🪄',
            color1: Colors.operators.primary,
            color2: Colors.operators.secondary,
            color3: Colors.operators.tertiary,
            blocks: [{
                    opcode: 'percentof',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'what is [PERCENT]% of [AMOUNT]?',
                    disableMonitor: true,
                    arguments: {
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        AMOUNT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                },
                /*{
                                   opcode: 'percentin',
                                   blockType: Scratch.BlockType.REPORTER,
                                   text: '[AMOUNT] is what percent of [MAX]?',
                                   disableMonitor: true,
                                   arguments: {
                                       PERCENT: {
                                           type: Scratch.ArgumentType.NUMBER,
                                           defaultValue: '10'
                                       },
                                       MAX: {
                                           type: Scratch.ArgumentType.NUMBER,
                                           defaultValue: '50'
                                       }
                                   }
                               },*/
                {
                    opcode: 'percentis',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[AMOUNT] is [PERCENT]% of what?',
                    disableMonitor: true,
                    arguments: {
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5'
                        },
                        MAX: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        }
                    }
                }, {
                    opcode: 'percentUD',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'what is [AMOUNT] [MODE] by [PERCENT]%?',
                    disableMonitor: true,
                    arguments: {
                        AMOUNT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '45'
                        },
                        MODE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'percentMode'
                        },
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '11.11'
                        }
                    }
                }, {
                    opcode: 'clamp',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'clamp [NUM] between [MIN] and [MAX]',
                    arguments: {
                        NUM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        MIN: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 25
                        },
                        MAX: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 40
                        }
                    }
                }, {
                    opcode: 'egg',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'egg [TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '🥚'
                        }
                    }
                }, {
                    opcode: 'gtEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] â‰¥ [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'ltEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] â‰¤ [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'nor',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] nor [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'xor',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] xor [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'substring',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'letters [START] to [END] of [STRING]',
                    arguments: {
                        START: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                        END: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        }
                    }
                }, {
                    opcode: 'replace',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'replace [INPUT1] with [INPUT2] in [STRING]',
                    arguments: {
                        INPUT1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Charged'
                        },
                        INPUT2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Warp'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'TurboCharged'
                        }
                    }
                }, {
                    opcode: 'true_block',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'true'
                }, {
                    opcode: 'false_block',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'false'
                }, {
                    opcode: 'bool_coupler',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'true'
                        }
                    }
                }, {
                    opcode: 'ifthenelse_reporter',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'if [CONDITION] then [TEXT1] else [TEXT2]',
                    arguments: {
                        CONDITION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        TEXT1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'pass'
                        },
                        TEXT2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'fail'
                        }
                    }
                }, {
                    opcode: 'test',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'test click me',
                    callback: 'test'
                }, {
                    opcode: 'presadd',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] + [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.2'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                    }
                }, {
                    opcode: 'pressubtract',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] - [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.4'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                    }
                }, {
                    opcode: 'presmultiply',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] * [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.3'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                    }
                }, {
                    opcode: 'presdivided',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] / [B] to precision of [PRE]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '10'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '3'
                        },
                        PRE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '10'
                        },
                    }
                }, {
                    opcode: "textplusletters_of",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "letters [LETTER1] to [LETTER2] of [STRING]",
                    arguments: {
                        LETTER1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                        },
                        LETTER2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '4'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                    }
                }, {
                    opcode: "textplussplit",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "item [ITEM] of [STRING] split by [SPLIT]",
                    arguments: {
                        ITEM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        },
                        SPLIT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "p"
                        }
                    }
                }, {
                    opcode: "textpluscount",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "count [SUBSTRING] in [STRING]",
                    arguments: {
                        SUBSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "p"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                    }
                }, {
                    opcode: "textplusindexof",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "index of [SUBSTRING] in [STRING]",
                    arguments: {
                        SUBSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "p"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                    }
                }, {
                    opcode: "textplusreplace",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "replace [SUBSTRING] in [STRING] with [REPLACE]",
                    arguments: {
                        SUBSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "world"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REPLACE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "fellow Scratchers"
                        }
                    }
                }, {
                    opcode: "textplusrepeat",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "repeat [STRING] [REPEAT] times",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple "
                        },
                        REPEAT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        }
                    }
                }, {
                    opcode: "textplusunicodeof",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Unicode of [STRING]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "A"
                        }
                    }
                }, {
                    opcode: "textplusunicodefrom",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Unicode [NUM] as letter",
                    arguments: {
                        NUM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '65'
                        }
                    }
                }, {
                    opcode: "textplusreplaceRegex",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]",
                    arguments: {
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "."
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "g"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REPLACE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "$&$&"
                        }
                    }
                }, {
                    opcode: "textplusmatchRegex",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]",
                    arguments: {
                        ITEM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "(.) (.{2})"
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "g"
                        }
                    }
                }, {
                    opcode: "textpluscountRegex",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "count regex /[REGEX]/[FLAGS] in [STRING]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "[AEIOU]"
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "i"
                        }
                    }
                }, {
                    opcode: "textplustestRegex",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "[STRING] matches regex /[REGEX]/[FLAGS]?",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "hello"
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "i"
                        }
                    }
                }, {
                    opcode: "textplusidentical",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "is [OPERAND1] identical to [OPERAND2]?",
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "A"
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "a"
                        }
                    }
                }, {
                    opcode: "textplusisCase",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "is [STRING] [TEXTCASE]?",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        },
                        TEXTCASE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "textCase",
                            defaultValue: window.extensionData.textPlus.CaseParam.LOWERCASE
                        }
                    }
                }, {
                    opcode: "textplustoCase",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "convert [STRING] to [TEXTCASE]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        },
                        TEXTCASE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "textCase",
                            defaultValue: window.extensionData.textPlus.CaseParam.UPPERCASE
                        }
                    }
                }, {
                    opcode: 'casttoType',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'cast [INPUT] to [TYPE]',
                    allowDropAnywhere: true,
                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        },
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'castType'
                        }
                    }
                }, {
                    opcode: 'casttypeOf',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'type of [INPUT]',
                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        }
                    }
                }, {
                    opcode: 'tweenValue',
                    text: '[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%',
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        MODE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'tweenmodes'
                        },
                        DIRECTION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'tweendirection'
                        },
                        START: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        END: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        AMOUNT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                    }
                }
            ],
            menus: {
                percentMode: {
                    acceptReporters: true,
                    items: [{
                        text: "increased",
                        value: "increased"
                    }, {
                        text: "decreased",
                        value: "decreased"
                    }]
                },
                textCase: {
                    acceptReporters: true,
                    items: [{
                        text: "lowercase",
                        value: window.extensionData.textPlus.CaseParam.LOWERCASE
                    }, {
                        text: "UPPERCASE",
                        value: window.extensionData.textPlus.CaseParam.UPPERCASE
                    }, {
                        text: "Title Case",
                        value: window.extensionData.textPlus.CaseParam.TITLECASE
                    }, {
                        text: "Exactly Title Case",
                        value: window.extensionData.textPlus.CaseParam.EXACTTITLECASE
                    }, {
                        text: "MiXeD CaSe",
                        value: window.extensionData.textPlus.CaseParam.MIXEDCASE
                    }]
                },
                castType: {
                    acceptReporters: true,
                    items: [
                        'number', 'string', 'boolean', 'default'
                    ]
                },
                tweenmodes: {
                    acceptReporters: true,
                    items: [
                        "linear", "sine", "quad", "cubic", "quart", "quint", "expo", "circ", "back", "elastic", "bounce"
                    ]
                },
                tweendirection: {
                    acceptReporters: true,
                    items: [
                        "in", "out", "in out"
                    ]
                }
            }
        };
    }

    clamp(args, util) {
        const NUM = args.NUM;
        const MIN = args.MIN;
        const MAX = args.MAX;
        if (MIN > MAX) {
            return Scratch.Cast.toNumber(Math.min(Math.max(NUM, MAX), MIN));
        } else {
            return Scratch.Cast.toNumber(Math.min(Math.max(NUM, MIN), MAX));
        }
    }
    ifthenelse_reporter({
        CONDITION,
        TEXT1,
        TEXT2
    }, util) {
        return (CONDITION ? TEXT1 : TEXT2);
    }
    egg({
        TEXT
    }, util) {
        alert(`${TEXT} is🥚`)
        return '🥚';
        //return Scratch.Cast.toNumber(NUM);
    }
    gtEqual(args, util) {
        return (args.OPERAND1 <= args.OPERAND2);
    }
    ltEqual(args, util) {
        return (args.OPERAND1 >= args.OPERAND2);
    }
    nor(args, util) {
        return !(args.OPERAND1 || args.OPERAND2);
    }
    xor(args, util) {
        return (args.OPERAND1 !== args.OPERAND1);
    }
    substring(args, util) {
        const START = args.START;
        const END = args.END;
        const STRING = args.STRING;
        return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
    }
    replace(args, util) {
        const INPUT1 = args.INPUT1
        const INPUT2 = args.INPUT2
        const STRING = args.STRING;
        return STRING.toString().replace(new RegExp(INPUT1, 'gi'), INPUT2);
    }
    true_block() {
        return true;
    }
    false_block() {
        return false;
    }
    bool_coupler({
        TEXT
    }) {
        return Scratch.Cast.toBoolean(TEXT);
    }
    test() {
        alert(1);
    }
    percentof(args) {
        return (Scratch.Cast.toNumber(args.AMOUNT) * Scratch.Cast.toNumber(args.PERCENT)) / 100;
    }
    percentis(args) {
        return (Scratch.Cast.toNumber(args.AMOUNT) * 100) / Scratch.Cast.toNumber(args.PERCENT);
    }
    percentin(args) {
        return (Scratch.Cast.toNumber(args.AMOUNT) * 100) / Scratch.Cast.toNumber(args.PERCENT);
    }
    percentUD(args) {
        args.AMOUNT = Scratch.Cast.toNumber(args.AMOUNT);
        args.PERCENT = Scratch.Cast.toNumber(args.PERCENT);
        var x = args.AMOUNT,
            p = args.PERCENT;
        var y1 = x * ((100 + p) / 100);
        var y2 = x * ((100 - p) / 100);
        switch (args.MODE) {
            case 'increased':
                return y1;
            case 'decreased':
                return y2;
            default:
                return y1;
        }
    }
    //start other extensions
    //high presicion extension
    presadd(args) {
        var num1 = Scratch.Cast.toString(args.A),
            num2 = Scratch.Cast.toString(args.B);
        let isNegative1 = false;
        let isNegative2 = false;
        if (num1[0] === '-') isNegative1 = true, num1 = num1.slice(1);
        if (num2[0] === '-') isNegative2 = true, num2 = num2.slice(1);
        let [intPart1, decimalPart1] = num1.split('.');
        let [intPart2, decimalPart2] = num2.split('.');
        if (!decimalPart1) decimalPart1 = '0';
        if (!decimalPart2) decimalPart2 = '0';
        const maxDecimalLength = Math.max(decimalPart1.length, decimalPart2.length);
        decimalPart1 = decimalPart1.padEnd(maxDecimalLength, '0');
        decimalPart2 = decimalPart2.padEnd(maxDecimalLength, '0');
        const combined1 = (isNegative1 ? '-' : '') + intPart1 + decimalPart1;
        const combined2 = (isNegative2 ? '-' : '') + intPart2 + decimalPart2;
        const sumBigInt = BigInt(combined1) + BigInt(combined2);
        let result = sumBigInt.toString();
        result = result.slice(0, -maxDecimalLength) + '.' + result.slice(-maxDecimalLength);
        if (result[0] == '.') result = '0' + result;
        const regex = /^[-0.0]*$/;
        if (regex.test(result)) return "0";
        return result;
    }
    pressubtract(args) {
        var num1 = Scratch.Cast.toString(args.A),
            num2 = Scratch.Cast.toString(args.B);
        let isNegative1 = false;
        let isNegative2 = false;
        if (num1[0] === '-') isNegative1 = true, num1 = num1.slice(1);
        if (num2[0] === '-') isNegative2 = true, num2 = num2.slice(1);
        let [intPart1, decimalPart1] = num1.split('.');
        let [intPart2, decimalPart2] = num2.split('.');
        if (!decimalPart1) decimalPart1 = '0';
        if (!decimalPart2) decimalPart2 = '0';
        const maxDecimalLength = Math.max(decimalPart1.length, decimalPart2.length);
        decimalPart1 = decimalPart1.padEnd(maxDecimalLength, '0');
        decimalPart2 = decimalPart2.padEnd(maxDecimalLength, '0');
        const combined1 = (isNegative1 ? '-' : '') + intPart1 + decimalPart1;
        const combined2 = (isNegative2 ? '-' : '') + intPart2 + decimalPart2;
        const differenceBigInt = BigInt(combined1) - BigInt(combined2);
        let result = differenceBigInt.toString();
        result = result.slice(0, -maxDecimalLength) + '.' + result.slice(-maxDecimalLength);
        if (result[0] == '.') result = '0' + result;
        const regex = /^[-0.0]*$/;
        if (regex.test(result)) return "0";
        return result;
    }
    presmultiply(args) {
        var num1 = Scratch.Cast.toString(args.A),
            num2 = Scratch.Cast.toString(args.B);
        let isNegative1 = false;
        let isNegative2 = false;
        if (num1[0] === '-') isNegative1 = true, num1 = num1.slice(1);
        if (num2[0] === '-') isNegative2 = true, num2 = num2.slice(1);
        let [intPart1, decimalPart1] = num1.split('.');
        let [intPart2, decimalPart2] = num2.split('.');
        if (!decimalPart1) decimalPart1 = '0';
        if (!decimalPart2) decimalPart2 = '0';
        const decimalLength = decimalPart1.length + decimalPart2.length;
        intPart1 = intPart1.replace(/^0+/, '');
        intPart2 = intPart2.replace(/^0+/, '');
        const intProduct = BigInt(intPart1) * BigInt(intPart2);
        let decimalProduct = BigInt(decimalPart1) * BigInt(decimalPart2);
        decimalProduct = decimalProduct.toString().padStart(decimalLength, '0');
        let result = (isNegative1 !== isNegative2 ? '-' : '') + intProduct.toString();
        if (decimalLength > 0) result += '.' + decimalProduct;
        const regex = /^[-0.0]*$/;
        if (regex.test(result)) return "0";
        return result;
    }
    presdivided(args) {
        var dividend = Scratch.Cast.toString(args.A),
            divisor = Scratch.Cast.toString(args.B);
        var precision = Scratch.Cast.toNumber(args.PRE);
        const dividendNum = parseFloat(dividend);
        const divisorNum = parseFloat(divisor);
        if (divisorNum === 0) return 'divisor can\'t is zero';
        const resultNum = dividendNum / divisorNum;
        let result = resultNum.toFixed(precision).toString();
        var last = '.' + '0'.repeat(precision);
        result = result.replace(/(\.[0-9]*[1-9])0+$/, '$1');
        if (result.endsWith(last)) return result.split(last)[0];
        return result;
    }
    //end block
    //text+ extension
    textplusidentical(args, util) {
        // Purposefully no casting, because
        // types ARE differentiated in this block
        return args.OPERAND1 === args.OPERAND2;
    }
    textplusunicodeof(args, util) {
        const chars = Array.from(args.STRING.toString());
        return chars.map((char) => char.charCodeAt(0)).join(" ");
    }
    textplusunicodefrom(args, util) {
        return String.fromCharCode(Number(args.NUM) || 0);
    }
    textplusletters_of(args, util) {
        args.STRING = args.STRING.toString();
        args.LETTER1 = Number(args.LETTER1) || 0;
        args.LETTER2 = Number(args.LETTER2) || 0;
        return args.STRING.substring(args.LETTER1 - 1, args.LETTER2);
    }
    _caseInsensitiveRegex(str) {
        return new RegExp(
            str.replaceAll(/[^a-zA-Z0-9]/g, "\\$&"), "gi"
        );
    }
    textplussplit(args, util) {
        args.STRING = (args.STRING ?? "").toString();
        args.SPLIT = (args.SPLIT ?? "").toString();
        args.ITEM = Number(args.ITEM) || 0;
        // Cache the last split
        if (!(
                window.extensionData.textPlus.splitCache &&
                window.extensionData.textPlus.splitCache.string === args.STRING &&
                window.extensionData.textPlus.splitCache.split === args.SPLIT
            )) {
            const regex = this._caseInsensitiveRegex(args.SPLIT);
            window.extensionData.textPlus.splitCache = {
                string: args.STRING,
                split: args.SPLIT,
                arr: args.STRING.split(regex)
            };
        }
        return window.extensionData.textPlus.splitCache.arr[args.ITEM - 1] || "";
    }
    textpluscount(args, util) {
        // Fill cache
        this.split({
            SPLIT: args.SUBSTRING,
            STRING: args.STRING,
            ITEM: 0
        }, util);
        return (window.extensionData.textPlus.splitCache.arr.length - 1) || 0;
    }
    textplusreplace(args, util) {
        args.STRING = args.STRING.toString();
        args.SUBSTRING = args.SUBSTRING.toString();
        args.REPLACE = args.REPLACE.toString();
        const regex = this._caseInsensitiveRegex(args.SUBSTRING);
        return args.STRING.replace(regex, args.REPLACE);
    }
    textplusindexof(args, util) {
        // .toLowerCase() for case insensitivity
        args.STRING = (args.STRING ?? "").toString().toLowerCase();
        args.SUBSTRING = (args.SUBSTRING ?? "").toString().toLowerCase();
        // Since both arguments are casted to strings beforehand,
        // we don't have to worry about type differences
        // like in the item number of in list block
        const found = args.STRING.indexOf(args.SUBSTRING);
        // indexOf returns -1 when no matches are found, we can just +1
        return found + 1;
    }
    textplusrepeat(args, util) {
        args.STRING = args.STRING.toString();
        args.REPEAT = Number(args.REPEAT) || 0;
        return args.STRING.repeat(args.REPEAT);
    }
    textplusreplaceRegex(args, util) {
        try {
            args.STRING = args.STRING.toString();
            args.REPLACE = args.REPLACE.toString();
            args.REGEX = args.REGEX.toString();
            args.FLAGS = args.FLAGS.toString();
            return args.STRING.replace(
                new RegExp(args.REGEX, args.FLAGS), args.REPLACE
            );
        } catch (e) {
            console.error(e);
            return "";
        }
    }
    textplusmatchRegex(args, util) {
        try {
            args.STRING = (args.STRING ?? "").toString();
            args.REGEX = (args.REGEX ?? "").toString();
            args.FLAGS = (args.FLAGS ?? "").toString();
            args.ITEM = Number(args.ITEM) || 0;
            // Cache the last matched string
            if (!(
                    window.extensionData.textPlus.matchCache &&
                    window.extensionData.textPlus.matchCache.string === args.STRING &&
                    window.extensionData.textPlus.matchCache.regex === args.REGEX &&
                    window.extensionData.textPlus.matchCache.flags === args.FLAGS
                )) {
                const newFlags = args.FLAGS.includes("g") ? args.FLAGS : args.FLAGS + "g";
                const regex = new RegExp(args.REGEX, newFlags);
                window.extensionData.textPlus.matchCache = {
                    string: args.STRING,
                    regex: args.REGEX,
                    flags: args.FLAGS,
                    arr: args.STRING.match(regex) || []
                };
            }
            return window.extensionData.textPlus.matchCache.arr[args.ITEM - 1] || "";
        } catch (e) {
            console.error(e);
            return "";
        }
    }
    textpluscountRegex(args, util) {
        // Fill cache
        // (ITEM is casted into 0,
        // but we don't care about the return value)
        this.matchRegex(args, util);
        return window.extensionData.textPlus.matchCache.arr.length || 0;
    }
    textplustestRegex(args, util) {
        try {
            args.STRING = args.STRING.toString();
            args.REGEX = args.REGEX.toString();
            args.FLAGS = args.FLAGS.toString();
            return new RegExp(args.REGEX, args.FLAGS).test(args.STRING);
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    textplusisCase(args, util) {
        const string = args.STRING.toString();
        const textCase = args.TEXTCASE.toString();
        switch (textCase) {
            case window.extensionData.textPlus.CaseParam.LOWERCASE:
                return string.toLowerCase() === string;
            case window.extensionData.textPlus.CaseParam.UPPERCASE:
                return string.toUpperCase() === string;
            case window.extensionData.textPlus.CaseParam.MIXEDCASE:
                return (!(
                    string.toUpperCase() === string ||
                    string.toLowerCase() === string
                ));
            case window.extensionData.textPlus.CaseParam.TITLECASE:
                return string.split(/\b/g).every((word) => {
                    if (!word) return true;
                    const titleCased = word[0].toUpperCase() + word.substring(1);
                    return word === titleCased;
                });
            case window.extensionData.textPlus.CaseParam.EXACTTITLECASE:
                return string.split(/\b/g).every((word) => {
                    if (!word) return true;
                    const titleCased = word[0].toUpperCase() + word.substring(1).toLowerCase();
                    return word === titleCased;
                });
            default:
                return false;
        }
    }
    textplustoCase(args, util) {
        const string = args.STRING.toString();
        const textCase = args.TEXTCASE.toString();
        switch (textCase) {
            case window.extensionData.textPlus.CaseParam.LOWERCASE:
                return string.toLowerCase();
            case window.extensionData.textPlus.CaseParam.UPPERCASE:
                return string.toUpperCase();
            case window.extensionData.textPlus.CaseParam.MIXEDCASE:
                return Array.from(string).map(
                    (char, index) => index % 2 === 0 ?
                    char.toUpperCase() :
                    char.toLowerCase()
                ).join("");
            case window.extensionData.textPlus.CaseParam.TITLECASE:
                return string.split(/\b/g).map((word) => {
                    if (!word) return '';
                    return word[0].toUpperCase() + word.substring(1);
                }).join("");
            case window.extensionData.textPlus.CaseParam.EXACTTITLECASE:
                return string.split(/\b/g).map((word) => {
                    if (!word) return '';
                    return word[0].toUpperCase() + word.substring(1).toLowerCase();
                }).join("");
            default:
                return string;
        }
    }
    //end block
    //cast extension
    casttoType(args) {
        const input = args.INPUT;
        switch (args.TYPE) {
            case ('number'):
                return Scratch.Cast.toNumber(input);
            case ('string'):
                return Scratch.Cast.toString(input);
            case ('boolean'):
                return Scratch.Cast.toBoolean(input);
            default:
                return input;
        }
    }
    casttypeOf(args) {
        const input = args.INPUT;
        switch (typeof input) {
            case ('number'):
                return 'number';
            case ('string'):
                return 'string';
            case ('boolean'):
                return 'boolean';
            default:
                return '';
        }
    }
    //end block
    //tween extension
    // utilities
    multiplierToNormalNumber(mul, start, end) {
        const multiplier = end - start;
        const result = (mul * multiplier) + start;
        return result;
    }
    // blocks
    tweenValue(args) {
        const easeMethod = Scratch.Cast.toString(args.MODE);
        const easeDirection = Scratch.Cast.toString(args.DIRECTION);
        const start = Scratch.Cast.toNumber(args.START);
        const end = Scratch.Cast.toNumber(args.END);
        // easing method does not exist, return starting number
        const EasingMethods = [
            "linear", "sine", "quad", "cubic", "quart", "quint", "expo", "circ", "back", "elastic", "bounce"
        ];
        if (!EasingMethods.includes(easeMethod)) return start;
        // easing method is not implemented, return starting number
        if (!this[easeMethod]) return start;
        const progress = Scratch.Cast.toNumber(args.AMOUNT) / 100;
        const tweened = this[easeMethod](progress, easeDirection);
        return this.multiplierToNormalNumber(tweened, start, end);
    }
    // easing functions (placed below blocks for organization)
    linear(x) {
        // lol
        return x;
    }
    sine(x, dir) {
        switch (dir) {
            case "in": {
                return 1 - Math.cos((x * Math.PI) / 2);
            }
            case "out": {
                return Math.sin((x * Math.PI) / 2);
            }
            case "in out": {
                return -(Math.cos(Math.PI * x) - 1) / 2;
            }
            default:
                return 0;
        }
    }
    quad(x, dir) {
        switch (dir) {
            case "in": {
                return x * x;
            }
            case "out": {
                return 1 - (1 - x) * (1 - x);
            }
            case "in out": {
                return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
            }
            default:
                return 0;
        }
    }
    cubic(x, dir) {
        switch (dir) {
            case "in": {
                return x * x * x;
            }
            case "out": {
                return 1 - Math.pow(1 - x, 3);
            }
            case "in out": {
                return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
            }
            default:
                return 0;
        }
    }
    quart(x, dir) {
        switch (dir) {
            case "in": {
                return x * x * x * x;
            }
            case "out": {
                return 1 - Math.pow(1 - x, 4);
            }
            case "in out": {
                return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
            }
            default:
                return 0;
        }
    }
    quint(x, dir) {
        switch (dir) {
            case "in": {
                return x * x * x * x * x;
            }
            case "out": {
                return 1 - Math.pow(1 - x, 5);
            }
            case "in out": {
                return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
            }
            default:
                return 0;
        }
    }
    expo(x, dir) {
        switch (dir) {
            case "in": {
                return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
            }
            case "out": {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            }
            case "in out": {
                return x === 0 ?
                    0 : x === 1 ?
                    1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 :
                    (2 - Math.pow(2, -20 * x + 10)) / 2;
            }
            default:
                return 0;
        }
    }
    circ(x, dir) {
        switch (dir) {
            case "in": {
                return 1 - Math.sqrt(1 - Math.pow(x, 2));
            }
            case "out": {
                return Math.sqrt(1 - Math.pow(x - 1, 2));
            }
            case "in out": {
                return x < 0.5 ?
                    (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 :
                    (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
            }
            default:
                return 0;
        }
    }
    back(x, dir) {
        switch (dir) {
            case "in": {
                const c1 = 1.70158;
                const c3 = c1 + 1;
                return c3 * x * x * x - c1 * x * x;
            }
            case "out": {
                const c1 = 1.70158;
                const c3 = c1 + 1;
                return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
            }
            case "in out": {
                const c1 = 1.70158;
                const c2 = c1 * 1.525;
                return x < 0.5 ?
                    (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 :
                    (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
            }
            default:
                return 0;
        }
    }
    elastic(x, dir) {
        switch (dir) {
            case "in": {
                const c4 = (2 * Math.PI) / 3;
                return x === 0 ?
                    0 : x === 1 ?
                    1 :
                    -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
            }
            case "out": {
                const c4 = (2 * Math.PI) / 3;
                return x === 0 ?
                    0 : x === 1 ?
                    1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
            }
            case "in out": {
                const c5 = (2 * Math.PI) / 4.5;
                return x === 0 ?
                    0 : x === 1 ?
                    1 : x < 0.5 ?
                    -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 :
                    (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
            }
            default:
                return 0;
        }
    }
    bounce(x, dir) {
        switch (dir) {
            case "in": {
                return 1 - this.bounce(1 - x, "out");
            }
            case "out": {
                const n1 = 7.5625;
                const d1 = 2.75;
                if (x < 1 / d1) {
                    return n1 * x * x;
                } else if (x < 2 / d1) {
                    return n1 * (x -= 1.5 / d1) * x + 0.75;
                } else if (x < 2.5 / d1) {
                    return n1 * (x -= 2.25 / d1) * x + 0.9375;
                } else {
                    return n1 * (x -= 2.625 / d1) * x + 0.984375;
                }
            }
            case "in out": {
                return x < 0.5 ?
                    (1 - this.bounce(1 - 2 * x, "out")) / 2 :
                    (1 + this.bounce(2 * x - 1, "out")) / 2;
            }
            default:
                return 0;
        }
    }
    //end block
}

const operators = function(isInitialSetup) {
    return `
<category name="%{BKY_CATEGORY_OPERATORS} 🪄" id="operators" ${Colors.operators.xml}>
<block type="operator_add">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_subtract">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_multiply">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_divide">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_random">
    <value name="FROM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="operators_clamp"> // TurboCharged Block
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="MIN">
        <shadow type="math_number">
            <field name="NUM">25</field>
        </shadow>
    </value>
    <value name="MAX">
        <shadow type="math_number">
            <field name="NUM">40</field>
        </shadow>
    </value>
</block>
<block type="operators_ifthenelse_reporter">
    <value name="CONDITION">
        <shadow type="boolean">
            <field name="CONDITION"></field>
        </shadow>
    </value>
    <value name="TEXT1">
        <shadow type="text">
            <field name="TEXT">pass</field>
        </shadow>
    </value>
    <value name="TEXT2">
        <shadow type="text">
            <field name="TEXT">fail</field>
        </shadow>
    </value>
</block>
<block type="operators_egg">
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">🥚</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_gt">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_gtEqual"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_lt">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_ltEqual"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_equals">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
        <block type="operators_textplusidentical"> // TurboCharged Block
    <value name="OPERAND1">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
    <value name="OPERAND2">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
</block>
<block type="operators_textplusisCase"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="TEXTCASE">
        <shadow type="operators_menu_textCase"></shadow>
    </value>
</block>
<block type="operators_textplustoCase"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="TEXTCASE">
        <shadow type="operators_menu_textCase"></shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_and">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operator_or">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operators_nor"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operators_xor"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operator_not">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_join">
    <value name="STRING1">
        <shadow type="text">
            <field name="TEXT">apple </field>
        </shadow>
    </value>
    <value name="STRING2">
        <shadow type="text">
            <field name="TEXT">banana</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusrepeat"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple </field>
        </shadow>
    </value>
<value name="REPEAT">
        <shadow type="math_number">
            <field name="NUM">3</field>
        </shadow>
    </value>
</block>
<block type="operators_textplussplit"> // TurboCharged Block
<value name="ITEM">
        <shadow type="math_number">
            <field name="NUM">3</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="SPLIT">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
</block>
<block type="operator_letter_of">
    <value name="LETTER">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusindexof"> // TurboCharged Block
<value name="SUBSTRING">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_textpluscount"> // TurboCharged Block
<value name="SUBSTRING">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_substring">
    <value name="START">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    <value name="END">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    <value name="STRING">
            <shadow type="text">
                <field name="TEXT">apple</field>
            </shadow>
        </value>
</block>
<block type="operator_length">
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operator_contains">
    <value name="STRING1">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
    <value name="STRING2">
        <shadow type="text">
            <field name="TEXT">a</field>
        </shadow>
    </value>
</block>
<block type="operators_replace"> // TurboCharged Block
    <value name="INPUT1">
        <shadow type="text">
            <field name="TEXT">Charged</field>
        </shadow>
    </value>
    <value name="INPUT2">
        <shadow type="text">
            <field name="TEXT">Warp</field>
        </shadow>
    </value>
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">TurboCharged</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operators_textplusunicodeof"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">A</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusunicodefrom"> // TurboCharged Block
<value name="NUM">
        <shadow type="math_number">
            <field name="NUM">65</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operators_textplusreplaceRegex"> // TurboCharged Block
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">.</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">g</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REPLACE">
        <shadow type="text">
            <field name="TEXT">$&amp;$&amp;</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusmatchRegex"> // TurboCharged Block
<value name="ITEM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">(.) (.{2})</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">g</field>
        </shadow>
    </value>
</block>
<block type="operators_textpluscountRegex"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">[AEIOU]</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">i</field>
        </shadow>
    </value>
</block>
<block type="operators_textplustestRegex"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">hello</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">i</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operators_tweenValue">
<value name="MODE">
        <shadow type="operators_menu_tweenmodes"></shadow>
    </value>
<value name="DIRECTION">
        <shadow type="operators_menu_tweendirection"></shadow>
    </value>
<value name="START">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
<value name="END">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
<value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_mod"/>
<block type="operator_round"/>
${blockSeparator}
<block type="operators_percentof">
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_percentis">
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
    </value>
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="operators_percentUD">
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">45</field>
        </shadow>
    </value>
    <value name="MODE">
        <shadow type="operators_menu_percentMode"></shadow>
    </value>
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">11.11</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_mathop"/>
${blockSeparator}
<block type="operators_bool_coupler"> // TurboCharged Block
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">true</field>
        </shadow>
    </value>
</block>
<block type="operators_true_block"> // TurboCharged Block
</block>
<block type="operators_false_block"> // TurboCharged Block
</block>
<block type="operators_casttoType"> // TurboCharged Block
    <value name="TYPE">
        <shadow type="operators_menu_castType"></shadow>
    </value>
    <value name="INPUT">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_casttypeOf"> // TurboCharged Block
<value name="INPUT">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>

<label text="High Precision Math"/>
<block type="operators_presadd"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.2</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_pressubtract"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.4</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_presmultiply"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.3</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_presdivided"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">10</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">3</field>
        </shadow>
    </value>
<value name="PRE">
        <shadow type="text">
            <field name="TEXT">10</field>
        </shadow>
    </value>
</block>
${categorySeparator}
</category>
`;
}
class TurboChargedSensing {
    getInfo() {
        return {
            id: 'sensing',
            name: 'Sensing 🪄',
            color1: Colors.sensing.primary,
            color2: Colors.sensing.secondary,
            color3: Colors.sensing.tertiary,
            blocks: []
        }
    }
}

const sensing = function(isInitialSetup, isStage) {
    const name = ScratchBlocks.ScratchMsgs.translate('SENSING_ASK_TEXT', 'What\'s your name?');
    return `
<category name="%{BKY_CATEGORY_SENSING} 🪄" id="sensing" ${Colors.motion.xml}>
${isStage ? '' : `
    <block type="sensing_touchingobject">
        <value name="TOUCHINGOBJECTMENU">
            <shadow type="sensing_touchingobjectmenu"/>
        </value>
    </block>
    <block type="sensing_touchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_coloristouchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
        <value name="COLOR2">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_distanceto">
        <value name="DISTANCETOMENU">
            <shadow type="sensing_distancetomenu"/>
        </value>
    </block>
    ${blockSeparator}
`}
${isInitialSetup ? '' : `
    <block id="askandwait" type="sensing_askandwait">
        <value name="QUESTION">
            <shadow type="text">
                <field name="TEXT">${name}</field>
            </shadow>
        </value>
    </block>
`}
<block id="answer" type="sensing_answer"/>
${blockSeparator}
<block type="sensing_keypressed">
    <value name="KEY_OPTION">
        <shadow type="sensing_keyoptions"/>
    </value>
</block>
<block type="sensing_mousedown"/>
<block type="sensing_mousex"/>
<block type="sensing_mousey"/>
${isStage ? '' : `
    ${blockSeparator}
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>'+
    ${blockSeparator}
`}
${blockSeparator}
<block id="loudness" type="sensing_loudness"/>
${blockSeparator}
<block id="timer" type="sensing_timer"/>
<block type="sensing_resettimer"/>
${blockSeparator}
<block id="of" type="sensing_of">
    <value name="OBJECT">
        <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
    </value>
</block>
${blockSeparator}
<block id="current" type="sensing_current"/>
<block type="sensing_dayssince2000"/>
${blockSeparator}
<block type="sensing_username"/>
${categorySeparator}
</category>
`;
};
class TurboChargedSound {
    getInfo() {
        return {
            id: 'sound',
            name: 'Sound 🪄',
            color1: Colors.sound.primary,
            color2: Colors.sound.secondary,
            color3: Colors.sound.tertiary,
            blocks: []
        }
    }
}

const sound = function(isInitialSetup, isStage, targetId, soundName) {
    return `
<category name="%{BKY_CATEGORY_SOUND} 🪄" id="sound" ${Colors.sound.xml}>
<block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_sound_play" type="sound_play">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block type="sound_stopallsounds"/>
${blockSeparator}
<block type="sound_changeeffectby">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="sound_seteffectto">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block type="sound_cleareffects"/>
${blockSeparator}
<block type="sound_changevolumeby">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">-10</field>
        </shadow>
    </value>
</block>
<block type="sound_setvolumeto">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_volume" type="sound_volume"/>
${categorySeparator}
</category>
`;
};
//The color changing code by Lily
// Reimplementing the color parameters
runtime._convertBlockForScratchBlocks = function(blockInfo, categoryInfo) {
    const res = cbfsb(blockInfo, categoryInfo);
    //the color
    if (blockInfo.color1) {
        if (!res.json.color1) res.json.color1 = blockInfo.color1;
    }
    //Other block stuff
    if (blockInfo.outputShape) {
        if (!res.json.outputShape) res.json.outputShape = blockInfo.outputShape;
    }
    if (blockInfo.extensions) {
        if (!res.json.extensions) res.json.extensions = blockInfo.extensions;
    }
    if (!res.json.branchCount) res.json.branchCount = blockInfo.branchCount;
    return res;
};
function addMicrobitBlocks() {
    let runtime = vm.runtime;
    try {
        var tmp = runtime.ext_microbit
    } catch {
        return ('');
    };
    let ext = runtime.ext_microbit;
    if (ext.getInfoBound == undefined) ext.getInfoBound = ext.getInfo.bind(ext);
    let egi = ext.getInfoBound;
  //Matrix testing
  ext.matrixValidator = function({ MATRIX }, util) {
    MATRIX = Scratch.Cast.toString(MATRIX);

    //Making sure the length is correct
    if (MATRIX.length < 25 || (MATRIX.length % 25) != 0) return false;

    //Making sure its binary
    if ((MATRIX.replace(/[01]/g, '') !== '')) return false;

    //All checks to invalidate the matrix failed which means its a matrix.
    return true;
  }
  //Couplers
  ext.matrixCoupler = function({ A }, util) {
    return Scratch.Cast.toString(A);
  }
  ext.quadMatrixCoupler = function({ A, B, C, D }, util) {
    return (`${Scratch.Cast.toString(A)}${Scratch.Cast.toString(B)}${Scratch.Cast.toString(C)}${Scratch.Cast.toString(D)}`);
  }
  //Matrix handling
  ext.getMicrobitMatrix = function({ NUMBER, MATRIX }, util) {
    NUMBER = Math.round(Scratch.Cast.toNumber(NUMBER));
    MATRIX = Scratch.Cast.toString(MATRIX);
    return (MATRIX.slice((NUMBER-1)*25, ((NUMBER-1)*25)+25));
  }
  ext.getDigitAt = function({ ROW, COLLUM, MATRIX }, util) {
    ROW = Math.round(Scratch.Cast.toNumber(ROW));
    COLLUM = Math.round(Scratch.Cast.toNumber(COLLUM));
    MATRIX = Scratch.Cast.toString(MATRIX);

    //Clamping
    ROW = (ROW < 1 ? 1 : (ROW > 5 ? 5 : ROW));
    COLLUM = (COLLUM < 1 ? 1 : (COLLUM > 5 ? 5 : COLLUM));

    //Math!
    return MATRIX.charAt(((ROW-1)*5)+(COLLUM-1));
  }
    ext.getInfo = function() {
        const DefaultExtensions = window.extensionData.DefaultExtensions;
        let tmp = egi();
        let blocks = tmp.blocks;
        tmp.name = "micro:bit 🪄";
        blocks.push({
            blockType: "label",
            text: "Matrixes"
        });
        blocks = DefaultExtensions.addBlocks(blocks, [
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'matrixValidator',
              text: 'is binary [MATRIX] a valid matrix?',
              arguments: {
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'matrixCoupler',
              text: '[A]',
              arguments: {
                A: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'quadMatrixCoupler',
              text: ['[A] [B]', '[C] [D]'],
              arguments: {
                A: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                B: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                C: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                D: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX}
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getMicrobitMatrix',
              text: 'get matrix number [NUMBER] out of binary [MATRIX]',
              arguments: {
                NUMBER: {defaultValue: 1, type: Scratch.ArgumentType.NUMBER},
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.STRING}
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getDigitAt',
              text: 'get pixel at row [ROW] and collum [COLLUM] of matrix [MATRIX]',
              arguments: {
                ROW: {defaultValue: 3, type: Scratch.ArgumentType.NUMBER},
                COLLUM: {defaultValue: 5, type: Scratch.ArgumentType.NUMBER},
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX}
              }
            }
          ]);
        return tmp;
    }
    vm.extensionManager.refreshBlocks();
}function addPenBlocks() {
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
        const DefaultExtensions = window.extensionData.DefaultExtensions;
        let tmp = egi();
        let blocks = tmp.blocks;
        tmp.name = "Pen 🪄";
        blocks = DefaultExtensions.addBlocks(blocks, []);
        return tmp;
    }
    vm.extensionManager.refreshBlocks();
}
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
        return category;
    });
    return res;
}
//Credits is registered via some added XML
Scratch.extensions.register(new TurboChargedMotion());
Scratch.extensions.register(new TurboChargedLooks());
Scratch.extensions.register(new TurboChargedSound());
Scratch.extensions.register(new TurboChargedEvents());
Scratch.extensions.register(new TurboChargedControl());
Scratch.extensions.register(new TurboChargedSensing());
Scratch.extensions.register(new TurboChargedOperators());
//variables is not accesible
//idk if my blocks is accesible and I also have no reason to mess with it.
})(Scratch);