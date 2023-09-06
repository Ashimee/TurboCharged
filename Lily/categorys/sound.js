class TurboChargedSound {
    getInfo() {
        return {
            id: 'sound',
            name: 'Sound 🪄',
            color1: Colors.sound.primary,
            color2: Colors.sound.secondary,
            color3: Colors.sound.tertiary,
            blocks: []
        }
    }
}

const sound = function(isInitialSetup, isStage, targetId, soundName) {
    return `
<category name="%{BKY_CATEGORY_SOUND} 🪄" id="sound" ${Colors.sound.xml}>
<block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_sound_play" type="sound_play">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block type="sound_stopallsounds"/>
${blockSeparator}
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
${blockSeparator}
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
<block id="${targetId}_volume" type="sound_volume"/>
${categorySeparator}
</category>
`;
};