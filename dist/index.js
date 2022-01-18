

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var html2canvas = _interopDefault(require('html2canvas'));

var ReactComponentToPdf = function (_a) {
    var targetRef = _a.targetRef;
    var toPdf = function () {
        html2canvas(targetRef, {
            scale: 2,
            allowTaint: true,
            useCORS: true,
            scrollY: 0,
            scrollX: 0
        }).then(function (canvas) {
            console.log(canvas);
        });
    };
    return (React.createElement("div", null,
        targetRef,
        React.createElement("button", { onClick: toPdf }, "export")));
};

exports.default = ReactComponentToPdf;
//# sourceMappingURL=index.js.map
