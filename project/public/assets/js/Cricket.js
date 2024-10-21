const cricketData = {
    matches: [
        {
            matchId: "match_1",
            teams: "India vs Australia",
            date: "25th September 2024",
            venue: "Wankhede Stadium, Mumbai",
            status: "Upcoming",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",  // India logo
                "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg" // Australia logo
            ],
            score: "N/A" // Score for upcoming matches
        },
        {
            matchId: "match_2",
            teams: "India vs England",
            date: "10th October 2024",
            venue: "Eden Gardens, Kolkata",
            status: "Ongoing",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",  // India logo
                "https://cdn.worldvectorlogo.com/logos/england.svg" // England logo
            ],
            score: "120/5 (15 overs)" // Example score
        },
        {
            matchId: "match_3",
            teams: "India vs South Africa",
            date: "15th November 2024",
            venue: "M. A. Chidambaram Stadium, Chennai",
            status: "Completed",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",  // India logo
                "https://seeklogo.com/images/S/south-africa-flag-logo-09B8D021F0-seeklogo.com.png" // South Africa logo
            ],
            score: "India: 250, South Africa: 245" // Example score
        }
    ],
    events: [
        {
            eventId: "event_1",
            title: "World Cup 2023",
            date: "5th October 2023",
            location: "India"
        },
        {
            eventId: "event_2",
            title: "Asia Cup 2024",
            date: "30th August 2024",
            location: "Pakistan"
        }
    ],
    players: [
        {
            playerId: "player_1",
            name: "Virat Kohli",
            role: "Batsman",
            team: "India"
        },
        {
            playerId: "player_2",
            name: "Jasprit Bumrah",
            role: "Bowler",
            team: "India"
        },
        {
            playerId: "player_3",
            name: "Rohit Sharma",
            role: "Batsman",
            team: "India"
        }
    ],
    scores: [
        {
            matchId: "match_1",
            score: "N/A",
            details: "India vs Australia - Upcoming Match",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", // India logo
                "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg" // Australia logo
            ]
        },
        {
            matchId: "match_2",
            score: "120/5 (15 overs)",
            details: "India vs England - Ongoing Match",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", // India logo
                "https://cdn.worldvectorlogo.com/logos/england.svg" // England logo
            ]
        },
        {
            matchId: "match_3",
            score: "India: 250, South Africa: 245",
            details: "India vs South Africa - Completed Match",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", // India logo
                "https://seeklogo.com/images/S/south-africa-flag-logo-09B8D021F0-seeklogo.com.png" // South Africa logo
            ]
        }
    ],    
    teams: [
        {
            teamId: "team_1",
            name: "India",
            captain: "Rohit Sharma",
            coach: "Rahul Dravid",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" // India logo
        },
        {
            teamId: "team_2",
            name: "Australia",
            captain: "Pat Cummins",
            coach: "Andrew McDonald",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg" // Australia logo
        },
        {
            teamId: "team_3",
            name: "England",
            captain: "Ben Stokes",
            coach: "Brendan McCullum",
            logo: "https://cdn.worldvectorlogo.com/logos/england.svg" // England logo
        }
    ],
    referees: [
        {
            refereeId: "referee_1",
            name: "Aleem Dar",
            role: "Main Referee",
            matches: [
                "India vs Australia",
                "India vs England"
            ]
        },
        {
            refereeId: "referee_2",
            name: "Marais Erasmus",
            role: "Main Referee",
            matches: [
                "India vs England",
                "India vs South Africa"
            ]
        },
        {
            refereeId: "referee_3",
            name: "Richard Kettleborough",
            role: "Main Referee",
            matches: [
                "India vs Australia",
                "India vs South Africa"
            ]
        },
        {
            refereeId: "referee_4",
            name: "Nigel Llong",
            role: "Assistant Referee",
            matches: [
                "India vs Australia"
            ]
        },
        {
            refereeId: "referee_5",
            name: "Anil Chaudhary",
            role: "Assistant Referee",
            matches: [
                "India vs England"
            ]
        }
    ]
};

// Function to render matches data
function renderMatches() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    cricketData.matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <h3>
                <img src="${match.logos[0]}" alt="India Logo" class="team-logo" />
                India
                vs
                <img src="${match.logos[1]}" alt="Opponent Logo" class="team-logo" />
                Australia
            </h3>
            <div class="match-details">
                <div><strong>Date:</strong> ${match.date}</div>
                <div><strong>Venue:</strong> ${match.venue}</div>
                <div><strong>Status:</strong> ${match.status}</div>
                <div><strong>Score:</strong> ${match.score}</div>
            </div>
        `;
        contentArea.appendChild(matchCard);
    });
}

// Function to render events data
function renderEvents() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    cricketData.events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <div class="event-details">
                <div><strong>Date:</strong> ${event.date}</div>
                <div><strong>Location:</strong> ${event.location}</div>
            </div>
        `;
        contentArea.appendChild(eventCard);
    });
}

// Function to render players data
function renderPlayers() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    cricketData.players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <h3>${player.name}</h3>
            <div class="player-details">
                <div><strong>Role:</strong> ${player.role}</div>
                <div><strong>Team:</strong> ${player.team}</div>
            </div>
        `;
        contentArea.appendChild(playerCard);
    });
}

// Function to render teams data
function renderTeams() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    cricketData.teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.innerHTML = `
            <h3>
                <img src="${team.logo}" alt="${team.name} Logo" class="team-logo" />
                ${team.name}
            </h3>
            <div class="team-details">
                <div><strong>Captain:</strong> ${team.captain}</div>
                <div><strong>Coach:</strong> ${team.coach}</div>
            </div>
        `;
        contentArea.appendChild(teamCard);
    });
}

// Function to render scores data
function renderScores() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    cricketData.scores.forEach(score => {
        const scoreCard = document.createElement('div');
        scoreCard.className = 'score-card';

        // Extract team names from the logos or use explicit names for each team
        let team1 = "India"; // Assuming India is always team 1
        let team2;

        // Extract the opponent team's name based on the match details
        if (score.details.includes("Australia")) {
            team2 = "Australia";
        } else if (score.details.includes("England")) {
            team2 = "England";
        } else if (score.details.includes("South Africa")) {
            team2 = "South Africa";
        } else {
            team2 = "Unknown Team";
        }

        scoreCard.innerHTML = `
            <h3>
                <img src="${score.logos[0]}" alt="India Logo" class="team-logo" />
                ${team1}
                vs
                <img src="${score.logos[1]}" alt="${team2} Logo" class="team-logo" />
                ${team2}
            </h3>
            <div class="score-details">
                <strong>Score:</strong> ${score.score}
            </div>
        `;
        contentArea.appendChild(scoreCard);
    });
}
// Function to render referees data
function renderReferees() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    cricketData.referees.forEach(referee => {
        const refereeCard = document.createElement('div');
        refereeCard.className = 'referee-card';
        refereeCard.innerHTML = `
            <h3>${referee.name}</h3>
            <div class="referee-details">
                <div><strong>Role:</strong> ${referee.role}</div>
                <div><strong>Matches:</strong> ${referee.matches.join(', ')}</div>
            </div>
        `;
        contentArea.appendChild(refereeCard);
    });
}



// Update event listeners for navigation tabs
// Update event listeners for navigation tabs
document.querySelectorAll('.nav-tabs a').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.nav-tabs a.active').classList.remove('active');
        this.classList.add('active');

        const contentType = this.getAttribute('data-content');
        if (contentType === 'matches') {
            renderMatches();
        } else if (contentType === 'events') {
            renderEvents();
        } else if (contentType === 'players') {
            renderPlayers();
        } else if (contentType === 'teams') {
            renderTeams();
        } else if (contentType === 'scores') {
            renderScores();
        } else if (contentType === 'referees') {  // Add this condition
            renderReferees();
        }
    });
});


// Initial render
renderMatches();
