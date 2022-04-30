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

    addFirstCell(row, col, startGap, duration, title, description, colour) {
        const lineNode = document.createElement("div");
        lineNode.style.width = `${(duration - Math.floor(duration)) * 100}%`;
        lineNode.style.height = "5px";
        lineNode.style.backgroundColor = colour;
        lineNode.style.position = "relative";

        if (startGap - Math.floor(startGap) > 0.001) {
            lineNode.style.left = `${(startGap - Math.floor(startGap)) * 100}%`;
        }

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

    setTimeCell(row, col, startGap, duration, title, description, colour) {
        this.addFirstCell(row, col, startGap, duration, title, description, colour);

        let time = 1;
        while (time < Math.floor(duration)) {
            const lineNode = document.createElement("div");
            lineNode.style.width = "100%";
            lineNode.style.height = "5px";
            lineNode.style.backgroundColor = colour;
            lineNode.style.position = "relative";
            this.timeCellNodes[col-1 + time][row-1].appendChild(lineNode);
            time++;
        }

        if (duration - Math.floor(duration) > 0.001 && time < Math.floor(duration)) {
            const lineNode = document.createElement("div");
            lineNode.style.width = `${(duration - Math.floor(duration)) * 100}%`;
            lineNode.style.height = "5px";
            lineNode.style.backgroundColor = colour;
            lineNode.style.position = "relative";
            this.timeCellNodes[col-1 + time][row-1].appendChild(lineNode);
        }
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

const initTimeLine = (timeLine) => {
    timeLine.setTimeCell(1, 1, 0.5, 0.75, "Check In", "9:00AM - 9:45AM | Front Desk", "purple");
    timeLine.setTimeCell(1, 3, 0, 0.75, "Check In", "9:00AM - 9:45AM | Front Desk", "purple");
}

window.onload = () => {
    const timeLine = new TimeLineGrid();
    initTimeLine(timeLine);
};

