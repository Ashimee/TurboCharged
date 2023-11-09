const vm = Scratch.vm;
const runtime = vm.runtime;
const categorySeparator = '<sep gap="36"/>';
const blockSeparator = '<sep gap="36"/>';
const gbx = runtime.getBlocksXML.bind(runtime);
const translate = ScratchBlocks.ScratchMsgs.translate; // due to it being in some of the category's, i will from now on have this.
const cbfsb = runtime._convertBlockForScratchBlocks.bind(runtime);
const eventsID = 'event';
const Stage = runtime.getTargetForStage();

//THE CREDITS
    const cred_comment = (function(){/*this is here to get the comment*/
        /**
         * v9.2
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