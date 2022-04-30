const colAmt = 32;
const rowAmt = 3;
const eventStartTime = 9;
const scheduleSection = document.querySelector(".timeline-wrapper");


class TimeLineGrid {
    timeCellNodes = [];
    colContainerNodes = [];

    constructor() {
        this.setupColContainer();
        this.generateLabel();
        for (let row = 0; row < rowAmt; row++) {
            for (let col = 0; col < colAmt; col++) {
                const colNode = document.createElement("div");
                colNode.className = "timeline-cell";

                this.colContainerNodes[col].appendChild(colNode);
                this.timeCellNodes[col].push(colNode);
            }
        }
    }

    setTimeCell(col, row, title, description) {
        const lineNode = document.createElement("div");
        lineNode.style.width = "100%";
        lineNode.style.height = "5px";
        lineNode.style.backgroundColor = "purple";
        lineNode.style.position = "relative";

        const textSection = document.createElement("div");
        textSection.className = "timeline-text-section";

        const titleNode = document.createElement("h5");
        titleNode.innerHTML = title;

        const descriptionNode = document.createElement("p");
        descriptionNode.innerHTML = description;

        textSection.appendChild(titleNode);
        textSection.appendChild(descriptionNode);
        lineNode.appendChild(textSection);

        this.timeCellNodes[col-1][row-1].appendChild(lineNode);
    }

    generateLabel() {
        for (let col = 0; col < colAmt; col++) {
            const timeLineLabel = document.createElement("div");
            timeLineLabel.className = "timeline-label";
            timeLineLabel.innerHTML = `${(eventStartTime + col) % 24}:00`
            this.colContainerNodes[col].appendChild(timeLineLabel);
        }
        rootNode.style.setProperty("--last-timeline-label-content", `"${(eventStartTime + colAmt) % 24}:00"`);
    }

    setupColContainer() {
        for (let col = 0; col < colAmt; col++) {
            this.timeCellNodes.push([]);
            const colContainerNode = document.createElement("div");
            colContainerNode.className = "timeline-col-container";
            scheduleSection.appendChild(colContainerNode);
            this.colContainerNodes.push(colContainerNode);
        }
    }
}

class TimeCell {
    title = "";
    description = "";
    fromTime = null;
    toTime = null;

    constructor (title, description, fromTime, toTime) {
        this.title = title;
        this.description = description;
        this.fromTime = fromTime;
        this.toTime = toTime;
    }
}

window.onload = () => {
    const timeLine = new TimeLineGrid();
    timeLine.setTimeCell(5, 3, "Hello", "Gamer Ree");
};