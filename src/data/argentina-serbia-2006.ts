// Argentina vs Serbia & Montenegro 2006 - The Famous 26-Pass Goal
// Accurate SVG paths traced from reference visualization
// ViewBox: 0 0 404 678 (pitch dimensions)

export const argentinaSerbia2006 = {
    metadata: {
        match: "Argentina v Serbia and Montenegro 2006",
        description: "2-0 goal in 6-0 win (Cambiasso)",
        viewBox: "0 0 404 678",
        source: "ongoalscored.com"
    },

    // Player movement paths - traced from reference image
    players: [
        // SAVIOLA - Multiple curved runs on the left side
        {
            id: "saviola",
            name: "Saviola",
            paths: [
                {
                    type: "movement_with_ball",
                    // Dark thick curve - main run with ball from left, looping around
                    svg_d: "M65 195 C45 175, 35 150, 50 120 C65 90, 95 75, 120 85 C145 95, 150 125, 135 150 C120 175, 90 190, 75 210",
                    style: { stroke: "#1565C0", width: 8, opacity: 0.7 }
                },
                {
                    type: "movement_without_ball",
                    // Lighter curve - supporting run
                    svg_d: "M75 210 C60 235, 45 260, 55 290 C65 320, 95 330, 120 310 C145 290, 140 260, 125 235",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                },
                {
                    type: "movement_without_ball",
                    // Another run near penalty area
                    svg_d: "M125 235 C100 215, 80 195, 90 170 C100 145, 130 135, 155 150",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // CRESPO - Runs near the top of the pitch (attacking half)
        {
            id: "crespo",
            name: "Crespo",
            paths: [
                {
                    type: "movement_with_ball",
                    // Curved run in the box area
                    svg_d: "M280 95 C300 80, 330 75, 345 90 C360 105, 355 130, 335 145 C315 160, 285 155, 270 140",
                    style: { stroke: "#1565C0", width: 8, opacity: 0.7 }
                },
                {
                    type: "movement_without_ball",
                    // Supporting movement
                    svg_d: "M270 140 C250 125, 230 115, 215 130 C200 145, 205 170, 225 185 C245 200, 275 195, 290 175",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                },
                {
                    type: "movement_without_ball",
                    // Extra run near goal
                    svg_d: "M290 175 C310 160, 340 150, 355 165 C370 180, 365 205, 345 215",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // CAMBIASSO - Curved runs on the right side, midfielder to scorer
        {
            id: "cambiasso",
            name: "Cambiasso",
            paths: [
                {
                    type: "movement_with_ball",
                    // Final run into the box to score
                    svg_d: "M340 285 C360 260, 375 230, 365 200 C355 170, 325 150, 295 160 C265 170, 250 200, 260 230",
                    style: { stroke: "#1565C0", width: 8, opacity: 0.7 }
                },
                {
                    type: "movement_without_ball",
                    // Earlier supporting run
                    svg_d: "M320 320 C340 300, 355 275, 350 250 C345 225, 325 210, 300 220",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // RIQUELME - Central playmaker movements
        {
            id: "riquelme",
            name: "Riquelme",
            paths: [
                {
                    type: "movement_without_ball",
                    // Central movement pattern
                    svg_d: "M200 340 C175 320, 155 295, 165 265 C175 235, 205 220, 235 235 C265 250, 270 285, 250 310",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                },
                {
                    type: "movement_without_ball",
                    // Secondary movement
                    svg_d: "M175 355 C150 335, 130 310, 140 280 C150 250, 180 235, 210 250",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // RODRIGUEZ - Left-center movements
        {
            id: "rodriguez",
            name: "Rodriguez",
            paths: [
                {
                    type: "movement_without_ball",
                    svg_d: "M155 365 C135 345, 120 320, 130 295 C140 270, 170 260, 195 275",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // SORIN - Left back overlapping runs
        {
            id: "sorin",
            name: "Sorin",
            paths: [
                {
                    type: "movement_without_ball",
                    // Overlapping run up the left
                    svg_d: "M55 395 C35 370, 25 340, 35 310 C45 280, 75 260, 100 275",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                },
                {
                    type: "movement_without_ball",
                    svg_d: "M100 275 C80 255, 65 230, 75 205 C85 180, 110 170, 130 185",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // AYALA - Right side defender pushing up
        {
            id: "ayala",
            name: "Ayala",
            paths: [
                {
                    type: "movement_without_ball",
                    svg_d: "M350 360 C370 340, 380 315, 375 290 C370 265, 350 245, 325 255",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // MASCHERANO - Central midfielder movements
        {
            id: "mascherano",
            name: "Mascherano",
            paths: [
                {
                    type: "movement_without_ball",
                    svg_d: "M165 430 C145 410, 130 385, 140 360 C150 335, 175 325, 200 340",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        },

        // HEINZE - Left back starting the play
        {
            id: "heinze",
            name: "Heinze",
            paths: [
                {
                    type: "movement_without_ball",
                    svg_d: "M165 510 C145 490, 130 465, 140 440 C150 415, 175 405, 195 420",
                    style: { stroke: "#64B5F6", width: 5, opacity: 0.5 }
                }
            ]
        }
    ],

    // Ball movement - the passing sequence (yellow/gold lines in reference)
    ball_events: [
        {
            type: "pass_sequence",
            // Complete pass sequence from Heinze to goal
            svg_d: "M165 510 L150 460 L70 395 L160 365 L195 350 L75 395 L65 195 L195 350 L320 285 L280 95 L65 195 L280 95 L320 285 L350 360 L195 350 L160 365 L65 195 L75 395 L195 350 L320 285 L202 15",
            style: { stroke: "#D4A017", width: 2, dasharray: undefined }
        }
    ],

    // Touch points - where players receive/release the ball (blue circles)
    touch_points: [
        // Starting positions and key touches
        { x: 165, y: 510, label: "Heinze", type: "touch" },
        { x: 150, y: 460, label: "Mascherano", type: "touch" },
        { x: 70, y: 395, label: "Sorin", type: "touch" },
        { x: 160, y: 365, label: "Rodriguez", type: "touch" },
        { x: 195, y: 350, label: "Riquelme", type: "touch" },
        { x: 65, y: 195, label: "Saviola", type: "touch" },
        { x: 320, y: 285, label: "Cambiasso", type: "touch" },
        { x: 280, y: 95, label: "Crespo", type: "touch" },
        { x: 350, y: 360, label: "Ayala", type: "touch" },
        { x: 202, y: 15, label: "Goal", type: "goal" }
    ],

    // Pass/shot markers (yellow dots) and other touch markers (orange dots)
    markers: [
        { x: 165, y: 510, type: "pass" },
        { x: 150, y: 460, type: "pass" },
        { x: 70, y: 395, type: "pass" },
        { x: 160, y: 365, type: "pass" },
        { x: 195, y: 350, type: "pass" },
        { x: 65, y: 195, type: "pass" },
        { x: 320, y: 285, type: "pass" },
        { x: 280, y: 95, type: "pass" },
        { x: 350, y: 360, type: "pass" },
        { x: 202, y: 15, type: "shot" }
    ]
};

export default argentinaSerbia2006;
