function addMicrobitBlocks() {
    let runtime = vm.runtime;
    try {
        var tmp = runtime.ext_microbit
    } catch {
        return ('');
    };
    let ext = runtime.ext_microbit;
    if (ext.getInfoBound == undefined) ext.getInfoBound = ext.getInfo.bind(ext);
    let egi = ext.getInfoBound;
  //Matrix testing
  ext.matrixValidator = function({ MATRIX }, util) {
    MATRIX = Scratch.Cast.toString(MATRIX);

    //Making sure the length is correct
    if (MATRIX.length < 25 || (MATRIX.length % 25) != 0) return false;

    //Making sure its binary
    if ((MATRIX.replace(/[01]/g, '') !== '')) return false;

    //All checks to invalidate the matrix failed which means its a matrix.
    return true;
  }
  //Couplers
  ext.matrixCoupler = function({ A }, util) {
    return Scratch.Cast.toString(A);
  }
  ext.quadMatrixCoupler = function({ A, B, C, D }, util) {
    return (`${Scratch.Cast.toString(A)}${Scratch.Cast.toString(B)}${Scratch.Cast.toString(C)}${Scratch.Cast.toString(D)}`);
  }
  //Matrix handling
  ext.getMicrobitMatrix = function({ NUMBER, MATRIX }, util) {
    NUMBER = Math.round(Scratch.Cast.toNumber(NUMBER));
    MATRIX = Scratch.Cast.toString(MATRIX);
    return (MATRIX.slice((NUMBER-1)*25, ((NUMBER-1)*25)+25));
  }
  ext.getDigitAt = function({ ROW, COLLUM, MATRIX }, util) {
    ROW = Math.round(Scratch.Cast.toNumber(ROW));
    COLLUM = Math.round(Scratch.Cast.toNumber(COLLUM));
    MATRIX = Scratch.Cast.toString(MATRIX);

    //Clamping
    ROW = (ROW < 1 ? 1 : (ROW > 5 ? 5 : ROW));
    COLLUM = (COLLUM < 1 ? 1 : (COLLUM > 5 ? 5 : COLLUM));

    //Math!
    return MATRIX.charAt(((ROW-1)*5)+(COLLUM-1));
  }
    ext.getInfo = function() {
        const DefaultExtensions = vm.TurboCharged.extensionData.DefaultExtensions;
        let tmp = egi();
        let blocks = tmp.blocks;
        tmp.name = "micro:bit 🪄";
        blocks.push({
            blockType: "label",
            text: "Matrixes"
        });
        blocks = DefaultExtensions.addBlocks(blocks, [
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'matrixValidator',
              text: 'is binary [MATRIX] a valid matrix?',
              arguments: {
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'matrixCoupler',
              text: '[A]',
              arguments: {
                A: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'quadMatrixCoupler',
              text: ['[A] [B]', '[C] [D]'],
              arguments: {
                A: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                B: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                C: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                D: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX}
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getMicrobitMatrix',
              text: 'get matrix number [NUMBER] out of binary [MATRIX]',
              arguments: {
                NUMBER: {defaultValue: 1, type: Scratch.ArgumentType.NUMBER},
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.STRING}
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getDigitAt',
              text: 'get pixel at row [ROW] and collum [COLLUM] of matrix [MATRIX]',
              arguments: {
                ROW: {defaultValue: 3, type: Scratch.ArgumentType.NUMBER},
                COLLUM: {defaultValue: 5, type: Scratch.ArgumentType.NUMBER},
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX}
              }
            }
          ]);
        return tmp;
    }
    vm.extensionManager.refreshBlocks();
}