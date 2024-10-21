const badmintonData = {
    matches: [
        {
            matchId: "match_1",
            teams: "Indonesia vs Malaysia",
            date: "25th September 2024",
            venue: "Istora Senayan, Jakarta",
            status: "Upcoming",
            logos: [
                "https://cdn.vectorstock.com/i/500p/09/37/indonesia-symbol-garuda-vector-51700937.jpg", // Indonesia logo
                "https://img.freepik.com/free-vector/illustration-malaysia-flag_53876-27133.jpg"  // Malaysia logo
            ],
            score: "N/A"
        
        },
        {
            matchId: "match_2",
            teams: "China vs Japan",
            date: "10th October 2024",
            venue: "Tokyo Metropolitan Gymnasium",
            status: "Ongoing",
            logos: [
                "https://static.cdnlogo.com/logos/c/39/china-flag.svg", // China logo
                "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"  // Japan logo
            ],
            score: "2-1" // Example score
        },
        {
            matchId: "match_3",
            teams: "India vs South Korea",
            date: "15th November 2024",
            venue: "Indira Gandhi Indoor Stadium, New Delhi",
            status: "Completed",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", // India logo
                "https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg"  // South Korea logo
            ],
            score: "3-2" // Example score
        }
    ],
    events: [
        {
            eventId: "event_1",
            title: "Badminton World Championships 2024",
            date: "21st August 2024",
            location: "Copenhagen, Denmark"
        },
        {
            eventId: "event_2",
            title: "Tokyo 2024 Olympics",
            date: "24th July 2024",
            location: "Tokyo, Japan"
        }
    ],
    players: [
        {
            playerId: "player_1",
            name: "Kento Momota",
            role: "Men's Singles",
            team: "Japan"
        },
        {
            playerId: "player_2",
            name: "PV Sindhu",
            role: "Women's Singles",
            team: "India"
        },
        {
            playerId: "player_3",
            name: "Lee Zii Jia",
            role: "Men's Singles",
            team: "Malaysia"
        }
    ],
    scores: [
        {
            matchId: "match_1",
            score: "N/A",
            details: "Indonesia vs Malaysia - Upcoming Match",
            logos: [
                "https://cdn.vectorstock.com/i/500p/09/37/indonesia-symbol-garuda-vector-51700937.jpg", // Indonesia logo
                "https://img.freepik.com/free-vector/illustration-malaysia-flag_53876-27133.jpg"  // Malaysia logo
            ]
        },
        {
            matchId: "match_2",
            score: "2-1",
            details: "China vs Japan - Ongoing Match",
            logos: [
                "https://static.cdnlogo.com/logos/c/39/china-flag.svg", // China logo
                "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"  // Japan logo
            ]
        },
        {
            matchId: "match_3",
            score: "3-2",
            details: "India vs South Korea - Completed Match",
            logos: [
                "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", // India logo
                "https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg"  // South Korea logo
            ]
        }
    ],
    teams: [
        {
            teamId: "team_1",
            name: "Indonesia",
            captain: "Hendra Setiawan",
            coach: "Flandy Limpele",
            logo: "https://cdn.vectorstock.com/i/500p/09/37/indonesia-symbol-garuda-vector-51700937.jpg" // Indonesia logo
        },
        {
            teamId: "team_2",
            name: "Malaysia",
            captain: "Lee Chong Wei",
            coach: "Misbun Sidek",
            logo: "https://img.freepik.com/free-vector/illustration-malaysia-flag_53876-27133.jpg" // Malaysia logo
        },
        {
            teamId: "team_3",
            name: "China",
            captain: "Chen Long",
            coach: "Li Yongbo",
            logo: "https://static.cdnlogo.com/logos/c/39/china-flag.svg" // China logo
        },
        {
            teamId: "team_4",
            name: "Japan",
            captain: "Kento Momota",
            coach: "Park Tae-sang",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png" // Japan logo
        },
        {
            teamId: "team_5",
            name: "India",
            captain: "PV Sindhu",
            coach: "Pullela Gopichand",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" // India logo
        },
        {
            teamId: "team_6",
            name: "South Korea",
            captain: "Son Wan-ho",
            coach: "Kim Hak-kyun",
            logo: "https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg" // South Korea logo
        }
    ],
    referees: [
        {
            refereeId: "referee_1",
            name: "Ravi Kumar",
            country: "India",
            matchesOfficiated: 100,
            upcomingMatch: "India vs South Korea"
        },
        {
            refereeId: "referee_2",
            name: "Miyuki Tanaka",
            country: "Japan",
            matchesOfficiated: 80,
            upcomingMatch: "China vs Japan"
        },
        {
            refereeId: "referee_3",
            name: "Johan van der Meer",
            country: "Netherlands",
            matchesOfficiated: 50,
            upcomingMatch: "Indonesia vs Malaysia"
        }
    ]
    
};

// Function to render matches data
function renderMatches() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    badmintonData.matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <h3>
                <img src="${match.logos[0]}" alt="${match.teams.split(" vs ")[0]} Logo" class="team-logo" />
                ${match.teams.split(" vs ")[0]}
                vs
                <img src="${match.logos[1]}" alt="${match.teams.split(" vs ")[1]} Logo" class="team-logo" />
                ${match.teams.split(" vs ")[1]}
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

    badmintonData.events.forEach(event => {
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

    badmintonData.players.forEach(player => {
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

    badmintonData.teams.forEach(team => {
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

    badmintonData.scores.forEach(score => {
        const scoreCard = document.createElement('div');
        scoreCard.className = 'score-card';
        
        // Extract team names from the details
        let team1 = score.details.split(" vs ")[0];
        let team2 = score.details.split(" vs ")[1].split(" - ")[0]; // Get the opponent team

        scoreCard.innerHTML = `
            <h3>
                <img src="${score.logos[0]}" alt="${team1} Logo" class="team-logo" />
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

    badmintonData.referees.forEach(referee => {
        const refereeCard = document.createElement('div');
        refereeCard.className = 'referee-card';
        refereeCard.innerHTML = `
            <h3>${referee.name}</h3>
            <div class="referee-details">
                <div><strong>Country:</strong> ${referee.country}</div>
                <div><strong>Matches Officiated:</strong> ${referee.matchesOfficiated}</div>
                <div><strong>Upcoming Match:</strong> ${referee.upcomingMatch}</div>
            </div>
        `;
        contentArea.appendChild(refereeCard);
    });
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
        }else if(contentType ==='referees'){
            renderReferees()
        }
    });
});

// Initial render
renderMatches();
