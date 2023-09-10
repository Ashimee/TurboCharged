
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
                }, {
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