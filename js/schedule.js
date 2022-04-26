const colAmt = 12;
const rowAmt = 3;
const eventStartTime = 0;

class TimeLineGrid {
    cellGridNode = null;
    timeCellNodes = [];

    constructor() {
        this.cellGridNode = document.createElement("div");
        this.cellGridNode.className = "timeline-grid";
        const scheduleSection = document.querySelector(".timeline-wrapper");
        this.generateLabel();
        scheduleSection.appendChild(this.cellGridNode);

        for (let row = 0; row < rowAmt; row++) {
            const curRowCells = [];
            for (let col = 0; col < colAmt; col++) {
                const newCellWrapperNode = document.createElement("div");
                newCellWrapperNode.className = "timeline-cell-wrapper";

                const newCellNode = document.createElement("div");
                newCellWrapperNode.appendChild(newCellNode);

                this.cellGridNode.appendChild(newCellWrapperNode);
                curRowCells.push(newCellNode);
            }
            this.timeCellNodes.push(curRowCells);
        }
    }

    setTimeCell(col, row, timeCell) {
        console.log(this.timeCellNodes);
        this.timeCellNodes[row-1][col-1].style.width = "100%";
        this.timeCellNodes[row-1][col-1].style.height = "5px";
        this.timeCellNodes[row-1][col-1].style.backgroundColor = "purple";

    }

    generateLabel() {
        for (let col = 0; col < colAmt; col++) {
            const timeLineLabel = document.createElement("div");
            timeLineLabel.className = "timeline-label";
            timeLineLabel.innerHTML = `${eventStartTime + col}:00`
            this.cellGridNode.appendChild(timeLineLabel);
        }
    }
}

class TimeCell {
    title = "";
    description = "";
    fromTime = null;
    toTime = null;

    constructor (title,description, fromTime, toTime) {
        this.title = title;
        this.description = description;
        this.fromTime = fromTime;
        this.toTime = toTime;
    }
}

window.onload = () => {
    const gridOne = new TimeLineGrid();
    gridOne.setTimeCell(5, 3);
};