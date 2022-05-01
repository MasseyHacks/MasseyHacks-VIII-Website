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
        const remainingGap = 1 - startGap - Math.floor(startGap);
        let durationFilled;
        if (duration <= remainingGap) {
            durationFilled = duration;
            lineNode.style.width = `${duration * 100}%`;
        }

        else {
            durationFilled = remainingGap;
            lineNode.style.width = `${remainingGap * 100}%`;
        }


        lineNode.style.left = `${(startGap - Math.floor(startGap)) * 100}%`;

        lineNode.style.height = "5px";
        lineNode.style.backgroundColor = colour;
        lineNode.style.position = "absolute";



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
        return durationFilled;
    }

    setTimeCell(row, col, startGap, duration, title, description, colour) {
        let time = this.addFirstCell(row, col, startGap, duration, title, description, colour);
        let colCounter = 1;
        while (time + 1 <= Math.floor(duration)) {
            const lineNode = document.createElement("div");
            lineNode.style.width = "100%";
            lineNode.style.height = "5px";
            lineNode.style.backgroundColor = colour;
            lineNode.style.position = "relative";
            this.timeCellNodes[col-1 + colCounter][row-1].appendChild(lineNode);
            time++;
            colCounter++;
        }

        if (duration - time > 0.001 && time < duration) {
            const lineNode = document.createElement("div");
            lineNode.style.width = `${(duration - time) * 100}%`;
            lineNode.style.height = "5px";
            lineNode.style.backgroundColor = colour;
            lineNode.style.position = "relative";
            this.timeCellNodes[col-1 + colCounter][row-1].appendChild(lineNode);
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
    timeLine.setTimeCell(1, 1, 0, 0.75, "Check In (IP)", "9:00AM - 9:45AM | Front Desk", "purple");
    timeLine.setTimeCell(1, 2, 0.5, 0.25, "Opening Ceremonies", "10:30AM - 10:45AM | Front Desk", "purple");
    timeLine.setTimeCell(1, 5, 0.25, 0.75, "OpenCV with Python", "1:15PM - 2:00PM | Front Desk", "purple");
    timeLine.setTimeCell(1, 6, 0.5, 0.75, "Altura API", "2:30PM - 3:15PM | Front Desk", "purple");
    timeLine.setTimeCell(1, 7, 0.75, 0.75, "React.js Workshop", "3:45PM - 4:30PM | Front Desk", "purple");
    timeLine.setTimeCell(1, 12, 0.5, 0.25, "Check-Out (IP)", "8:30PM - 8:45PM | Front Desk", "purple");
    timeLine.setTimeCell(1, 24, 0, 0.75, "Check-Out (IP)", "8:00AM - 8:45AM | Front Desk", "purple");
    timeLine.setTimeCell(1, 27, 0.75, 0.25, "Submission Deadline", "11:45AM - 12:00PM | Front Desk", "purple");
    timeLine.setTimeCell(1, 32, 0, 0.75, "Closing Ceremonies", "4:00PM - 4:45PM | Front Desk", "purple");

    timeLine.setTimeCell(2, 1, 0, 1, "Breakfast Snacks", "9:00AM - 10:00AM | Front Desk", "green");
    timeLine.setTimeCell(2, 4, 0, 1.25, "Lunch", "12:00PM - 1:15PM | Front Desk", "green");
    timeLine.setTimeCell(2, 5, 0.75, 0.75, "Intro to Python I", "1:45PM - 2:30PM | Front Desk", "green");
    timeLine.setTimeCell(2, 7, 0, 0.75, "Intro to Python II", "3:00PM - 3:45PM | Front Desk", "green");
    timeLine.setTimeCell(2, 8, 0.25, 0.75, "Github", "4:15PM - 5:00PM | Front Desk", "green");
    timeLine.setTimeCell(2, 10, 0, 1.25, "Dinner", "6:00PM - 7:15PM | Front Desk", "green");
    timeLine.setTimeCell(2, 14, 0.5, 8.25, "Hackenger Hunt 2", "10:30PM - 6:45AM | Online", "green");
    timeLine.setTimeCell(2, 24, 0.5, 0.75, "Breakfast", "8:30AM - 9:15AM | Front Desk", "green");
    timeLine.setTimeCell(2, 27, 0.5, 1.25, "Lunch", "11:30AM - 12:45PM | Front Desk", "green");

    timeLine.setTimeCell(3, 1, 0, 2.25, "Team Formation", "9:00AM - 11:15AM | Front Desk", "aqua");
    timeLine.setTimeCell(3, 9, 0, 0.5, "!Light", "5:00PM - 5:30PM | Front Desk", "aqua");
    timeLine.setTimeCell(3, 11, 0.5, 0.5, "Cup Stacking", "7:30PM - 8:00PM | Front Desk", "aqua");
    timeLine.setTimeCell(3, 14, 0.5, 0.75, "Skribbl.io", "10:30PM - 11:15PM | Front Desk", "aqua");
    timeLine.setTimeCell(3, 16, 0, 0.75, "Escape Room", "0:00AM - 0:45AM | Front Desk", "aqua");
    timeLine.setTimeCell(3, 17, 0.5, 0.75, "Speaking Points", "1:30AM - 2:15AM | Front Desk", "aqua");
    timeLine.setTimeCell(3, 29, 0, 1.75, "Judging", "1:00PM - 2:45PM | Front Desk", "aqua");
}

window.onload = () => {
    const timeLine = new TimeLineGrid();
    initTimeLine(timeLine);
};