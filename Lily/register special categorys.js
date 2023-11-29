vm.on('EXTENSION_ADDED', e => {
    function testBlocks() {
        if (!vm.TurboCharged.specialEnabled) return;
        if (e.id === 'microbit') addMicrobitBlocks();
        if (e.id === 'pen') addPenBlocks();
    }
    setTimeout(testBlocks, 150);
});

try { addMicrobitBlocks() } catch { console.error('micro:bit not found') };
try { addPenBlocks() } catch { console.error('pen not found') };