//The color changing code by Lily & xeltalliv/vadik-1
// Reimplementing the color parameters
runtime._convertBlockForScratchBlocks = function(blockInfo, categoryInfo) {
    const res = cbfsb(blockInfo, categoryInfo);
    //the color
    if (blockInfo.color1) {
        if (!res.json.color1) res.json.color1 = blockInfo.color1;
    }
    if (blockInfo.color2) {
        if (!res.json.color2) res.json.color2 = blockInfo.color2;
    }
    if (blockInfo.color3) {
        if (!res.json.color3) res.json.color3 = blockInfo.color3;
    }
    //Other block stuff
    if (blockInfo.outputShape) {
        if (!res.json.outputShape) res.json.outputShape = blockInfo.outputShape;
    }
    if (blockInfo.extensions) {
        if (!res.json.extensions) res.json.extensions = blockInfo.extensions;
    }
    if (!res.json.branchCount) res.json.branchCount = blockInfo.branchCount;
    return res;
};