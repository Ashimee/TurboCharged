//The color changing code by Lily
// Reimplementing the color parameters
runtime._convertBlockForScratchBlocks = function(blockInfo, categoryInfo) {
    const res = cbfsb(blockInfo, categoryInfo);
    //the color
    if (blockInfo.color1) {
        if (!res.json.color1) res.json.color1 = blockInfo.color1;
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