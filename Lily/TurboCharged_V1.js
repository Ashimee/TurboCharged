(function (Scratch) {
  'use strict';

  class TurboChargedOperators {
    getInfo() {
      return {
        id: 'operators',
        name: 'Operators',
        color1: '#59C059',
        color2: '#389438',
        blocks: [
          {
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
          },
          {
            opcode: 'gtEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[OPERAND1] ≥ [OPERAND2]',
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
          },
          {
            opcode: 'ltEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[OPERAND1] ≤ [OPERAND2]',
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
          },
          {
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
          },
          {
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
          },
          {
            opcode: 'substring',
            blockType: Scratch.BlockType.REPORTER,
            text: 'letters [START] to [END] of [STRING]',
            arguments: {
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
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
          }
        ]
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
  }

  const operators = function (isInitialSetup, isStage, targetId) {
    return `
    <category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#59C059" secondaryColour="#389438">
        ${`
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
        <block type="operators_substring"> // TurboCharged Block
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
        <block type="operator_mod"/>
        <block type="operator_round"/>
        ${blockSeparator}>
        <block type="operator_mathop"/>`}
        ${categorySeparator}
    </category>
    `;
  }

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const categorySeparator = '<sep gap="36"/>';
  const blockSeparator = '<sep gap="36"/>'
  const gbx = runtime.getBlocksXML.bind(runtime);
  runtime.getBlocksXML = function(target) {
  const categoryInfo = this._blockInfo;
    const res = gbx(target);
    res.forEach((elem, idx) => {
      if (categoryInfo[idx].id === 'operators') {
        let {editingTarget: target, runtime} = vm;
        elem.xml = operators(false, target.isStage, target.id);
      }
    });
    return res;
  }

  Scratch.extensions.register(new TurboChargedOperators());
})(Scratch);