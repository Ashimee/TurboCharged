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