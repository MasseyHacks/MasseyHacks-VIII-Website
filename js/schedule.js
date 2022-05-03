const colAmt = 32;
const rowAmt = 3;
const eventStartTime = 9;
const lineHeight = "5px";
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

        lineNode.style.height = lineHeight;
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
            lineNode.style.height = lineHeight;
            lineNode.style.backgroundColor = colour;
            lineNode.style.position = "relative";
            this.timeCellNodes[col-1 + colCounter][row-1].appendChild(lineNode);
            time++;
            colCounter++;
        }

        if (duration - time > 0.001 && time < duration) {
            const lineNode = document.createElement("div");
            lineNode.style.width = `${(duration - time) * 100}%`;
            lineNode.style.height = lineHeight;
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
    timeLine.setTimeCell(1, 1, 0, 1, "Check In (IP)", "9:00AM - 10:00AM | Front Desk", "#FF58C0");
    timeLine.setTimeCell(1, 2, 0.5, 0.5, "Opening Ceremonies", "10:30AM - 11:00AM | Cafeteria", "#FF58C0");
    timeLine.setTimeCell(1, 5, 0.25, 1, "OpenCV with Python", "1:15PM - 2:15PM | TBD", "#52FAF0");
    timeLine.setTimeCell(1, 7, 0.75, 1, "React.js Workshop", "3:45PM - 4:45PM | TBD", "#52FAF0");
    timeLine.setTimeCell(1, 9, 0, 0.75, "!Light", "5:00PM - 5:45PM | TBD", "#147F78");
    timeLine.setTimeCell(1, 11, 0.5, 0.75, "Cup Stacking", "7:30PM - 8:15PM | Cafeteria", "#147F78");
    timeLine.setTimeCell(1, 12, 0.5, 0.5, "Check-Out (IP)", "8:30PM - 9:00PM | Front Desk", "#FF58C0");
    timeLine.setTimeCell(1, 24, 0, 1, "Check-In (IP)", "8:00AM - 9:00AM | Front Desk", "#FF58C0");
    timeLine.setTimeCell(1, 27, 0.75, 0.5, "Submission Deadline", "11:45AM - 12:15PM", "#FF58C0");
    timeLine.setTimeCell(1, 32, 0, 1, "Closing Ceremonies", "4:00PM - 5:00PM | Cafeteria", "#FF58C0");

    timeLine.setTimeCell(2, 1, 0, 1.25, "Breakfast Snacks (IP)", "9:00AM - 10:15AM | Cafeteria", "#F3DFAD");
    timeLine.setTimeCell(2, 3, 0, 0.25, "Hacking Starts", "11:00AM - 11:15AM", "#FF58C0");
    timeLine.setTimeCell(2, 4, 0, 1.5, "Lunch (IP)", "12:00PM - 1:30PM | Cafeteria", "#F3DFAD");
    timeLine.setTimeCell(2, 5, 0.75, 1, "Intro to Python I", "1:45PM - 2:45PM | TBD", "#52FAF0");
    timeLine.setTimeCell(2, 7, 0, 1, "Intro to Python II", "3:00PM - 4:00PM | TBD", "#52FAF0");
    timeLine.setTimeCell(2, 8, 0.25, 1, "Github", "4:15PM - 5:15PM | TBD", "#52FAF0");
    timeLine.setTimeCell(2, 10, 0, 1.5, "Dinner (IP)", "6:00PM - 7:30PM | Cafeteria", "#F3DFAD");
    timeLine.setTimeCell(2, 14, 0.5, 8.5, "Hackenger Hunt 2", "10:30PM - 7:00AM | Online", "#147F78");
    timeLine.setTimeCell(2, 24, 0.5, 1, "Breakfast (IP)", "8:30AM - 9:30AM | Cafeteria", "#F3DFAD");
    timeLine.setTimeCell(2, 27, 0.5, 1.5, "Lunch (IP)", "11:30AM - 1:00PM | Cafeteria", "#F3DFAD");

    timeLine.setTimeCell(3, 1, 0, 2.5, "Team Formation", "9:00AM - 11:30AM", "#FF58C0");
    timeLine.setTimeCell(3, 6, 0, 4, "Hackenger Hunt 1", "2:00PM - 6:00PM | Online", "#147F78");
    timeLine.setTimeCell(3, 14, 0.5, 1, "Skribbl.io", "10:30PM - 11:30PM | Discord", "#147F78");
    timeLine.setTimeCell(3, 16, 0, 1, "Escape Room", "0:00AM - 1:00AM | Discord", "#147F78");
    timeLine.setTimeCell(3, 17, 0.5, 1, "Speaking Points", "1:30AM - 2:30AM | Discord", "#147F78");
    timeLine.setTimeCell(3, 29, 0, 2, "Judging", "1:00PM - 3:00PM", "#FF58C0");
}

window.onload = () => {
    const timeLine = new TimeLineGrid();
    initTimeLine(timeLine);
};
