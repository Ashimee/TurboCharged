!function(e){"use strict";globalThis.Scratch=e;let t=e.vm,a=t.runtime,o='<sep gap="36"/>',l='<sep gap="36"/>',n=a.getBlocksXML.bind(a);ScratchBlocks.ScratchMsgs.translate;let r=a._convertBlockForScratchBlocks.bind(a),s="event",u=function(){},p=u.toString().split("        * v")[1].replace("\n",""),i=u.toString().replace("*/}","*/").replace("function(){/*this is here to get the comment*/",""),d={generateXML:function(e){return`colour="${e.primary}" secondaryColour="${e.secondary}"`},gcc:function(e){return ScratchBlocks.Colours[e]}};Object.keys(ScratchBlocks.Colours).forEach(e=>{let t=Object.assign(d.gcc(e),{xml:d.generateXML(d.gcc(e))}),a={};a[e]=t,Object.assign(d,a)}),d.events=structuredClone(d.event),d.sound=structuredClone(d.sounds),window.extensionData={textPlus:{splitCache:[],matchCache:[],CaseParam:{LOWERCASE:"lowercase",UPPERCASE:"uppercase",MIXEDCASE:"mixedcase",TITLECASE:"titlecase",EXACTTITLECASE:"exacttitlecase"}},createBlobTo:{hasRanBlob:!1,url:""},DefaultExtensions:{addBlocks(e,t){for(let a in t)a=t[a],e.push(a);return e}}};let c=[{text:"space",value:"space"},{text:"up arrow",value:"up arrow"},{text:"down arrow",value:"down arrow"},{text:"right arrow",value:"right arrow"},{text:"left arrow",value:"left arrow"},{text:"enter",value:"enter"},{text:"backspace",value:"backspace"},{text:"delete",value:"delete"},{text:"shift",value:"shift"},{text:"caps lock",value:"caps lock"},{text:"scroll lock",value:"scroll lock"},{text:"control",value:"control"},{text:"escape",value:"escape"},{text:"insert",value:"insert"},{text:"home",value:"home"},{text:"end",value:"end"},{text:"page up",value:"page up"},{text:"page down",value:"page down"},{text:"a",value:"a"},{text:"b",value:"b"},{text:"c",value:"c"},{text:"d",value:"d"},{text:"e",value:"e"},{text:"f",value:"f"},{text:"g",value:"g"},{text:"h",value:"h"},{text:"i",value:"i"},{text:"j",value:"j"},{text:"k",value:"k"},{text:"l",value:"l"},{text:"m",value:"m"},{text:"n",value:"n"},{text:"o",value:"o"},{text:"p",value:"p"},{text:"q",value:"q"},{text:"r",value:"r"},{text:"s",value:"s"},{text:"t",value:"t"},{text:"u",value:"u"},{text:"v",value:"v"},{text:"w",value:"w"},{text:"x",value:"x"},{text:"y",value:"y"},{text:"z",value:"z"},{text:"0",value:"0"},{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"9",value:"9"},];var T={},m=0;let y=(e,t)=>e?"x position"===t?e.x:"y position"===t?e.y:"direction"===t?e.direction:"costume num"===t?e.currentCostume+1:"costume name"===t?e.getCostumes()[e.currentCostume].name:"size"===t?e.size:"volume"===t?e.volume:"":"",h=function(){window.extensionData.createBlobTo.hasRanBlob||(window.extensionData.createBlobTo.hasRanBlob=!0,window.extensionData.createBlobTo.url=function e(t){let a=new Blob([t],{type:"text document"});return URL.createObjectURL(a)}(function e(t){let a=t;a=(a=(a=(a=a.replace("/**","<!DOCTYPE html><html><head><title>TurboCharged Credits</title></head><body><h1>Credits</h1><span>")).replaceAll("         * ","<!-- line -->&nbsp;&nbsp;")).replace("*/","</span></body></html>")).replaceAll("<!-- line -->","<br>");let o=a.split("<br>");for(let l in o){let n=l;if((l=o[l].toString()).includes("https://")){var r;let s=l.substring(l.indexOf("https://"),l.length);l=l.replace(s,`<a href="${s.replaceAll("\\","\\\\").replaceAll('"','\\"')}">${(r=s).replace(/[<>&'"]/g,e=>{switch(e){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case"'":return"&apos;";case'"':return"&quot;"}})}</a>`)}o[n]=l}return(a=o.join("<br>")).replace("}","")}(i))),window.open(window.extensionData.createBlobTo.url,"_blank")},b=function(e,t,a,n,r){let s=ScratchBlocks.ScratchMsgs.translate("LOOKS_HELLO","Hello!"),u=ScratchBlocks.ScratchMsgs.translate("LOOKS_HMM","Hmm...");return`
<category name="%{BKY_CATEGORY_LOOKS} \xf0Ÿ\xaa„" id="looks" ${d.looks.xml}>
${t?"":`
<block type="looks_sayforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${s}</field>
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
            <field name="TEXT">${s}</field>
        </shadow>
    </value>
</block>
<block type="looks_thinkforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${u}</field>
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
            <field name="TEXT">${u}</field>
        </shadow>
    </value>
</block>
${l}
`}
${t?`
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${r}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_switchbackdroptoandwait">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${r}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
`:`
    <block id="${a}_switchcostumeto" type="looks_switchcostumeto">
        <value name="COSTUME">
            <shadow type="looks_costume">
                <field name="COSTUME">${n}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextcostume"/>
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${r}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
    ${l}
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
${l}
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
${l}
${t?"":`
    <block type="looks_show"/>
    <block type="looks_hide"/>
${l}
    <block type="looks_gotofrontback"/>
    <block type="looks_goforwardbackwardlayers">
        <value name="NUM">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
`}
${t?`
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
`:`
    <block id="${a}_costumenumbername" type="looks_costumenumbername"/>
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
    <block id="${a}_size" type="looks_size"/>
`}
${o}
</category>
`};class g{getInfo(){return{id:"_credits",name:"Credits \xf0Ÿ\xaa„",color1:"#4C97FF",color2:"#3373CC",blocks:[]}}}let N=function(e,t,a){var n,r,s;let u=ScratchBlocks.ScratchMsgs.translate("MOTION_STAGE_SELECTED","Stage Selected: No Motion Blocks");return`

<category name="Credits \xf0Ÿ\xaa„" id="credits" colour="#ffb6c1" secondaryColour="#ffc0cb"> //oooooo :D
<button text="Credits" callbackKey="EXTENSION_CALLBACK" callbackData="motion_credit"></button>
<block type="motion_credit_version">
<mutation blockInfo='{"blockType":"reporter","terminal":false,"blockAllThreads":false,"arguments":{},"opcode":"credit_version","text":"TurboCharged Version","isDynamic":true,"color1":"#ffb6c1","isTerminal":false,"disableMonitor":true}'/> // this was extremely annoying but worth it.
</block>
${o}
</category>
<category name="%{BKY_CATEGORY_MOTION} \xf0Ÿ\xaa„" id="motion" ${d.motion.xml}>
${t?`
<label text="${u}"></label>
`:`
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
${l}
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
${l}
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
${l}
<block id="${a}_xposition" type="motion_xposition"/>
<block id="${a}_yposition" type="motion_yposition"/>
${l}
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
${l}
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
<block id="${a}_direction" type="motion_direction"/>
${l}
<block type="motion_setrotationstyle"/>
<block id="${a}_rotationStyle" type="motion_rotationStyle"/>
<block type="motion_moremotionspritewh">
<value name="WHAT">
    <shadow type="motion_menu_moremotionWHAT">
</shadow>
</value>
</block>
${l}
<block type="motion_ifonedgebounce"/>
${l}
<block type="motion_moremotionfence">
</block>
`}
${o}
</category>
`},v=function(e,t){let a=ScratchBlocks.ScratchMsgs.translate("SENSING_ASK_TEXT","What's your name?");return`
<category name="%{BKY_CATEGORY_SENSING} \xf0Ÿ\xaa„" id="sensing" ${d.motion.xml}>
${t?"":`
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
    ${l}
`}
${e?"":`
    <block id="askandwait" type="sensing_askandwait">
        <value name="QUESTION">
            <shadow type="text">
                <field name="TEXT">${a}</field>
            </shadow>
        </value>
    </block>
`}
<block id="answer" type="sensing_answer"/>
${l}
<block type="sensing_keypressed">
    <value name="KEY_OPTION">
        <shadow type="sensing_keyoptions"/>
    </value>
</block>
<block type="sensing_mousedown"/>
<block type="sensing_mousex"/>
<block type="sensing_mousey"/>
${t?"":`
    ${l}
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>'+
    ${l}
`}
${l}
<block id="loudness" type="sensing_loudness"/>
${l}
<block id="timer" type="sensing_timer"/>
<block type="sensing_resettimer"/>
${l}
<block id="of" type="sensing_of">
    <value name="OBJECT">
        <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
    </value>
</block>
${l}
<block id="current" type="sensing_current"/>
<block type="sensing_dayssince2000"/>
${l}
<block type="sensing_username"/>
${o}
</category>
`};function E(){let a=t.runtime;try{a.ext_microbit}catch{return""}let o=a.ext_microbit;void 0==o.getInfoBound&&(o.getInfoBound=o.getInfo.bind(o));let l=o.getInfoBound;o.matrixValidator=function({MATRIX:t},a){return!((t=e.Cast.toString(t)).length<25)&&t.length%25==0&&""===t.replace(/[01]/g,"")},o.matrixCoupler=function({A:t},a){return e.Cast.toString(t)},o.quadMatrixCoupler=function({A:t,B:a,C:o,D:l},n){return`${e.Cast.toString(t)}${e.Cast.toString(a)}${e.Cast.toString(o)}${e.Cast.toString(l)}`},o.getMicrobitMatrix=function({NUMBER:t,MATRIX:a},o){return t=Math.round(e.Cast.toNumber(t)),(a=e.Cast.toString(a)).slice((t-1)*25,(t-1)*25+25)},o.getDigitAt=function({ROW:t,COLLUM:a,MATRIX:o},l){return t=Math.round(e.Cast.toNumber(t)),a=Math.round(e.Cast.toNumber(a)),o=e.Cast.toString(o),t=t<1?1:t>5?5:t,a=a<1?1:a>5?5:a,o.charAt((t-1)*5+(a-1))},o.getInfo=function(){let t=window.extensionData.DefaultExtensions,a=l(),o=a.blocks;return a.name="micro:bit \xf0Ÿ\xaa„",o.push({blockType:"label",text:"Matrixes"}),o=t.addBlocks(o,[{blockType:e.BlockType.BOOLEAN,opcode:"matrixValidator",text:"is binary [MATRIX] a valid matrix?",arguments:{MATRIX:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}},{blockType:e.BlockType.REPORTER,opcode:"matrixCoupler",text:"[A]",arguments:{A:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}},{blockType:e.BlockType.REPORTER,opcode:"quadMatrixCoupler",text:["[A] [B]","[C] [D]"],arguments:{A:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX},B:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX},C:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX},D:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}},{blockType:e.BlockType.REPORTER,opcode:"getMicrobitMatrix",text:"get matrix number [NUMBER] out of binary [MATRIX]",arguments:{NUMBER:{defaultValue:1,type:e.ArgumentType.NUMBER},MATRIX:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.STRING}}},{blockType:e.BlockType.REPORTER,opcode:"getDigitAt",text:"get pixel at row [ROW] and collum [COLLUM] of matrix [MATRIX]",arguments:{ROW:{defaultValue:3,type:e.ArgumentType.NUMBER},COLLUM:{defaultValue:5,type:e.ArgumentType.NUMBER},MATRIX:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}}]),a},t.extensionManager.refreshBlocks()}function f(){let e=t.runtime;try{e.ext_pen}catch{return""}let a=e.ext_pen;void 0==a.getInfoBound&&(a.getInfoBound=a.getInfo.bind(a));let o=a.getInfoBound;a.getInfo=function(){let e=window.extensionData.DefaultExtensions,t=o(),a=t.blocks;return t.name="Pen \xf0Ÿ\xaa„",a=e.addBlocks(a,[]),t},t.extensionManager.refreshBlocks()}a._convertBlockForScratchBlocks=function(e,t){let a=r(e,t);return e.color1&&!a.json.color1&&(a.json.color1=e.color1),e.outputShape&&!a.json.outputShape&&(a.json.outputShape=e.outputShape),e.extensions&&!a.json.extensions&&(a.json.extensions=e.extensions),a.json.branchCount||(a.json.branchCount=e.branchCount),a},a.getBlocksXML=function(e){this._blockInfo;let a=n(e);return a.map(e=>{var a,n,r,u,p,i,c,T,m;if("motion"===e.id){let{editingTarget:y,runtime:h}=t,g=h.getTargetForStage();y||(y=g),e.xml=N(!1,y.isStage,y.id)}if("looks"===e.id){let{editingTarget:E,runtime:f}=t,k=f.getTargetForStage();E||(E=k),e.xml=b(!1,E.isStage,E.id,E.getCurrentCostume().name,k.getCurrentCostume().name)}if("sound"===e.id){let{editingTarget:A,runtime:w}=t,R=w.getTargetForStage();A||(A=R),e.xml=(A.isStage,r=A.id,`
<category name="%{BKY_CATEGORY_SOUND} \xf0Ÿ\xaa„" id="sound" ${d.sound.xml}>
<block id="${r}_sound_playuntildone" type="sound_playuntildone">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${u}</field>
        </shadow>
    </value>
</block>
<block id="${r}_sound_play" type="sound_play">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${u}</field>
        </shadow>
    </value>
</block>
<block type="sound_stopallsounds"/>
${l}
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
${l}
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
<block id="${r}_volume" type="sound_volume"/>
${o}
</category>
`)}if("event"===e.id){let{editingTarget:I,runtime:S}=t,x=S.getTargetForStage();I||(I=x),e.xml=(i=I.isStage,I.id,`
    <category name="%{BKY_CATEGORY_EVENTS} \xf0Ÿ\xaa„" id="${s}" ${d.events.xml}>
    <block type="event_whenflagclicked"/>
    <block type="${s}_MoreEventswhenStopClicked"></block>
    <block type="${s}_MoreEventsforever"></block>
            ${l}
            
    <block type="event_whenkeypressed"></block>
    <block type="${s}_MoreEventswhenKeyAction">
        <value name="KEY_OPTION">
            <shadow type="${s}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
    <block type="${s}_MoreEventswhileKeyPressed">
        <value name="KEY_OPTION">
            <shadow type="${s}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
            ${l}
            
    <block type="${s}_MoreEventswhenTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${s}_MoreEventswhileTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${s}_MoreEventswhenValueChanged">
        <value name="INPUT"></value>
    </block>
            ${i?`
                
    <block type="event_whenstageclicked"/>
            `:`
                
    <block type="event_whenthisspriteclicked"/>
            `}
            
    <block type="event_whenbackdropswitchesto"></block>
            ${l}
            
    <block type="event_whengreaterthan">
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
            ${l}
            
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
    <block type="${s}_MoreEvents_broadcastToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${s}_menu_targetMenu"></shadow>
        </value>
    </block>
    <block type="${s}_MoreEvents_broadcastToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${s}_menu_targetMenu"></shadow>
        </value>
    </block>
    ${l}
    <block type="${s}_MoreEvents_broadcastData">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${s}_MoreEvents_broadcastDataAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${s}_MoreEventsreceivedData"></block>
    ${l}
    <block type="${s}_MoreEvents_broadcastDataToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${s}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${s}_MoreEvents_broadcastDataToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${s}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
            ${o}
        
</category>
    `)}if("control"===e.id){let{editingTarget:O,runtime:$}=t,C=$.getTargetForStage();O||(O=C),e.xml=(T=O.isStage,O.id,`
<category name="%{BKY_CATEGORY_CONTROL} \xf0Ÿ\xaa„" id="control" ${d.motion.xml}>
<block type="control_wait">
    <value name="DURATION">
        <shadow type="math_positive_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
${l}
<block type="control_repeat">
    <value name="TIMES">
        <shadow type="math_whole_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block id="forever" type="control_forever"/>
${l}
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
${l}
<block type="control_stop"/>
${l}
${T?`
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
`:`
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
${o}
</category>
`)}if("sensing"===e.id){let{editingTarget:M,runtime:P}=t,_=P.getTargetForStage();M||(M=_),e.xml=v(!1,M.isStage,M.id)}if("operators"===e.id){let{editingTarget:U,runtime:B}=t,D=B.getTargetForStage();U||(U=D),e.xml=(U.isStage,U.id,`
<category name="%{BKY_CATEGORY_OPERATORS} \xf0Ÿ\xaa„" id="operators" ${d.operators.xml}>
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
${l}
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
            <field name="TEXT">\xf0Ÿ\xa5š</field>
        </shadow>
    </value>
</block>
${l}
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
${l}
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
${l}
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
${l}
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
${l}
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
${l}
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
${l}
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
${l}
<block type="operator_mathop"/>
${l}
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
${o}
</category>
`)}return e}),a},e.extensions.register(new class t{getInfo(){return{id:"motion",name:"Motion \xf0Ÿ\xaa„",color1:d.motion.primary,color2:d.motion.secondary,color3:d.motion.tertiary,blocks:[{blockType:e.BlockType.BUTTON,text:"Credits",func:"credit"},{disableMonitor:!0,opcode:"credit_version",func:"credit_version",blockType:e.BlockType.REPORTER,text:"TurboCharged Version",isDynamic:!0,color1:"#ffb6c1"},{opcode:"rotationStyle",blockType:e.BlockType.REPORTER,text:"rotation style"},{opcode:"moremotionchangexy",blockType:e.BlockType.COMMAND,text:"change x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotionpointto",blockType:e.BlockType.COMMAND,text:"point towards x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotionfence",blockType:e.BlockType.COMMAND,text:"manually fence"},{opcode:"moremotionsteptowards",blockType:e.BlockType.COMMAND,text:"move [STEPS] steps towards x: [X] y: [Y]",arguments:{STEPS:{type:e.ArgumentType.NUMBER,defaultValue:"10"},X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiontweentowards",blockType:e.BlockType.COMMAND,text:"move [PERCENT]% of the way to x: [X] y: [Y]",arguments:{PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"10"},X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiondirectionto",blockType:e.BlockType.REPORTER,text:"direction to x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiondistanceto",blockType:e.BlockType.REPORTER,text:"distance from x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotionspritewh",blockType:e.BlockType.REPORTER,text:"sprite [WHAT]",disableMonitor:!0,arguments:{WHAT:{type:e.ArgumentType.STRING,menu:"moremotionWHAT"}}},{opcode:"moremotiontouchingxy",blockType:e.BlockType.BOOLEAN,text:"touching x: [X] y: [Y]?",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiontouchingrect",blockType:e.BlockType.BOOLEAN,text:"touching rectangle x1: [X1] y1: [Y1] x2: [X2] y2: [Y2]?",arguments:{X1:{type:e.ArgumentType.NUMBER,defaultValue:"-100"},Y1:{type:e.ArgumentType.NUMBER,defaultValue:"-100"},X2:{type:e.ArgumentType.NUMBER,defaultValue:"100"},Y2:{type:e.ArgumentType.NUMBER,defaultValue:"100"}}}],menus:{moremotionWHAT:{acceptreporters:!0,items:["width","height","costume width","costume height"]}}}}doNothing(){}credit(){h()}credit_version(){return parseInt(p.toString())}rotationStyle(e,t){return t.target.rotationStyle}moremotionchangexy(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);a.target.setXY(a.target.x+o,a.target.y+l)}moremotionpointto(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);a.target.y>l?a.target.setDirection(180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y))+180):a.target.setDirection(180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y)))}moremotionfence(t,a){let o=e.vm.renderer.getFencedPositionOfDrawable(a.target.drawableID,[a.target.x,a.target.y]);a.target.setXY(o[0],o[1])}moremotiondirectionto(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);return a.target.y>l?180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y))+180:180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y))}moremotiondistanceto(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);return Math.sqrt((o-a.target.x)**2+(l-a.target.y)**2)}moremotionsteptowards(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y),n=e.Cast.toNumber(t.STEPS),r=n/Math.sqrt((o-a.target.x)**2+(l-a.target.y)**2);r>=1?a.target.setXY(o,l):a.target.setXY((o-a.target.x)*r+a.target.x,(l-a.target.y)*r+a.target.y)}moremotiontweentowards(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y),n=e.Cast.toNumber(t.PERCENT);a.target.setXY((o-a.target.x)*(n/100)+a.target.x,(l-a.target.y)*(n/100)+a.target.y)}moremotiontouchingrect(t,a){let o=e.Cast.toNumber(t.X1),l=e.Cast.toNumber(t.X2),n=e.Cast.toNumber(t.Y1),r=e.Cast.toNumber(t.Y2);if(o>l){let s=o;o=l,l=s}if(n>r){let u=n;n=r,n=u}let p=e.vm.renderer._allDrawables[a.target.drawableID];if(!p)return!1;let i=p.getFastBounds();i.snapToInt();let d=Object.getPrototypeOf(i).constructor,c=new d;if(c.initFromBounds(o,l,n,r),c.snapToInt(),!c.intersects(i))return!1;p.updateCPURenderAttributes();let T=d.intersect(i,c);for(let m=T.left;m<T.right;m++)for(let y=T.bottom;y<T.top;y++)if(p.isTouching([m,y]))return!0;return!1}moremotiontouchingxy(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y),n=e.vm.renderer._allDrawables[a.target.drawableID];return!!n&&(n.updateCPURenderAttributes(),n.isTouching([o,l]))}moremotionspritewh(t,a){if("width"===t.WHAT||"height"===t.WHAT){let o=e.vm.renderer.getBounds(a.target.drawableID);return"width"===t.WHAT?Math.ceil(o.width):Math.ceil(o.height)}if("costume width"===t.WHAT||"costume height"===t.WHAT){let l=a.target.sprite.costumes[a.target.currentCostume];return"costume width"===t.WHAT?Math.ceil(l.size[0]):Math.ceil(l.size[1])}}}),e.extensions.register(new class e{getInfo(){return{id:"looks",name:"Looks \xf0Ÿ\xaa„",color1:d.looks.primary,color2:d.looks.secondary,color3:d.looks.tertiary,blocks:[]}}}),e.extensions.register(new class e{getInfo(){return{id:"sound",name:"Sound \xf0Ÿ\xaa„",color1:d.sound.primary,color2:d.sound.secondary,color3:d.sound.tertiary,blocks:[]}}}),e.extensions.register(new class o{constructor(){a.shouldExecuteStopClicked=!0,a.on("BEFORE_EXECUTE",()=>{m++,a.shouldExecuteStopClicked=!1,a.startHats(s+"_MoreEventsforever"),a.startHats(s+"_MoreEventswhileTrueFalse"),a.startHats(s+"_MoreEventswhenValueChanged"),a.startHats(s+"_MoreEventseveryDuration"),a.startHats(s+"_MoreEventswhileKeyPressed")}),a.on("PROJECT_START",()=>{m=0}),a.on("PROJECT_STOP_ALL",()=>{m=0,a.shouldExecuteStopClicked&&queueMicrotask(()=>a.startHats(s+"_MoreEventswhenStopClicked"))}),a.on("AFTER_EXECUTE",()=>{a.shouldExecuteStopClicked=!0});let e=t.greenFlag;t.greenFlag=function(){a.shouldExecuteStopClicked=!1,e.call(this)}}getInfo(){return{id:s,name:"Events \xf0Ÿ\xaa„",color1:d.events.primary,color2:d.events.secondary,color3:d.events.tertiary,blocks:[{opcode:"MoreEventswhenStopClicked",blockType:e.BlockType.EVENT,text:"when [STOP] clicked",isEdgeActivated:!1,arguments:{STOP:{type:e.ArgumentType.IMAGE,dataURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAC/UFC8Q0OzTU24SEi4SEi3SEi4R0e4SEi4SEi4SEi4SEi7SUm8SUnMTk7MT0/OT0/PT0/gVVXiVVXsWVn///+CoOd2AAAAC3RSTlMAEBMUu7zLz9D8/dIXnJwAAAABYktHRBXl2PmjAAAAxklEQVRIx+3WwRKDIBAD0JWqVEOtWv7/W3twOqKwELzW3N9wYhORMMYiztgZUZMUAKxqmh5Kno/MG256nzI59Z2mB+BWH+XzUt5RhWoyQjFZkTQFkTBFERlCnAwlDoYUgaHFblpaeL86AK0MvNjMIABmT2cGIAAWniw3ucm/k9ovduEjXzgXtUfJmtrTt9VZzYH9FSB/xvfKZMsiLFmuko61zBTfucjL9RpXf6nEU2MhPxXS86J+kORmjz6V6seViOnG8oT7ApMcjsYZwhXCAAAAAElFTkSuQmCC"}}},{opcode:"MoreEventsforever",blockType:e.BlockType.EVENT,text:"forever",isEdgeActivated:!1},{opcode:"MoreEventswhenTrueFalse",blockType:e.BlockType.HAT,text:"when [CONDITION] becomes [STATE]",isEdgeActivated:!0,arguments:{CONDITION:{type:e.ArgumentType.BOOLEAN},STATE:{type:e.ArgumentType.STRING,menu:"boolean"}}},{opcode:"MoreEventswhileTrueFalse",blockType:e.BlockType.HAT,text:"while [CONDITION] is [STATE]",isEdgeActivated:!1,arguments:{CONDITION:{type:e.ArgumentType.BOOLEAN},STATE:{type:e.ArgumentType.STRING,menu:"boolean"}}},{opcode:"MoreEventswhenValueChanged",blockType:e.BlockType.HAT,text:"when [INPUT] is changed",isEdgeActivated:!1,arguments:{INPUT:{type:null}}},{opcode:"MoreEventseveryDuration",blockType:e.BlockType.HAT,text:"every [DURATION] frames",isEdgeActivated:!1,arguments:{DURATION:{type:e.ArgumentType.NUMBER,defaultValue:3}}},{opcode:"MoreEventswhenKeyAction",blockType:e.BlockType.HAT,text:"when [KEY_OPTION] key [ACTION]",isEdgeActivated:!0,arguments:{KEY_OPTION:{type:e.ArgumentType.STRING,defaultValue:"space",menu:"keyboardButtons"},ACTION:{type:e.ArgumentType.STRING,menu:"action"}}},{opcode:"MoreEventswhileKeyPressed",blockType:e.BlockType.HAT,text:"while [KEY_OPTION] key pressed",isEdgeActivated:!1,arguments:{KEY_OPTION:{type:e.ArgumentType.STRING,defaultValue:"space",menu:"keyboardButtons"}}},{opcode:"MoreEvents_broadcastToTarget",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET]",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastToTargetAndWait",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET] and wait",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastData",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] with data [DATA]",arguments:{BROADCAST_OPTION:{type:null},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastDataAndWait",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] with data [DATA] and wait",arguments:{BROADCAST_OPTION:{type:null},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{blockType:e.BlockType.XML,xml:`<block type="${s}_MoreEvents_broadcastToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${s}_menu_targetMenu"></shadow>
                </value>
            </block>
            <block type="${s}_MoreEvents_broadcastToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${s}_menu_targetMenu"></shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="${s}_MoreEvents_broadcastData">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${s}_MoreEvents_broadcastDataAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`},{opcode:"MoreEventsreceivedData",blockType:e.BlockType.REPORTER,text:"received data",disableMonitor:!0,allowDropAnywhere:!0},{opcode:"MoreEvents_broadcastDataToTarget",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA]",func:"MoreEvents_broadcastToTarget",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastDataToTargetAndWait",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA] and wait",func:"MoreEvents_broadcastToTargetAndWait",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{blockType:e.BlockType.XML,xml:`<block type="${s}_MoreEvents_broadcastDataToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${s}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${s}_MoreEvents_broadcastDataToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${s}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`}],menus:{targetMenu:{acceptReporters:!0,items:"_getTargets"},keyboardButtons:{acceptReporters:!0,items:c},action:{acceptReporters:!1,items:["hit","released"]},boolean:{acceptReporters:!1,items:["true","false"]},state:{acceptReporters:!1,items:["enabled","disabled"]}}}}MoreEventswhenTrueFalse(e){return"true"===e.STATE?e.CONDITION:!e.CONDITION}MoreEventswhileTrueFalse(e){return"true"===e.STATE?e.CONDITION:!e.CONDITION}MoreEventswhenValueChanged(t,a){let o=a.thread.peekStack();return T[o]||(T[o]=e.Cast.toString(t.INPUT)),T[o]!==e.Cast.toString(t.INPUT)&&(T[o]=e.Cast.toString(t.INPUT),!0)}MoreEventseveryDuration(t,a){let o=Math.max(Math.round(e.Cast.toNumber(t.DURATION)),0);return!(m%o!=0)}MoreEventswhenKeyAction(t,a){let o=e.Cast.toString(t.KEY_OPTION).toLowerCase(),l=a.ioQuery("keyboard","getKeyIsDown",[o]);return"released"===t.ACTION?!l:l}MoreEventswhileKeyPressed(t,a){let o=e.Cast.toString(t.KEY_OPTION).toLowerCase();return a.ioQuery("keyboard","getKeyIsDown",[o])}MoreEvents_broadcastToTarget(t,a){let o=e.Cast.toString(t.BROADCAST_OPTION);if(!o)return;let l=e.Cast.toString(t.DATA);console.log(l);let n=this._getTargetFromMenu(t.TARGET).sprite.clones,r=[];for(let s of n)r=[...r,...a.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:o},s),],l&&r.forEach(e=>e.receivedData=t.DATA)}MoreEvents_broadcastToTargetAndWait(t,o){o.stackFrame.broadcastVar||(o.stackFrame.broadcastVar=e.Cast.toString(t.BROADCAST_OPTION));let l=this._getTargetFromMenu(t.TARGET);if(!l)return;let n=l.sprite.clones,r=e.Cast.toString(t.DATA);if(o.stackFrame.broadcastVar){let s=o.stackFrame.broadcastVar;if(!o.stackFrame.startedThreads){for(let u of(o.stackFrame.startedThreads=[],n))o.stackFrame.startedThreads=[...o.stackFrame.startedThreads,...o.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:s},u),],r&&o.stackFrame.startedThreads.forEach(e=>e.receivedData=t.DATA);if(0===o.stackFrame.startedThreads.length)return}let p=o.stackFrame.startedThreads.some(e=>-1!==a.threads.indexOf(e));p&&(o.stackFrame.startedThreads.every(e=>a.isWaitingThread(e))?o.yieldTick():o.yield())}}MoreEvents_broadcastData(t,a){let o=e.Cast.toString(t.BROADCAST_OPTION);if(!o)return;let l=e.Cast.toString(t.DATA);a.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:o}).forEach(e=>e.receivedData=l)}MoreEvents_broadcastDataAndWait(t,o){let l=e.Cast.toString(t.DATA);if(o.stackFrame.broadcastVar||(o.stackFrame.broadcastVar=e.Cast.toString(t.BROADCAST_OPTION)),o.stackFrame.broadcastVar){let n=o.stackFrame.broadcastVar;if(!o.stackFrame.startedThreads){if(o.stackFrame.startedThreads=o.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:n}),0===o.stackFrame.startedThreads.length)return;o.stackFrame.startedThreads.forEach(e=>e.receivedData=l)}let r=o.stackFrame.startedThreads.some(e=>-1!==a.threads.indexOf(e));r&&(o.stackFrame.startedThreads.every(e=>a.isWaitingThread(e))?o.yieldTick():o.yield())}}MoreEventsreceivedData(e,t){let a=t.thread.receivedData;return a||""}_getTargetFromMenu(t){let o=e.vm.runtime.getSpriteTargetByName(t);return"_stage_"===t&&(o=a.getTargetForStage()),o}_getTargets(){let t=[{text:"Stage",value:"_stage_"}],a=e.vm.runtime.targets;for(let o=1;o<a.length;o++){let l=a[o];if(l.isOriginal){let n=l.getName();t.push({text:n,value:n})}}return t.length>0?t:[{text:"",value:0}]}}),e.extensions.register(new class t{getInfo(){return{id:"control",name:"Control \xf0Ÿ\xaa„",color1:d.control.primary,color2:d.control.secondary,color3:d.control.tertiary,blocks:[{opcode:"clonespluswhenCloneStartsWithVar",blockType:e.BlockType.HAT,text:"when I start as a clone with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonespluscreateCloneWithVar",blockType:e.BlockType.COMMAND,text:"create clone with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplustouchingCloneWithVar",blockType:e.BlockType.BOOLEAN,text:"touching clone with [INPUTA] set to [INPUTB]?",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplustouchingMainSprite",blockType:e.BlockType.BOOLEAN,text:"touching main sprite?"},{opcode:"clonesplussetVariableOfClone",blockType:e.BlockType.COMMAND,text:"set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"0"},INPUTC:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTD:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetVariableOfClone",blockType:e.BlockType.REPORTER,text:"variable [INPUTA] of clone with [INPUTB] set to [INPUTC]",disableMonitor:!0,arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTC:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplussetVariableOfMainSprite",blockType:e.BlockType.COMMAND,text:"set variable [INPUTA] to [INPUTB] for main sprite",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetVariableOfMainSprite",blockType:e.BlockType.REPORTER,text:"variable [INPUT] of main sprite",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"variablesMenu"}}},{opcode:"clonespluscloneExists",blockType:e.BlockType.BOOLEAN,text:"clone with [INPUTA] set to [INPUTB] exists?",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetThingOfClone",blockType:e.BlockType.REPORTER,text:"[INPUTA] of clone with [INPUTB] set to [INPUTC]",disableMonitor:!0,arguments:{INPUTA:{type:e.ArgumentType.STRING,defaultValue:"x position",menu:"thingOfMenu"},INPUTB:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTC:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetThingOfMainSprite",blockType:e.BlockType.REPORTER,text:"[INPUT] of main sprite",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,defaultValue:"x position",menu:"thingOfMenu"}}},{opcode:"clonesplusstopScriptsInSprite",blockType:e.BlockType.COMMAND,text:"stop scripts in [INPUT]",arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"spriteMenu"}}},{opcode:"clonesplusstopScriptsInClone",blockType:e.BlockType.COMMAND,text:"stop scripts in clones with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusstopScriptsInMainSprite",blockType:e.BlockType.COMMAND,text:"stop scripts in main sprite"},{opcode:"clonesplusdeleteClonesInSprite",blockType:e.BlockType.COMMAND,text:"delete clones in [INPUT]",arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"spriteMenu"}},text:"is clone?"},{opcode:"clonesplusdeleteCloneWithVar",blockType:e.BlockType.COMMAND,text:"delete clones with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusisClone",blockType:e.BlockType.BOOLEAN},{opcode:"clonespluscloneCount",blockType:e.BlockType.REPORTER,text:"clone count"},{opcode:"clonesplusspriteCloneCount",blockType:e.BlockType.REPORTER,text:"clone count of [INPUT]",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"spriteMenu"}}}],menus:{spriteMenu:{acceptReporters:!0,items:"getSprites"},variablesMenu:{acceptReporters:!1,items:"getVariables"},thingOfMenu:{acceptReporters:!1,items:[{text:"x position",value:"x position"},{text:"y position",value:"y position"},{text:"direction",value:"direction"},{text:"costume #",value:"costume num"},{text:"costume name",value:"costume name"},{text:"size",value:"size"},{text:"volume",value:"volume"},]}}}}clonespluswhenCloneStartsWithVar(t,a){if(a.target.isOriginal)return!1;let o=a.target.lookupVariableById(t.INPUTA),l=t.INPUTB;return!!o&&0===e.Cast.compare(o.value,l)}clonespluscreateCloneWithVar(t,a){e.vm.runtime.ext_scratch3_control._createClone(a.target.sprite.name,a.target);let o=a.target.sprite.clones,l=o.length-1,n=o[l].lookupVariableById(t.INPUTA);n&&(n.value=t.INPUTB)}clonesplustouchingCloneWithVar(t,a){let o=a.target.sprite.clones.filter(a=>{let o=a.lookupVariableById(t.INPUTA);return o&&0===e.Cast.compare(o.value,t.INPUTB)}).map(e=>e.drawableID);return 0!==o.length&&e.vm.renderer.isTouchingDrawables(a.target.drawableID,o)}clonesplustouchingMainSprite(t,a){if(a.target.isOriginal)return!1;let o=a.target.sprite.clones[0],l=[o.drawableID];return e.vm.renderer.isTouchingDrawables(a.target.drawableID,l)}clonesplussetVariableOfClone(t,a){let o=t.INPUTB,l=t.INPUTD,n=a.target.sprite.clones;for(let r=1;r<n.length;r++){let s=n[r].lookupVariableById(t.INPUTC);if(s&&0===e.Cast.compare(s.value,l)){let u=n[r].lookupVariableById(t.INPUTA);u&&(u.value=o)}}}clonesplusgetVariableOfClone(e,t){let a=this.getCloneFromVariable(e.INPUTB,e.INPUTC,t.target.sprite.clones);if(!a)return"";let o=a.lookupVariableById(e.INPUTA);return o.value}clonesplussetVariableOfMainSprite(e,t){let a=t.target.sprite.clones[0],o=a.lookupVariableById(e.INPUTA);o&&(o.value=e.INPUTB)}clonesplusgetVariableOfMainSprite(e,t){let a=t.target.sprite.clones[0],o=a.lookupVariableById(e.INPUT);return o?o.value:""}clonespluscloneExists(e,t){let a=this.getCloneFromVariable(e.INPUTA,e.INPUTB,t.target.sprite.clones);return!!a}clonesplusgetThingOfClone(e,t){let a=this.getCloneFromVariable(e.INPUTB,e.INPUTC,t.target.sprite.clones);return y(a,e.INPUTA)}clonesplusgetThingOfMainSprite(e,t){let a=t.target.sprite.clones[0];return y(a,e.INPUT)}clonesplusstopScriptsInSprite(t){let a=e.vm.runtime.getSpriteTargetByName(t.INPUT);a&&e.vm.runtime.stopForTarget(a)}clonesplusstopScriptsInMainSprite(t,a){e.vm.runtime.stopForTarget(a.target.sprite.clones[0])}clonesplusstopScriptsInClone(t,a){let o=a.target.sprite.clones,l=t.INPUTB;for(let n=1;n<o.length;n++){let r=o[n].lookupVariableById(t.INPUTA);r&&0===e.Cast.compare(r.value,l)&&e.vm.runtime.stopForTarget(o[n])}}clonesplusdeleteClonesInSprite(t,a){let o=e.vm.runtime.getSpriteTargetByName(t.INPUT);if(!o)return;let l=o.sprite.clones;for(let n=l.length-1;n>0;n--)e.vm.runtime.disposeTarget(l[n])}clonesplusdeleteCloneWithVar(t,a){let o=a.target.sprite.clones,l=t.INPUTB;for(let n=o.length-1;n>0;n--){let r=o[n].lookupVariableById(t.INPUTA);r&&0===e.Cast.compare(r.value,l)&&e.vm.runtime.disposeTarget(o[n])}}clonesplusisClone(e,t){return!t.target.isOriginal}clonespluscloneCount(t,a){return e.vm.runtime._cloneCounter}clonesplusspriteCloneCount(t,a){let o=e.vm.runtime.getSpriteTargetByName(t.INPUT);return o?o.sprite.clones.length-1:0}getCloneFromVariable(t,a,o){for(let l=1;l<o.length;l++){let n=o[l].lookupVariableById(t);if(n&&0===e.Cast.compare(n.value,a))return o[l]}return null}getSprites(){let t=[],a=e.vm.runtime.targets,o=e.vm.runtime.getEditingTarget().sprite.name;for(let l=1;l<a.length;l++){let n=a[l].sprite,r=n.name;if(o===n.name&&(r="myself"),a[l].isOriginal){let s={text:r,value:n.name};t.push(s)}}return t.length>0?t:[{text:"",value:0}]}clonesplusgetSpriteObj(t){let a=e.vm.runtime.getSpriteTargetByName(t);return JSON.stringify(a)}getVariables(){let e="undefined"==typeof Blockly?[]:Blockly.getMainWorkspace().getVariableMap().getVariablesOfType("").filter(e=>e.isLocal).map(e=>({text:e.name,value:e.getId()}));return e.length>0?e:[{text:"",value:""}]}}),e.extensions.register(new class e{getInfo(){return{id:"sensing",name:"Sensing \xf0Ÿ\xaa„",color1:d.sensing.primary,color2:d.sensing.secondary,color3:d.sensing.tertiary,blocks:[]}}}),e.extensions.register(new class t{getInfo(){return{id:"operators",name:"Operators \xf0Ÿ\xaa„",color1:d.operators.primary,color2:d.operators.secondary,color3:d.operators.tertiary,blocks:[{opcode:"percentof",blockType:e.BlockType.REPORTER,text:"what is [PERCENT]% of [AMOUNT]?",disableMonitor:!0,arguments:{PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"10"},AMOUNT:{type:e.ArgumentType.NUMBER,defaultValue:"50"}}},{opcode:"percentis",blockType:e.BlockType.REPORTER,text:"[AMOUNT] is [PERCENT]% of what?",disableMonitor:!0,arguments:{PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"5"},MAX:{type:e.ArgumentType.NUMBER,defaultValue:"10"}}},{opcode:"percentUD",blockType:e.BlockType.REPORTER,text:"what is [AMOUNT] [MODE] by [PERCENT]%?",disableMonitor:!0,arguments:{AMOUNT:{type:e.ArgumentType.NUMBER,defaultValue:"45"},MODE:{type:e.ArgumentType.STRING,menu:"percentMode"},PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"11.11"}}},{opcode:"clamp",blockType:e.BlockType.REPORTER,text:"clamp [NUM] between [MIN] and [MAX]",arguments:{NUM:{type:e.ArgumentType.NUMBER,defaultValue:30},MIN:{type:e.ArgumentType.NUMBER,defaultValue:25},MAX:{type:e.ArgumentType.NUMBER,defaultValue:40}}},{opcode:"egg",blockType:e.BlockType.REPORTER,text:"egg [TEXT]",arguments:{TEXT:{type:e.ArgumentType.NUMBER,defaultValue:"\xf0Ÿ\xa5š"}}},{opcode:"gtEqual",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] \xe2‰\xa5 [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.NUMBER,defaultValue:""},OPERAND2:{type:e.ArgumentType.NUMBER,defaultValue:"50"}}},{opcode:"ltEqual",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] \xe2‰\xa4 [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.NUMBER,defaultValue:""},OPERAND2:{type:e.ArgumentType.NUMBER,defaultValue:"50"}}},{opcode:"nor",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] nor [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.BOOLEAN,defaultValue:""},OPERAND2:{type:e.ArgumentType.BOOLEAN,defaultValue:"50"}}},{opcode:"xor",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] xor [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.BOOLEAN,defaultValue:""},OPERAND2:{type:e.ArgumentType.BOOLEAN,defaultValue:"50"}}},{opcode:"substring",blockType:e.BlockType.REPORTER,text:"letters [START] to [END] of [STRING]",arguments:{START:{type:e.ArgumentType.NUMBER,defaultValue:"1"},END:{type:e.ArgumentType.NUMBER,defaultValue:"3"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"replace",blockType:e.BlockType.REPORTER,text:"replace [INPUT1] with [INPUT2] in [STRING]",arguments:{INPUT1:{type:e.ArgumentType.STRING,defaultValue:"Charged"},INPUT2:{type:e.ArgumentType.STRING,defaultValue:"Warp"},STRING:{type:e.ArgumentType.STRING,defaultValue:"TurboCharged"}}},{opcode:"true_block",blockType:e.BlockType.BOOLEAN,text:"true"},{opcode:"false_block",blockType:e.BlockType.BOOLEAN,text:"false"},{opcode:"bool_coupler",blockType:e.BlockType.BOOLEAN,text:"[TEXT]",arguments:{TEXT:{type:e.ArgumentType.STRING,defaultValue:"true"}}},{opcode:"ifthenelse_reporter",blockType:e.BlockType.REPORTER,text:"if [CONDITION] then [TEXT1] else [TEXT2]",arguments:{CONDITION:{type:e.ArgumentType.BOOLEAN},TEXT1:{type:e.ArgumentType.STRING,defaultValue:"pass"},TEXT2:{type:e.ArgumentType.STRING,defaultValue:"fail"}}},{opcode:"test",blockType:e.BlockType.REPORTER,text:"test click me",callback:"test"},{opcode:"presadd",blockType:e.BlockType.REPORTER,text:"[A] + [B]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"0.2"},B:{type:e.ArgumentType.STRING,defaultValue:"0.1"}}},{opcode:"pressubtract",blockType:e.BlockType.REPORTER,text:"[A] - [B]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"0.4"},B:{type:e.ArgumentType.STRING,defaultValue:"0.1"}}},{opcode:"presmultiply",blockType:e.BlockType.REPORTER,text:"[A] * [B]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"0.3"},B:{type:e.ArgumentType.STRING,defaultValue:"0.1"}}},{opcode:"presdivided",blockType:e.BlockType.REPORTER,text:"[A] / [B] to precision of [PRE]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"10"},B:{type:e.ArgumentType.STRING,defaultValue:"3"},PRE:{type:e.ArgumentType.STRING,defaultValue:"10"}}},{opcode:"textplusletters_of",blockType:e.BlockType.REPORTER,text:"letters [LETTER1] to [LETTER2] of [STRING]",arguments:{LETTER1:{type:e.ArgumentType.NUMBER,defaultValue:"2"},LETTER2:{type:e.ArgumentType.NUMBER,defaultValue:"4"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"textplussplit",blockType:e.BlockType.REPORTER,text:"item [ITEM] of [STRING] split by [SPLIT]",arguments:{ITEM:{type:e.ArgumentType.NUMBER,defaultValue:"3"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"},SPLIT:{type:e.ArgumentType.STRING,defaultValue:"p"}}},{opcode:"textpluscount",blockType:e.BlockType.REPORTER,text:"count [SUBSTRING] in [STRING]",arguments:{SUBSTRING:{type:e.ArgumentType.STRING,defaultValue:"p"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"textplusindexof",blockType:e.BlockType.REPORTER,text:"index of [SUBSTRING] in [STRING]",arguments:{SUBSTRING:{type:e.ArgumentType.STRING,defaultValue:"p"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"textplusreplace",blockType:e.BlockType.REPORTER,text:"replace [SUBSTRING] in [STRING] with [REPLACE]",arguments:{SUBSTRING:{type:e.ArgumentType.STRING,defaultValue:"world"},STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REPLACE:{type:e.ArgumentType.STRING,defaultValue:"fellow Scratchers"}}},{opcode:"textplusrepeat",blockType:e.BlockType.REPORTER,text:"repeat [STRING] [REPEAT] times",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"apple "},REPEAT:{type:e.ArgumentType.NUMBER,defaultValue:"3"}}},{opcode:"textplusunicodeof",blockType:e.BlockType.REPORTER,text:"Unicode of [STRING]",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"A"}}},{opcode:"textplusunicodefrom",blockType:e.BlockType.REPORTER,text:"Unicode [NUM] as letter",arguments:{NUM:{type:e.ArgumentType.NUMBER,defaultValue:"65"}}},{opcode:"textplusreplaceRegex",blockType:e.BlockType.REPORTER,text:"replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]",arguments:{REGEX:{type:e.ArgumentType.STRING,defaultValue:"."},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"g"},STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REPLACE:{type:e.ArgumentType.STRING,defaultValue:"$&$&"}}},{opcode:"textplusmatchRegex",blockType:e.BlockType.REPORTER,text:"item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]",arguments:{ITEM:{type:e.ArgumentType.NUMBER,defaultValue:1},STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REGEX:{type:e.ArgumentType.STRING,defaultValue:"(.) (.{2})"},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"g"}}},{opcode:"textpluscountRegex",blockType:e.BlockType.REPORTER,text:"count regex /[REGEX]/[FLAGS] in [STRING]",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REGEX:{type:e.ArgumentType.STRING,defaultValue:"[AEIOU]"},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"i"}}},{opcode:"textplustestRegex",blockType:e.BlockType.BOOLEAN,text:"[STRING] matches regex /[REGEX]/[FLAGS]?",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REGEX:{type:e.ArgumentType.STRING,defaultValue:"hello"},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"i"}}},{opcode:"textplusidentical",blockType:e.BlockType.BOOLEAN,text:"is [OPERAND1] identical to [OPERAND2]?",arguments:{OPERAND1:{type:e.ArgumentType.STRING,defaultValue:"A"},OPERAND2:{type:e.ArgumentType.STRING,defaultValue:"a"}}},{opcode:"textplusisCase",blockType:e.BlockType.BOOLEAN,text:"is [STRING] [TEXTCASE]?",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"},TEXTCASE:{type:e.ArgumentType.STRING,menu:"textCase",defaultValue:window.extensionData.textPlus.CaseParam.LOWERCASE}}},{opcode:"textplustoCase",blockType:e.BlockType.REPORTER,text:"convert [STRING] to [TEXTCASE]",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"},TEXTCASE:{type:e.ArgumentType.STRING,menu:"textCase",defaultValue:window.extensionData.textPlus.CaseParam.UPPERCASE}}},{opcode:"casttoType",blockType:e.BlockType.REPORTER,text:"cast [INPUT] to [TYPE]",allowDropAnywhere:!0,disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,defaultValue:"apple"},TYPE:{type:e.ArgumentType.STRING,menu:"castType"}}},{opcode:"casttypeOf",blockType:e.BlockType.REPORTER,text:"type of [INPUT]",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"tweenValue",text:"[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%",disableMonitor:!0,blockType:e.BlockType.REPORTER,arguments:{MODE:{type:e.ArgumentType.STRING,menu:"tweenmodes"},DIRECTION:{type:e.ArgumentType.STRING,menu:"tweendirection"},START:{type:e.ArgumentType.NUMBER,defaultValue:0},END:{type:e.ArgumentType.NUMBER,defaultValue:100},AMOUNT:{type:e.ArgumentType.NUMBER,defaultValue:50}}}],menus:{percentMode:{acceptReporters:!0,items:[{text:"increased",value:"increased"},{text:"decreased",value:"decreased"}]},textCase:{acceptReporters:!0,items:[{text:"lowercase",value:window.extensionData.textPlus.CaseParam.LOWERCASE},{text:"UPPERCASE",value:window.extensionData.textPlus.CaseParam.UPPERCASE},{text:"Title Case",value:window.extensionData.textPlus.CaseParam.TITLECASE},{text:"Exactly Title Case",value:window.extensionData.textPlus.CaseParam.EXACTTITLECASE},{text:"MiXeD CaSe",value:window.extensionData.textPlus.CaseParam.MIXEDCASE}]},castType:{acceptReporters:!0,items:["number","string","boolean","default"]},tweenmodes:{acceptReporters:!0,items:["linear","sine","quad","cubic","quart","quint","expo","circ","back","elastic","bounce"]},tweendirection:{acceptReporters:!0,items:["in","out","in out"]}}}}clamp(t,a){let o=t.NUM,l=t.MIN,n=t.MAX;return l>n?e.Cast.toNumber(Math.min(Math.max(o,n),l)):e.Cast.toNumber(Math.min(Math.max(o,l),n))}ifthenelse_reporter({CONDITION:e,TEXT1:t,TEXT2:a},o){return e?t:a}egg({TEXT:e},t){return alert(`${e} is\xf0Ÿ\xa5š`),"\xf0Ÿ\xa5š"}gtEqual(e,t){return e.OPERAND1<=e.OPERAND2}ltEqual(e,t){return e.OPERAND1>=e.OPERAND2}nor(e,t){return!(e.OPERAND1||e.OPERAND2)}xor(e,t){return e.OPERAND1!=e.OPERAND1}substring(e,t){let a=e.START,o=e.END,l=e.STRING;return l.slice(Math.max(1,a)-1,Math.min(l.length,o))}replace(e,t){let a=e.INPUT1,o=e.INPUT2,l=e.STRING;return l.toString().replace(RegExp(a,"gi"),o)}true_block(){return!0}false_block(){return!1}bool_coupler({TEXT:t}){return e.Cast.toBoolean(t)}test(){alert(1)}percentof(t){return e.Cast.toNumber(t.AMOUNT)*e.Cast.toNumber(t.PERCENT)/100}percentis(t){return 100*e.Cast.toNumber(t.AMOUNT)/e.Cast.toNumber(t.PERCENT)}percentin(t){return 100*e.Cast.toNumber(t.AMOUNT)/e.Cast.toNumber(t.PERCENT)}percentUD(t){t.AMOUNT=e.Cast.toNumber(t.AMOUNT),t.PERCENT=e.Cast.toNumber(t.PERCENT);var a=t.AMOUNT,o=t.PERCENT;switch(t.MODE){case"increased":default:return a*((100+o)/100);case"decreased":return a*((100-o)/100)}}presadd(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B);let l=!1,n=!1;"-"===a[0]&&(l=!0,a=a.slice(1)),"-"===o[0]&&(n=!0,o=o.slice(1));let[r,s]=a.split("."),[u,p]=o.split(".");s||(s="0"),p||(p="0");let i=Math.max(s.length,p.length);s=s.padEnd(i,"0"),p=p.padEnd(i,"0");let d=(l?"-":"")+r+s,c=(n?"-":"")+u+p,T=BigInt(d)+BigInt(c),m=T.toString();return("."==(m=m.slice(0,-i)+"."+m.slice(-i))[0]&&(m="0"+m),/^[-0.0]*$/.test(m))?"0":m}pressubtract(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B);let l=!1,n=!1;"-"===a[0]&&(l=!0,a=a.slice(1)),"-"===o[0]&&(n=!0,o=o.slice(1));let[r,s]=a.split("."),[u,p]=o.split(".");s||(s="0"),p||(p="0");let i=Math.max(s.length,p.length);s=s.padEnd(i,"0"),p=p.padEnd(i,"0");let d=(l?"-":"")+r+s,c=(n?"-":"")+u+p,T=BigInt(d)-BigInt(c),m=T.toString();return("."==(m=m.slice(0,-i)+"."+m.slice(-i))[0]&&(m="0"+m),/^[-0.0]*$/.test(m))?"0":m}presmultiply(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B);let l=!1,n=!1;"-"===a[0]&&(l=!0,a=a.slice(1)),"-"===o[0]&&(n=!0,o=o.slice(1));let[r,s]=a.split("."),[u,p]=o.split(".");s||(s="0"),p||(p="0");let i=s.length+p.length;r=r.replace(/^0+/,""),u=u.replace(/^0+/,"");let d=BigInt(r)*BigInt(u),c=BigInt(s)*BigInt(p);c=c.toString().padStart(i,"0");let T=(l!==n?"-":"")+d.toString();return(i>0&&(T+="."+c),/^[-0.0]*$/.test(T))?"0":T}presdivided(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B),l=e.Cast.toNumber(t.PRE);let n=parseFloat(a),r=parseFloat(o);if(0===r)return"divisor can't is zero";let s=(n/r).toFixed(l).toString();var u="."+"0".repeat(l);return(s=s.replace(/(\.[0-9]*[1-9])0+$/,"$1")).endsWith(u)?s.split(u)[0]:s}textplusidentical(e,t){return e.OPERAND1===e.OPERAND2}textplusunicodeof(e,t){let a=Array.from(e.STRING.toString());return a.map(e=>e.charCodeAt(0)).join(" ")}textplusunicodefrom(e,t){return String.fromCharCode(Number(e.NUM)||0)}textplusletters_of(e,t){return e.STRING=e.STRING.toString(),e.LETTER1=Number(e.LETTER1)||0,e.LETTER2=Number(e.LETTER2)||0,e.STRING.substring(e.LETTER1-1,e.LETTER2)}_caseInsensitiveRegex(e){return RegExp(e.replaceAll(/[^a-zA-Z0-9]/g,"\\$&"),"gi")}textplussplit(e,t){if(e.STRING=(e.STRING??"").toString(),e.SPLIT=(e.SPLIT??"").toString(),e.ITEM=Number(e.ITEM)||0,!(window.extensionData.textPlus.splitCache&&window.extensionData.textPlus.splitCache.string===e.STRING&&window.extensionData.textPlus.splitCache.split===e.SPLIT)){let a=this._caseInsensitiveRegex(e.SPLIT);window.extensionData.textPlus.splitCache={string:e.STRING,split:e.SPLIT,arr:e.STRING.split(a)}}return window.extensionData.textPlus.splitCache.arr[e.ITEM-1]||""}textpluscount(e,t){return this.split({SPLIT:e.SUBSTRING,STRING:e.STRING,ITEM:0},t),window.extensionData.textPlus.splitCache.arr.length-1||0}textplusreplace(e,t){e.STRING=e.STRING.toString(),e.SUBSTRING=e.SUBSTRING.toString(),e.REPLACE=e.REPLACE.toString();let a=this._caseInsensitiveRegex(e.SUBSTRING);return e.STRING.replace(a,e.REPLACE)}textplusindexof(e,t){e.STRING=(e.STRING??"").toString().toLowerCase(),e.SUBSTRING=(e.SUBSTRING??"").toString().toLowerCase();let a=e.STRING.indexOf(e.SUBSTRING);return a+1}textplusrepeat(e,t){return e.STRING=e.STRING.toString(),e.REPEAT=Number(e.REPEAT)||0,e.STRING.repeat(e.REPEAT)}textplusreplaceRegex(e,t){try{return e.STRING=e.STRING.toString(),e.REPLACE=e.REPLACE.toString(),e.REGEX=e.REGEX.toString(),e.FLAGS=e.FLAGS.toString(),e.STRING.replace(RegExp(e.REGEX,e.FLAGS),e.REPLACE)}catch(a){return console.error(a),""}}textplusmatchRegex(e,t){try{if(e.STRING=(e.STRING??"").toString(),e.REGEX=(e.REGEX??"").toString(),e.FLAGS=(e.FLAGS??"").toString(),e.ITEM=Number(e.ITEM)||0,!(window.extensionData.textPlus.matchCache&&window.extensionData.textPlus.matchCache.string===e.STRING&&window.extensionData.textPlus.matchCache.regex===e.REGEX&&window.extensionData.textPlus.matchCache.flags===e.FLAGS)){let a=e.FLAGS.includes("g")?e.FLAGS:e.FLAGS+"g",o=RegExp(e.REGEX,a);window.extensionData.textPlus.matchCache={string:e.STRING,regex:e.REGEX,flags:e.FLAGS,arr:e.STRING.match(o)||[]}}return window.extensionData.textPlus.matchCache.arr[e.ITEM-1]||""}catch(l){return console.error(l),""}}textpluscountRegex(e,t){return this.matchRegex(e,t),window.extensionData.textPlus.matchCache.arr.length||0}textplustestRegex(e,t){try{return e.STRING=e.STRING.toString(),e.REGEX=e.REGEX.toString(),e.FLAGS=e.FLAGS.toString(),RegExp(e.REGEX,e.FLAGS).test(e.STRING)}catch(a){return console.error(a),!1}}textplusisCase(e,t){let a=e.STRING.toString(),o=e.TEXTCASE.toString();switch(o){case window.extensionData.textPlus.CaseParam.LOWERCASE:return a.toLowerCase()===a;case window.extensionData.textPlus.CaseParam.UPPERCASE:return a.toUpperCase()===a;case window.extensionData.textPlus.CaseParam.MIXEDCASE:return!(a.toUpperCase()===a||a.toLowerCase()===a);case window.extensionData.textPlus.CaseParam.TITLECASE:return a.split(/\b/g).every(e=>{if(!e)return!0;let t=e[0].toUpperCase()+e.substring(1);return e===t});case window.extensionData.textPlus.CaseParam.EXACTTITLECASE:return a.split(/\b/g).every(e=>{if(!e)return!0;let t=e[0].toUpperCase()+e.substring(1).toLowerCase();return e===t});default:return!1}}textplustoCase(e,t){let a=e.STRING.toString(),o=e.TEXTCASE.toString();switch(o){case window.extensionData.textPlus.CaseParam.LOWERCASE:return a.toLowerCase();case window.extensionData.textPlus.CaseParam.UPPERCASE:return a.toUpperCase();case window.extensionData.textPlus.CaseParam.MIXEDCASE:return Array.from(a).map((e,t)=>t%2==0?e.toUpperCase():e.toLowerCase()).join("");case window.extensionData.textPlus.CaseParam.TITLECASE:return a.split(/\b/g).map(e=>e?e[0].toUpperCase()+e.substring(1):"").join("");case window.extensionData.textPlus.CaseParam.EXACTTITLECASE:return a.split(/\b/g).map(e=>e?e[0].toUpperCase()+e.substring(1).toLowerCase():"").join("");default:return a}}casttoType(t){let a=t.INPUT;switch(t.TYPE){case"number":return e.Cast.toNumber(a);case"string":return e.Cast.toString(a);case"boolean":return e.Cast.toBoolean(a);default:return a}}casttypeOf(e){let t=e.INPUT;switch(typeof t){case"number":return"number";case"string":return"string";case"boolean":return"boolean";default:return""}}multiplierToNormalNumber(e,t,a){return e*(a-t)+t}tweenValue(t){let a=e.Cast.toString(t.MODE),o=e.Cast.toString(t.DIRECTION),l=e.Cast.toNumber(t.START),n=e.Cast.toNumber(t.END);if(!["linear","sine","quad","cubic","quart","quint","expo","circ","back","elastic","bounce"].includes(a)||!this[a])return l;let r=e.Cast.toNumber(t.AMOUNT)/100,s=this[a](r,o);return this.multiplierToNormalNumber(s,l,n)}linear(e){return e}sine(e,t){switch(t){case"in":return 1-Math.cos(e*Math.PI/2);case"out":return Math.sin(e*Math.PI/2);case"in out":return-(Math.cos(Math.PI*e)-1)/2;default:return 0}}quad(e,t){switch(t){case"in":return e*e;case"out":return 1-(1-e)*(1-e);case"in out":return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;default:return 0}}cubic(e,t){switch(t){case"in":return e*e*e;case"out":return 1-Math.pow(1-e,3);case"in out":return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;default:return 0}}quart(e,t){switch(t){case"in":return e*e*e*e;case"out":return 1-Math.pow(1-e,4);case"in out":return e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2;default:return 0}}quint(e,t){switch(t){case"in":return e*e*e*e*e;case"out":return 1-Math.pow(1-e,5);case"in out":return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2;default:return 0}}expo(e,t){switch(t){case"in":return 0===e?0:Math.pow(2,10*e-10);case"out":return 1===e?1:1-Math.pow(2,-10*e);case"in out":return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2;default:return 0}}circ(e,t){switch(t){case"in":return 1-Math.sqrt(1-Math.pow(e,2));case"out":return Math.sqrt(1-Math.pow(e-1,2));case"in out":return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2;default:return 0}}back(e,t){switch(t){case"in":return 2.70158*e*e*e-1.70158*e*e;case"out":return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2);case"in out":return e<.5?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2;default:return 0}}elastic(e,t){switch(t){case"in":return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3));case"out":return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1;case"in out":{let a=2*Math.PI/4.5;return 0===e?0:1===e?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*a))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*a)/2+1}default:return 0}}bounce(e,t){switch(t){case"in":return 1-this.bounce(1-e,"out");case"out":if(e<.36363636363636365)return 7.5625*e*e;if(e<.7272727272727273)return 7.5625*(e-=.5454545454545454)*e+.75;if(e<.9090909090909091)return 7.5625*(e-=.8181818181818182)*e+.9375;else return 7.5625*(e-=.9545454545454546)*e+.984375;case"in out":return e<.5?(1-this.bounce(1-2*e,"out"))/2:(1+this.bounce(2*e-1,"out"))/2;default:return 0}}})}(Scratch);