const creditsHTML = `<!DOCTYPE html>
<html>
<head>
<script></script><noscript></noscript>
<title>TurboCharged</title>
<style>
code {
    font-size: large;
    font-weight: bold;
    background-color: lightgray;
    border: 2px #000 solid;
}
code.box {
    display: box;
}
code.flex {
    display: flex;
}
</style>
</head>
<body>
<h1>TurboCharged</h1>
<div id="top_creds">
<code id="version" class="box">v9.3</code><span> || Functional and base Idea by LilyMakesThings.</span><br>
<span id="injection_credits">XML Injection based on Xeltallivs and LilyMakesThings XML Injectors.</span><br>
<span id="other_main_credits">Update+Maintained by 0znzw<br><br>Color Change Attempt also by Lily, 0znzw for the XML.</span>
</div>
<div id="extensions">
<span>Text+ (by CST1229)</span>
<span>Base (by TrueFantom)</span>
<span>Bitwise (by TrueFantom)</span>
<span>BigInt (by SkyHigh173)</span>
<span>Math (by TrueFantom)</span>
<span>Cast (by Lily aka LilyMakesThings)</span>
<span>More Comparisons (by NOname-awa)</span>
<span>Tween (by JeremyGamer13)</span>
<span>High Precision (by Qxsck)</span>
<span>More motion (by NamelessCat aka NexusKitten)</span>
<span>Clones+ (by Lily aka LilyMakesThings)</span>
<span>Sensing+ (by ObviousAlexC)</span>
</div>
<div id="user_links">
<h4>User links</h4>
<span>Lily: https://scratch.mit.edu/users/LilyMakesThings/</span><br>
<span>0znzw: https://scratch.mit.edu/users/0znzw/</span><br>
<span>Xeltalliv: https://github.com/Xeltalliv/</span><br>
<span>CST1229: https://scratch.mit.edu/users/CST1229/</span><br>
<span>Skyhigh173: https://github.com/SkyHigh173/</span><br>
<span>TrueFantom: https://scratch.mit.edu/users/TrueFantom/</span><br>
<span>JeremyGamer13: https://scratch.mit.edu/users/JeremyGamer13/</span><br>
<span>NOname-awa: https://github.com/NOname-awa/</span><br>
<span>Qxsck: https://github.com/qxsck/</span><br>
<span>NamelessCat: https://scratch.mit.edu/users/NamelessCat/</span><br>
<span>ObviousAlexC: https://scratch.mit.edu/users/pinksheep2917/</span>
</div>
<div id="license"><h4>License</h4><code class="flex">
Licensed under MIT license.<br>

<!-- Initial copy: https://web.archive.org/web/20231129230145/https://opensource.org/license/mit/ -->
<!-- Lily said to not include copyright so I will just put the date -->
Maintained &lt;2023-2023&gt;<br>
<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software<br>
and associated documentation files (the "Software"), to deal in the Software without<br>
restriction, including without limitation the rights to use, copy, modify, merge, publish,<br>
distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the<br>
Software is furnished to do so, subject to the following conditions:<br>
<br>
The above copyright notice and this permission notice shall be included in all copies<br>
or substantial portions of the Software.<br>
<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br>
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br>
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL<br>
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR<br>
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,<br>
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR<br>
OTHER DEALINGS IN THE SOFTWARE.
</code></div>
</body>
</html>`;
const version = 9.3;
window.Scratch = Scratch;
const vm = Scratch.vm;
const runtime = vm.runtime;
vm.TurboCharged = {
    extensionsData: {},
    blockedCategories: ['data'],
    enabled: true,
    specialEnabled: true,
    gbx: runtime.getBlocksXML.bind(runtime)
};
const categorySeparator = '<sep gap="36"/>';
const blockSeparator = '<sep gap="36"/>';
const translate = ScratchBlocks.ScratchMsgs.translate; // due to it being in some of the category's, i will from now on have this.
const cbfsb = runtime._convertBlockForScratchBlocks.bind(runtime);
const eventsID = 'event';
const Stage = runtime.getTargetForStage();
const ArgumentType = Scratch.ArgumentType;
ArgumentType.VARIABLE = 'variable';
ArgumentType.VERTICAL_SEPARATOR = 'vertical_separator';
ArgumentType.VARIABLE_GETTER = 'variable_getter';
ArgumentType.LABEL = 'label';
ArgumentType.LABEL_SERIALIZABLE = 'label_serializable';

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

vm.TurboCharged.extensionData = {
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