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
                    }
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
                    text: 'is clone?'
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
<category name="%{BKY_CATEGORY_CONTROL} 🪄" id="control" ${Colors.control.xml}>
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