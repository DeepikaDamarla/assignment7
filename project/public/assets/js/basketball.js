const basketballData = {
    matches: [
        {
            matchId: "match_1",
            teams: "Lakers vs Warriors",
            date: "30th September 2024",
            venue: "Staples Center, Los Angeles",
            status: "Upcoming",
            logos: [
                "https://www.blogtalkradio.com/api/image/resize/400x297/aHR0cHM6Ly9kYXNnN3h3bWxkaXg2LmNsb3VkZnJvbnQubmV0L2hvc3RwaWNzL2E2Y2U5OWIzLWU1ZDgtNDVhZS1hN2MyLWYwMmM5OWE2Y2Q1YV9sbl9uZXdfbG9nby5qcGc/a6ce99b3-e5d8-45ae-a7c2-f02c99a6cd5a_ln_new_logo.jpg?mode=Fill",
                "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"
            ],
            score: "N/A"
        },
        {
            matchId: "match_2",
            teams: "Lakers vs Celtics",
            date: "10th October 2024",
            venue: "TD Garden, Boston",
            status: "Ongoing",
            logos: [
                "https://www.blogtalkradio.com/api/image/resize/400x297/aHR0cHM6Ly9kYXNnN3h3bWxkaXg2LmNsb3VkZnJvbnQubmV0L2hvc3RwaWNzL2E2Y2U5OWIzLWU1ZDgtNDVhZS1hN2MyLWYwMmM5OWE2Y2Q1YV9sbl9uZXdfbG9nby5qcGc/a6ce99b3-e5d8-45ae-a7c2-f02c99a6cd5a_ln_new_logo.jpg?mode=Fill",
                "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"
            ],
            score: "78-72 (3rd Quarter)"
        },
        {
            matchId: "match_3",
            teams: "Lakers vs Heat",
            date: "15th November 2024",
            venue: "American Airlines Arena, Miami",
            status: "Completed",
            logos: [
                "https://www.blogtalkradio.com/api/image/resize/400x297/aHR0cHM6Ly9kYXNnN3h3bWxkaXg2LmNsb3VkZnJvbnQubmV0L2hvc3RwaWNzL2E2Y2U5OWIzLWU1ZDgtNDVhZS1hN2MyLWYwMmM5OWE2Y2Q1YV9sbl9uZXdfbG9nby5qcGc/a6ce99b3-e5d8-45ae-a7c2-f02c99a6cd5a_ln_new_logo.jpg?mode=Fill",
                "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg"
            ],
            score: "Lakers: 102, Heat: 97"
        }
    ],
    events: [
        {
            eventId: "event_1",
            title: "NBA Finals 2024",
            date: "5th June 2024",
            location: "USA"
        },
        {
            eventId: "event_2",
            title: "NBA All-Star Game 2024",
            date: "18th February 2024",
            location: "Chicago"
        }
    ],
    players: [
        {
            playerId: "player_1",
            name: "LeBron James",
            role: "Forward",
            team: "Lakers"
        },
        {
            playerId: "player_2",
            name: "Stephen Curry",
            role: "Guard",
            team: "Warriors"
        },
        {
            playerId: "player_3",
            name: "Jimmy Butler",
            role: "Forward",
            team: "Heat"
        }
    ],
    scores: [
        {
            matchId: "match_1",
            score: "N/A",
            details: "Lakers vs Warriors - Upcoming Match",
            logos: [
                "https://www.blogtalkradio.com/api/image/resize/400x297/aHR0cHM6Ly9kYXNnN3h3bWxkaXg2LmNsb3VkZnJvbnQubmV0L2hvc3RwaWNzL2E2Y2U5OWIzLWU1ZDgtNDVhZS1hN2MyLWYwMmM5OWE2Y2Q1YV9sbl9uZXdfbG9nby5qcGc/a6ce99b3-e5d8-45ae-a7c2-f02c99a6cd5a_ln_new_logo.jpg?mode=Fill",
                "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"
            ]
        },
        {
            matchId: "match_2",
            score: "78-72 (3rd Quarter)",
            details: "Lakers vs Celtics - Ongoing Match",
            logos: [
                "https://www.blogtalkradio.com/api/image/resize/400x297/aHR0cHM6Ly9kYXNnN3h3bWxkaXg2LmNsb3VkZnJvbnQubmV0L2hvc3RwaWNzL2E2Y2U5OWIzLWU1ZDgtNDVhZS1hN2MyLWYwMmM5OWE2Y2Q1YV9sbl9uZXdfbG9nby5qcGc/a6ce99b3-e5d8-45ae-a7c2-f02c99a6cd5a_ln_new_logo.jpg?mode=Fill",
                "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"
            ]
        },
        {
            matchId: "match_3",
            score: "Lakers: 102, Heat: 97",
            details: "Lakers vs Heat - Completed Match",
            logos: [
                "https://www.blogtalkradio.com/api/image/resize/400x297/aHR0cHM6Ly9kYXNnN3h3bWxkaXg2LmNsb3VkZnJvbnQubmV0L2hvc3RwaWNzL2E2Y2U5OWIzLWU1ZDgtNDVhZS1hN2MyLWYwMmM5OWE2Y2Q1YV9sbl9uZXdfbG9nby5qcGc/a6ce99b3-e5d8-45ae-a7c2-f02c99a6cd5a_ln_new_logo.jpg?mode=Fill",
                "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg"
            ]
        }
    ],
    teams: [
        {
            teamId: "team_1",
            name: "Lakers",
            captain: "LeBron James",
            coach: "Darvin Ham",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/03/Los_Angeles_Lakers_logo.svg"
        },
        {
            teamId: "team_2",
            name: "Warriors",
            captain: "Stephen Curry",
            coach: "Steve Kerr",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"
        },
        {
            teamId: "team_3",
            name: "Celtics",
            captain: "Jayson Tatum",
            coach: "Joe Mazzulla",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"
        }
    ],
    referees: [
        {
            name: "John Doe",
            role: "Head Referee",
            matches: ["Lakers vs Warriors"]
        },
        {
            name: "Jane Smith",
            role: "Assistant Referee",
            matches: ["Celitics vs Warriors"]
        }
    ]
};

// Rendering functions
function renderMatches() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    basketballData.matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <h3>
                <img src="${match.logos[0]}" alt="Team 1 Logo" class="team-logo" />
                ${match.teams.split('vs')[0].trim()}
                vs
                <img src="${match.logos[1]}" alt="Team 2 Logo" class="team-logo" />
                ${match.teams.split('vs')[1].trim()}
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

function renderEvents() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    basketballData.events.forEach(event => {
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

function renderPlayers() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    basketballData.players.forEach(player => {
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

function renderTeams() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    basketballData.teams.forEach(team => {
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

function renderScores() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    basketballData.scores.forEach(score => {
        const scoreCard = document.createElement('div');
        scoreCard.className = 'score-card';
        scoreCard.innerHTML = `
            <h3>
                <img src="${score.logos[0]}" alt="Team 1 Logo" class="team-logo" />
                ${score.details.split(' - ')[0].split('vs')[0].trim()}
                vs
                <img src="${score.logos[1]}" alt="Team 2 Logo" class="team-logo" />
                ${score.details.split(' - ')[0].split('vs')[1].trim()}
            </h3>
            <div class="score-details">
                <strong>Score:</strong> ${score.score}
                <div><strong>Details:</strong> ${score.details}</div>
            </div>
        `;
        contentArea.appendChild(scoreCard);
    });
}
function renderReferees() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    const refereeCard = document.createElement('div');
    refereeCard.className = 'referee-card';
    refereeCard.innerHTML = `
        <h3>Referees</h3>
        <div class="referee-details">
            ${basketballData.referees.map(referee => `
                <div class="referee">
                    <h4>${referee.name} (${referee.role})</h4>
                    <div><strong>Matches Officiated:</strong> ${referee.matches.join(', ')}</div>
                </div>
            `).join('')}
        </div>
    `;

    contentArea.appendChild(refereeCard);
}


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
        } else if (contentType === 'referees') { // Add this line
            renderReferees(); // Call the new render function
        }
    });
});


// Initial render
renderMatches();
