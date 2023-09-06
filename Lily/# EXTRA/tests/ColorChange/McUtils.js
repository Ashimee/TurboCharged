/*!
 * Credit to NexusKitten (NamelessCat) for the idea
 */

(function(Scratch) {
  'use strict';

  class lmsmcutils {
    getInfo() {
      return {
        id: 'lmsmcutils',
        name: 'McUtils',
        color1: '#ec2020',
        color3: '#ffe427',
        blocks: [
          {
            opcode: 'managerReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [INPUTA] is manager then [INPUTB] else [INPUTC]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'icecreammachine',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is ice cream machine [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'iceCreamMenu'
              }
            }
          },
          {
            opcode: 'talkToManager',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'talk to manager [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'placeOrder',
            blockType: Scratch.BlockType.REPORTER,
            text: 'place order [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },

          '---',

          {
            opcode: 'bunHat',
            func: 'doNothing',
            blockType: Scratch.BlockType.HAT,
            text: 'top bun                              ‎ ',
            isDynamic: true,
            color1: '#eab886',
            branchCount: 2,
            isTerminal: true
          },
          {
            opcode: 'patty',
            func: 'doNothing',
            blockType: Scratch.BlockType.COMMAND,
            text: 'patty                                  ‎ ',
            isDynamic: true,
            color1: '#87411e'
          },
          {
            opcode: 'lettuce',
            func: 'doNothing',
            blockType: Scratch.BlockType.COMMAND,
            text: 'lettuce                               ‎ ',
            isDynamic: true,
            color1: '#9ca90a'
          },
          {
            opcode: 'middleBun',
            func: 'doNothing',
            blockType: Scratch.BlockType.COMMAND,
            text: 'mid bun                             ‎ ',
            isDynamic: true,
            color1: '#eab886'
          },
          {
            opcode: 'cheese',
            func: 'doNothing',
            blockType: Scratch.BlockType.COMMAND,
            text: 'cheese                              ‎ ',
            isDynamic: true,
            color1: '#e8b421'
          },
          {
            opcode: 'bottomBun',
            func: 'doNothing',
            blockType: Scratch.BlockType.COMMAND,
            text: 'bottom bun                        ‎ ',
            isDynamic: true,
            color1: '#eab886',
            isTerminal: true
          },
        ],
        menus: {
          iceCreamMenu: {
            acceptReporters: true,
            items: [
              {
                text: 'working',
                value: 'working'
              },
              {
                text: 'broken',
                value: 'broken'
              }
            ]
          }
        }
      };
    }

    managerReporter(args, util) {
      if (args.INPUTA) {
        return args.INPUTB;
      } else {
        return args.INPUTC;
      }
    }

    icecreammachine(args, util) {
      if (args.INPUT === 'working') {
        return false;
      } else {
        return true;
      }
    }

    talkToManager(args, util) {
      return args.INPUT;
    }

    placeOrder(args, util) {
      if (args.INPUT.includes('ice cream')) {
        return false;
      } else {
        return args.INPUT;
      }
    }

    doNothing(args, util) {

    }
  }

  const runtime = Scratch.vm.runtime;
  // Reimplementing the color parameters
  const cbfsb = runtime._convertBlockForScratchBlocks.bind(runtime);
  runtime._convertBlockForScratchBlocks = function(blockInfo, categoryInfo) {
    const res = cbfsb(blockInfo, categoryInfo);
    if (blockInfo.color1) {
      if (!res.json.color1) res.json.color1 = blockInfo.color1;
    }
    if (blockInfo.outputShape) {
      if (!res.json.outputShape) res.json.outputShape = blockInfo.outputShape;
    }
    if (blockInfo.extensions) {
      if (!res.json.extensions) res.json.extensions = blockInfo.extensions;
    }
    if (!res.json.branchCount) res.json.branchCount = blockInfo.branchCount;
    return res;
  };

  Scratch.extensions.register(new lmsmcutils());
})(Scratch);
