/**
 * @param {VM.Target|null} target
 * @param {string|unknown} thing
 * @returns {string|number|boolean}
 */
const getThingOfTarget = (target, thing) => {
    if (!target) {
        return '';
    }
    if (thing === 'x position') {
        return target.x;
    }
    if (thing === 'y position') {
        return target.y;
    }
    if (thing === 'direction') {
        return target.direction;
    }
    if (thing === 'costume num') {
        return (target.currentCostume + 1);
    }
    if (thing === 'costume name') {
        return target.getCostumes()[target.currentCostume].name;
    }
    if (thing === 'size') {
        return target.size;
    }
    if (thing === 'volume') {
        return target.volume;
    }
    // this should never happen
    return '';
};
const xmlEscape = function(unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '\'':
                return '&apos;';
            case '"':
                return '&quot;';
        }
    });
}

function cbto(a) {
    const blob = new Blob([a], {
        type: "text document"
    });
    return URL.createObjectURL(blob)
};

function parseCreditsCommentIntoHTML(_comment) {
    let comment = _comment;
    comment = comment.replace('/**', `<!DOCTYPE html><html><head><title>TurboCharged Credits</title></head><body><h1>Credits</h1><span>`)
    comment = comment.replaceAll('         * ', '<!-- line -->&nbsp;&nbsp;');
    comment = comment.replace('*/', '</span></body></html>');
    comment = comment.replaceAll('<!-- line -->', '<br>');
    const comment_lines = comment.split('<br>');
    for (let comment_line in comment_lines) {
        const lineNo = comment_line;
        comment_line = comment_lines[comment_line].toString();
        if (comment_line.includes('https://')) {
            const link = comment_line.substring(comment_line.indexOf('https://'), comment_line.length);
            comment_line = comment_line.replace(link, `<a href="${link.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}">${xmlEscape(link)}</a>`);
        }
        comment_lines[lineNo] = comment_line;
    };
    comment = comment_lines.join('<br>');
    comment = comment.replace('}', '');
    return comment;
}
const credits_blob = function() {
    if (!window.extensionData.createBlobTo.hasRanBlob) {
        window.extensionData.createBlobTo.hasRanBlob = true;
        window.extensionData.createBlobTo.url = cbto(parseCreditsCommentIntoHTML(credits_comment));
    };
    window.open(window.extensionData.createBlobTo.url, '_blank');
};