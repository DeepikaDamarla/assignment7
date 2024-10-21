const footballData = {
    matches: [
        {
            matchId: "match_1",
            teams: "Dallas Cowboys vs New York Giants",
            date: "25th September 2024",
            venue: "AT&T Stadium",
            status: "Upcoming",
            logos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc8wetZCMBL7-gRJk9xmHwcl8vhH_aviRMA&s", // Dallas Cowboys logo
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDOcKyXjSkGZlsduIAYiY0dAZqofYri4-og&s"  // New York Giants logo
            ],
            score: "N/A"
        },
        {
            matchId: "match_2",
            teams: "Kansas City Chiefs vs Green Bay Packers",
            date: "10th October 2024",
            venue: "Arrowhead Stadium",
            status: "Ongoing",
            logos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQribpQHYqzqm2xbNLBH5tEE1KR3AgIaND9yw&s", // Kansas City Chiefs logo
                "https://i.pinimg.com/736x/d5/7a/54/d57a54cca7dff86373efd98f1119eb6c.jpg"  // Green Bay Packers logo
            ],
            score: "14-7" // Example score
        },
        {
            matchId: "match_3",
            teams: "Los Angeles Rams vs San Francisco 49ers",
            date: "15th November 2024",
            venue: "SoFi Stadium",
            status: "Completed",
            logos: [
                "https://static.vecteezy.com/system/resources/previews/015/863/590/original/los-angeles-rams-logo-on-transparent-background-free-vector.jpg", // Los Angeles Rams logo
                "https://w0.peakpx.com/wallpaper/746/717/HD-wallpaper-san-francisco-49ers-logo-f5-art-logo-wide-screen-49ers-illustration-artwork-san-francisco.jpg"  // San Francisco 49ers logo
            ],
            score: "21-21" // Example score
        }
    ],
    events: [
        {
            eventId: "event_1",
            title: "NFL Super Bowl 2024",
            date: "11th February 2024",
            location: "State Farm Stadium"
        },
        {
            eventId: "event_2",
            title: "NFL Draft 2024",
            date: "27th April 2024",
            location: "Kansas City, MO"
        }
    ],
    players: [
        {
            playerId: "player_1",
            name: "Dak Prescott",
            role: "Quarterback",
            team: "Dallas Cowboys"
        },
        {
            playerId: "player_2",
            name: "Daniel Jones",
            role: "Quarterback",
            team: "New York Giants"
        },
        {
            playerId: "player_3",
            name: "Patrick Mahomes",
            role: "Quarterback",
            team: "Kansas City Chiefs"
        }
    ],
    scores: [
        {
            matchId: "match_1",
            score: "N/A",
            details: "Dallas Cowboys vs New York Giants - Upcoming Match",
            logos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc8wetZCMBL7-gRJk9xmHwcl8vhH_aviRMA&s", // Dallas Cowboys logo
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDOcKyXjSkGZlsduIAYiY0dAZqofYri4-og&s"  // New York Giants logo
            ]
        },
        {
            matchId: "match_2",
            score: "14-7",
            details: "Kansas City Chiefs vs Green Bay Packers - Ongoing Match",
            logos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQribpQHYqzqm2xbNLBH5tEE1KR3AgIaND9yw&s", // Kansas City Chiefs logo
                "https://i.pinimg.com/736x/d5/7a/54/d57a54cca7dff86373efd98f1119eb6c.jpg"  // Green Bay Packers logo
            ]
        },
        {
            matchId: "match_3",
            score: "21-21",
            details: "Los Angeles Rams vs San Francisco 49ers - Completed Match",
            logos: [
                "https://static.vecteezy.com/system/resources/previews/015/863/590/original/los-angeles-rams-logo-on-transparent-background-free-vector.jpg", // Los Angeles Rams logo
                "https://w0.peakpx.com/wallpaper/746/717/HD-wallpaper-san-francisco-49ers-logo-f5-art-logo-wide-screen-49ers-illustration-artwork-san-francisco.jpg"  // San Francisco 49ers logo
            ]
        }
    ],
    teams: [
        {
            teamId: "team_1",
            name: "Dallas Cowboys",
            captain: "Dak Prescott",
            coach: "Mike McCarthy",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc8wetZCMBL7-gRJk9xmHwcl8vhH_aviRMA&s" // Dallas Cowboys logo
        },
        {
            teamId: "team_2",
            name: "New York Giants",
            captain: "Daniel Jones",
            coach: "Brian Daboll",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDOcKyXjSkGZlsduIAYiY0dAZqofYri4-og&s" // New York Giants logo
        },
        {
            teamId: "team_3",
            name: "Kansas City Chiefs",
            captain: "Patrick Mahomes",
            coach: "Andy Reid",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQribpQHYqzqm2xbNLBH5tEE1KR3AgIaND9yw&s" // Kansas City Chiefs logo
        },
        {
            teamId: "team_4",
            name: "Green Bay Packers",
            captain: "Aaron Rodgers",
            coach: "Matt LaFleur",
            logo: "https://i.pinimg.com/736x/d5/7a/54/d57a54cca7dff86373efd98f1119eb6c.jpg" // Green Bay Packers logo
        },
        {
            teamId: "team_5",
            name: "Los Angeles Rams",
            captain: "Matthew Stafford",
            coach: "Sean McVay",
            logo: "https://static.vecteezy.com/system/resources/previews/015/863/590/original/los-angeles-rams-logo-on-transparent-background-free-vector.jpg" // Los Angeles Rams logo
        },
        {
            teamId: "team_6",
            name: "San Francisco 49ers",
            captain: "Jimmy Garoppolo",
            coach: "Kyle Shanahan",
            logo: "https://w0.peakpx.com/wallpaper/746/717/HD-wallpaper-san-francisco-49ers-logo-f5-art-logo-wide-screen-49ers-illustration-artwork-san-francisco.jpg" // San Francisco 49ers logo
        }
    ],
    referees: [
        {
            refereeId: "referee_1",
            name: "Kassim Abdallah",
            role: "Main Referee",
            matches: [
                "India vs England",
                "India vs Brazil"
            ]
        },
        {
            refereeId: "referee_2",
            name: "Fatma Samoura",
            role: "Main Referee",
            matches: [
                "India vs Brazil",
                "India vs Argentina"
            ]
        },
        {
            refereeId: "referee_3",
            name: "Mark Clattenburg",
            role: "Main Referee",
            matches: [
                "India vs England",
                "India vs Argentina"
            ]
        },
        {
            refereeId: "referee_4",
            name: "Anita Ghosh",
            role: "Assistant Referee",
            matches: [
                "India vs England"
            ]
        },
        {
            refereeId: "referee_5",
            name: "Sandeep Sharma",
            role: "Assistant Referee",
            matches: [
                "India vs Brazil"
            ]
        }
    ]
};

// Function to render matches data
function renderMatches() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content

    footballData.matches.forEach(match => {
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

    footballData.events.forEach(event => {
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

    footballData.players.forEach(player => {
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

    footballData.teams.forEach(team => {
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

    footballData.scores.forEach(score => {
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
    contentArea.innerHTML = ''; // Clear previous content if necessary

    const refereeCard = document.createElement('div');
    refereeCard.className = 'referee-card';
    refereeCard.innerHTML = `
        <h3>Referees</h3>
        <div class="referee-details">
            ${footballData.referees.map(referee => `
                <div class="referee">
                    <h4>${referee.name} (${referee.role})</h4>
                    <div><strong>Matches Officiated:</strong> ${referee.matches.join(', ')}</div>
                </div>
            `).join('')}
        </div>
    `;

    contentArea.appendChild(refereeCard);
}

function rendercountries() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Clear previous content if necessary
}
function fetchCountries() {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com',
      'x-rapidapi-key': 'c80318590emsh05cce04767b9ea1p17058ajsna54fa41dfb5c'
    }
  };

  fetch('https://free-api-live-football-data.p.rapidapi.com/football-all-countries', options)
    .then(response => response.json())
    .then(data => displayCountries(data.response.countries)) // Accessing countries array
    .catch(err => console.error(err));
}

function displayCountries(countries) {
  const contentArea = document.getElementById('contentArea');
  contentArea.innerHTML = ''; // Clear previous content if necessary

  countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');

    // Constructing the HTML to display country details
    countryDiv.innerHTML = `
      <h3>${country.name}</h3>
    `;

    contentArea.appendChild(countryDiv);
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
        } else if (contentType === 'referees'){
            renderReferees();
        } else if (contentType === 'countries')
        {
            fetchCountries();
        }

    });
});

// Initial render
renderMatches();
