
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
  
    class ClonesPlus {
      getInfo() {
        return {
          id: 'lmsclonesplus',
          name: 'Clones+',
          color1: '#FFAB19',
          color2: '#EC9C13',
          color3: '#CF8B17',
          menuIconURI: menuIconURI,
          blocks: [
            {
              opcode: 'whenCloneStartsWithVar',
              blockType: Scratch.BlockType.HAT,
              text: 'when I start as a clone with [INPUTA] set to [INPUTB]',
              filter: [Scratch.TargetType.SPRITE],
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
              opcode: 'createCloneWithVar',
              blockType: Scratch.BlockType.COMMAND,
              text: 'create clone with [INPUTA] set to [INPUTB]',
              filter: [Scratch.TargetType.SPRITE],
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
  
            '---',
  
            {
              opcode: 'touchingCloneWithVar',
              blockType: Scratch.BlockType.BOOLEAN,
              text: 'touching clone with [INPUTA] set to [INPUTB]?',
              filter: [Scratch.TargetType.SPRITE],
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
              opcode: 'touchingMainSprite',
              blockType: Scratch.BlockType.BOOLEAN,
              text: 'touching main sprite?',
              filter: [Scratch.TargetType.SPRITE]
            },
  
            '---',
  
            {
              opcode: 'setVariableOfClone',
              blockType: Scratch.BlockType.COMMAND,
              text: 'set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]',
              filter: [Scratch.TargetType.SPRITE],
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
            },
            {
              opcode: 'getVariableOfClone',
              blockType: Scratch.BlockType.REPORTER,
              text: 'variable [INPUTA] of clone with [INPUTB] set to [INPUTC]',
              filter: [Scratch.TargetType.SPRITE],
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
            },
            {
              opcode: 'setVariableOfMainSprite',
              blockType: Scratch.BlockType.COMMAND,
              text: 'set variable [INPUTA] to [INPUTB] for main sprite',
              filter: [Scratch.TargetType.SPRITE],
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
              opcode: 'getVariableOfMainSprite',
              blockType: Scratch.BlockType.REPORTER,
              text: 'variable [INPUT] of main sprite',
              filter: [Scratch.TargetType.SPRITE],
              disableMonitor: true,
              arguments: {
                INPUT: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'variablesMenu'
                }
              }
            },
  
            '---',
  
            {
              opcode: 'cloneExists',
              blockType: Scratch.BlockType.BOOLEAN,
              text: 'clone with [INPUTA] set to [INPUTB] exists?',
              filter: [Scratch.TargetType.SPRITE],
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
              opcode: 'getThingOfClone',
              blockType: Scratch.BlockType.REPORTER,
              text: '[INPUTA] of clone with [INPUTB] set to [INPUTC]',
              filter: [Scratch.TargetType.SPRITE],
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
            },
            {
              opcode: 'getThingOfMainSprite',
              blockType: Scratch.BlockType.REPORTER,
              text: '[INPUT] of main sprite',
              filter: [Scratch.TargetType.SPRITE],
              disableMonitor: true,
              arguments: {
                INPUT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'x position',
                  menu: 'thingOfMenu'
                }
              }
            },
  
            '---',
  
            {
              opcode: 'stopScriptsInSprite',
              blockType: Scratch.BlockType.COMMAND,
              text: 'stop scripts in [INPUT]',
              arguments: {
                INPUT: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'spriteMenu'
                }
              }
            },
            {
              opcode: 'stopScriptsInClone',
              blockType: Scratch.BlockType.COMMAND,
              text: 'stop scripts in clones with [INPUTA] set to [INPUTB]',
              filter: [Scratch.TargetType.SPRITE],
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
              opcode: 'stopScriptsInMainSprite',
              blockType: Scratch.BlockType.COMMAND,
              text: 'stop scripts in main sprite',
              filter: [Scratch.TargetType.SPRITE]
            },
  
            '---',
  
            {
              opcode: 'deleteClonesInSprite',
              blockType: Scratch.BlockType.COMMAND,
              text: 'delete clones in [INPUT]',
              arguments: {
                INPUT: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'spriteMenu'
                }
              }
            },
            {
              opcode: 'deleteCloneWithVar',
              blockType: Scratch.BlockType.COMMAND,
              text: 'delete clones with [INPUTA] set to [INPUTB]',
              filter: [Scratch.TargetType.SPRITE],
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
  
            '---',
  
            {
              opcode: 'isClone',
              blockType: Scratch.BlockType.BOOLEAN,
              text: 'is clone?',
              filter: [Scratch.TargetType.SPRITE]
            },
  
            '---',
  
            {
              opcode: 'cloneCount',
              blockType: Scratch.BlockType.REPORTER,
              text: 'clone count'
            },
            {
              opcode: 'spriteCloneCount',
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
              items: [
                {
                  text: 'x position',
                  value: 'x position'
                },
                {
                  text: 'y position',
                  value: 'y position'
                },
                {
                  text: 'direction',
                  value: 'direction'
                },
                {
                  text: 'costume #',
                  value: 'costume num'
                },
                {
                  text: 'costume name',
                  value: 'costume name'
                },
                {
                  text: 'size',
                  value: 'size'
                },
                {
                  text: 'volume',
                  value: 'volume'
                },
              ]
            }
          }
        };
      }
  
      whenCloneStartsWithVar(args, util) {
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
  
      createCloneWithVar(args, util) {
        // @ts-expect-error - not typed yet
        Scratch.vm.runtime.ext_scratch3_control._createClone(util.target.sprite.name, util.target);
        const clones = util.target.sprite.clones;
        const cloneNum = clones.length - 1;
        const cloneVariable = clones[cloneNum].lookupVariableById(args.INPUTA);
        if (cloneVariable) {
          cloneVariable.value = args.INPUTB;
        }
      }
  
      touchingCloneWithVar(args, util) {
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
  
      touchingMainSprite(args, util) {
        if (util.target.isOriginal) {
          return false;
        }
        const main = util.target.sprite.clones[0];
        const drawableCandidates = [main.drawableID];
        return Scratch.vm.renderer.isTouchingDrawables(util.target.drawableID, drawableCandidates);
      }
  
      setVariableOfClone(args, util) {
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
  
      getVariableOfClone(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTB, args.INPUTC, util.target.sprite.clones);
        if (!clone) {
          return '';
        }
        // guaranteed to exist by getCloneFromVariable
        const cloneVar = clone.lookupVariableById(args.INPUTA);
        return cloneVar.value;
      }
  
      setVariableOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        const variableObj = main.lookupVariableById(args.INPUTA);
        if (variableObj) {
          variableObj.value = args.INPUTB;
        }
      }
  
      getVariableOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        const variableObj = main.lookupVariableById(args.INPUT);
        if (variableObj) {
          return variableObj.value;
        }
        return '';
      }
  
      cloneExists(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTA, args.INPUTB, util.target.sprite.clones);
        return !!clone;
      }
  
      getThingOfClone(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTB, args.INPUTC, util.target.sprite.clones);
        return getThingOfTarget(clone, args.INPUTA);
      }
  
      getThingOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        return getThingOfTarget(main, args.INPUT);
      }
  
      stopScriptsInSprite(args) {
        const targetObj = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (targetObj) {
          Scratch.vm.runtime.stopForTarget(targetObj);
        }
      }
  
      stopScriptsInMainSprite(args, util) {
        Scratch.vm.runtime.stopForTarget(util.target.sprite.clones[0]);
      }
  
      stopScriptsInClone(args, util) {
        const clones = util.target.sprite.clones;
        let expectedValue = args.INPUTB;
        for (let index = 1; index < clones.length; index++) {
          const cloneVariable = clones[index].lookupVariableById(args.INPUTA);
          if (cloneVariable && Scratch.Cast.compare(cloneVariable.value, expectedValue) === 0) {
            Scratch.vm.runtime.stopForTarget(clones[index]);
          }
        }
      }
  
      deleteClonesInSprite(args, util) {
        const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (!target) {
          return;
        }
        const clones = target.sprite.clones;
        for (let index = clones.length - 1; index > 0; index--) {
          Scratch.vm.runtime.disposeTarget(clones[index]);
        }
      }
  
      deleteCloneWithVar(args, util) {
        const clones = util.target.sprite.clones;
        const expectedValue = args.INPUTB;
        for (let index = clones.length - 1; index > 0; index--) {
          const cloneVar = clones[index].lookupVariableById(args.INPUTA);
          if (cloneVar && Scratch.Cast.compare(cloneVar.value, expectedValue) === 0) {
            Scratch.vm.runtime.disposeTarget(clones[index]);
          }
        }
      }
  
      isClone(args, util) {
        return !util.target.isOriginal;
      }
  
      cloneCount(args, util) {
        return Scratch.vm.runtime._cloneCounter;
      }
  
      spriteCloneCount(args, util) {
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
          return [{ text: "", value: 0 }]; //this should never happen but it's a failsafe
        }
      }
  
      getSpriteObj(name) { //This is unused but I'm leaving it in for potential future blocks
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
          return [{ text: "", value: "" }];
        }
      }
    }