import * as React from 'react';
//import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';

//const { useEffect } = React

export type ICounterProps = {
//    className?: string,
    targetRef: HTMLInputElement
}

const ReactComponentToPdf: React.FC<ICounterProps> = ({ targetRef }) => {

    const toPdf = () => {
        html2canvas(targetRef, {
            scale: 2,
            allowTaint: true,
            useCORS: true,
            scrollY: 0,
            scrollX: 0
        }).then(canvas => {
            console.log(canvas)
        });
    }

    return (
        <div>
            {targetRef}
            <button onClick={toPdf}>export</button>
        </div>
    );
}

export default ReactComponentToPdf;
