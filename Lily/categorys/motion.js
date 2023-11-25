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
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'TurboCharged Version',
                    isDynamic: true,
                    color1: '#ffb6c1'
                },
                /* end credit blocks and start variables */
                /* this block of code is for the variables category */
                {
                    hideFromPalette: true,
                    disableMonitor: true,
                    opcode: 'data_test',
                    func: 'data_test',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Test',
                    isDynamic: true,
                    color1: Colors.data.primary
                },
                {
                    disableMonitor: true,
                    opcode: 'data_getVariable',
                    func: 'data_getVariable',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'var [VARIABLE]',
                    isDynamic: true,
                    color1: Colors.data.primary,
                    color2: Colors.data.secondary,
                    color3: Colors.data.tertiary,
                    arguments: {
                        VARIABLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'my variable'
                        }
                    },
                },
                {
                    disableMonitor: true,
                    opcode: 'data_deleteVariable',
                    func: 'data_deleteVariable',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete variable [VARIABLE]',
                    isDynamic: true,
                    color1: Colors.data.primary,
                    color2: Colors.data.secondary,
                    color3: Colors.data.tertiary,
                    arguments: {
                        VARIABLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'my variable'
                        }
                    },
                },
                {
                    disableMonitor: true,
                    opcode: 'data_hasVariable',
                    func: 'data_hasVariable',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'variable [VARIABLE] exists?',
                    isDynamic: true,
                    color1: Colors.data.primary,
                    color2: Colors.data.secondary,
                    color3: Colors.data.tertiary,
                    arguments: {
                        VARIABLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'my variable'
                        }
                    },
                },
                /* end variables blocks and start motion */
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
                variablesMenu: {
                    acceptReporters: true,
                    items: 'getVariables'
                },
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
        return version;
    }
    /* end credit blocks and start variables */
    /* this block of code is for the variables category */
    getVariables() {
        // @ts-expect-error - Blockly not typed yet
        // eslint-disable-next-line no-undef
        const variables = vm.runtime.getEditingTarget().getAllVariableNamesInScopeByType('', '');
        if (variables.length > 0) {
            return variables;
        } else {
            return [{
                text: "",
                value: ""
            }];
        }
    }
    data_test(args, util) {
        vm.runtime.visualReport(util.thread.peekStack(), 'Custom block in variables???');
    }
    data_getVariable(args, util) {
        let variable = getVariableByName(args.VARIABLE, util.target);
        if (variable == null || variable == undefined) return '';
        return variable.value;
        vm.runtime.visualReport(util.thread.peekStack(), 'W.I.P');
    }
    data_hasVariable(args, util) {
        return util.target.getAllVariableNamesInScopeByType('', '').includes(args.VARIABLE);
    }
    data_createVariable(args, util) {
        vm.runtime.visualReport(util.thread.peekStack(), 'W.I.P');
    }
    data_deleteVariable(args, util) {
        deleteVariableByName(args.VARIABLE, util.target);
    }
    /* end variables blocks and start motion */

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