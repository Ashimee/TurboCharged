class TurboChargedLooks {
    getInfo() {
        return {
            id: 'looks',
            name: 'Looks 🪄',
            color1: Colors.looks.primary,
            color2: Colors.looks.secondary,
            color3: Colors.looks.tertiary,
            blocks: []
        }
    }
}

const looks = function(isInitialSetup, isStage, targetId, costumeName, backdropName) {
    const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');
    const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');
    return `
<category name="%{BKY_CATEGORY_LOOKS} 🪄" id="looks" ${Colors.looks.xml}>
${isStage ? '' : `
<block type="looks_sayforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hello}</field>
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
            <field name="TEXT">${hello}</field>
        </shadow>
    </value>
</block>
<block type="looks_thinkforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hmm}</field>
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
            <field name="TEXT">${hmm}</field>
        </shadow>
    </value>
</block>
${blockSeparator}
`}
${isStage ? `
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_switchbackdroptoandwait">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
` : `
    <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto">
        <value name="COSTUME">
            <shadow type="looks_costume">
                <field name="COSTUME">${costumeName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextcostume"/>
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
    ${blockSeparator}
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
${blockSeparator}
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
${blockSeparator}
${isStage ? '' : `
    <block type="looks_show"/>
    <block type="looks_hide"/>
${blockSeparator}
    <block type="looks_gotofrontback"/>
    <block type="looks_goforwardbackwardlayers">
        <value name="NUM">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
`}
${isStage ? `
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
` : `
    <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
    <block id="${targetId}_size" type="looks_size"/>
`}
${categorySeparator}
</category>
`;
};