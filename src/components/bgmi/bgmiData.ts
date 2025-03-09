
// Player data with added stats for BGMI
export const players = [
  { 
    id: "Sarang", 
    name: "Sarangajyoti Deka", 
    joinDate: "June 4, 2023", 
    birthDate: "September 7, 2002",
    age: "22", 
    nationality: "Indian",
    role: "Assaulter",
    stats: {
      "Kills": 189,
      "K/D Ratio": 2.8,
      "Damage": 27650,
      "Headshot %": "24.7%",
      "Survival Time": "410 min",
      "Revival": 56
    },
    notableMedia: ["This Might Be the Worst Podcast Ever (January 22, 2025)"],
    instagram: { handle: "txsarang", url: "https://www.instagram.com/txsarang" },
    youtube: { handle: "TX Sarang Jod", url: "https://youtube.com/@txsarangjod" },
    image: "/lovable-uploads/de19c27f-76bc-4cae-b0c5-0718375b0253.png" 
  },
  { 
    id: "SPRAYGOD", 
    name: "Harsh Malik", 
    joinDate: "November 10, 2023", 
    birthDate: "June 12, 2003",
    age: "21", 
    nationality: "Indian",
    role: "Fragger",
    stats: {
      "Kills": 176,
      "K/D Ratio": 2.6,
      "Damage": 25890,
      "Headshot %": "28.3%",
      "Survival Time": "385 min",
      "Revival": 42
    },
    notableMedia: ["THE DREAM - Team X Spark BGIS 24 CHAMPIONS Documentary (September 22, 2024)"],
    instagram: { handle: "tx_spraygod", url: "https://www.instagram.com/tx_spraygod" },
    youtube: { handle: "TXS Spraygod", url: "https://youtube.com/@TXSSpraygod" },
    image: "/lovable-uploads/e63e6426-7163-430b-8ab5-bbe3c26bd517.png" 
  },
  { 
    id: "Shadow7", 
    name: "Tenzin Kelsang", 
    joinDate: "February 22, 2024", 
    birthDate: "March 15, 2003",
    age: "21", 
    nationality: "Indian",
    role: "Support",
    stats: {
      "Kills": 168,
      "K/D Ratio": 2.5,
      "Damage": 24320,
      "Headshot %": "22.1%",
      "Survival Time": "422 min",
      "Revival": 63
    },
    notableMedia: [
      "Chronicle of our Crowning - Sparks of Glory (December 10, 2024)",
      "THE DREAM - Team X Spark BGIS 24 CHAMPIONS Documentary (September 22, 2024)",
      "This Might Be the Worst Podcast Ever (January 22, 2025)"
    ],
    image: "/lovable-uploads/7da80c8c-9ce3-4a75-ae9a-13d1d197456a.png" 
  },
  { 
    id: "Jokerr", 
    name: "Khush Singh", 
    joinDate: "August 19, 2024", 
    birthDate: "February 9, 2006",
    age: "19", 
    nationality: "Indian",
    role: "Flex",
    stats: {
      "Kills": 154,
      "K/D Ratio": 2.3,
      "Damage": 22740,
      "Headshot %": "25.6%",
      "Survival Time": "378 min",
      "Revival": 48
    },
    notableMedia: [
      "Chronicle of our Crowning - Sparks of Glory (December 10, 2024)",
      "This Might Be the Worst Podcast Ever (January 22, 2025)"
    ],
    instagram: { handle: "txjoker09", url: "https://www.instagram.com/txjoker09" },
    youtube: { handle: "TX Joker09", url: "https://youtube.com/@TXJoker09" },
    image: "/lovable-uploads/c0758d19-a010-417c-bb96-42e9eb868cd7.png" 
  },
  { 
    id: "Syed", 
    name: "-", 
    joinDate: "December 27, 2024", 
    nationality: "Indian",
    role: "TBD",
    stats: {
      "Kills": 142,
      "K/D Ratio": 2.1,
      "Damage": 20980,
      "Headshot %": "21.2%",
      "Survival Time": "365 min",
      "Revival": 52
    },
    image: "https://placehold.co/300x300/121212/AF4FFE?text=S&font=montserrat" 
  },
];

// Tournament data
export const tournaments = [
  {
    name: "BGMI Pro League 2025",
    dates: "Jan 15 - Mar 20, 2025",
    status: "Ongoing",
    currentStage: "Group Stage - Week 3",
    prizePool: "₹1,00,00,000 INR",
    format: "Round Robin + Finals",
    teams: "24",
    matches: [
      { opponent: "Team Soul", result: "Win", score: "WWLW" },
      { opponent: "GodLike Esports", result: "Win", score: "WLWW" },
      { opponent: "Enigma Gaming", result: "Loss", score: "LWLL" },
    ]
  },
  {
    name: "BGIS 2024",
    dates: "Nov 5 - Dec 20, 2024",
    status: "Completed",
    prizePool: "₹50,00,000 INR",
    format: "Group Stage + Knockout + Finals",
    teams: "32",
    placement: "1st",
    kills: 194,
    points: 278,
    highlights: "Dominated the grand finals with 3 chicken dinners out of 6 matches. Sarang was named MVP with 42 kills throughout the tournament.",
    matches: [
      { opponent: "Team Soul", result: "Win", score: "WWLW" },
      { opponent: "GodLike Esports", result: "Win", score: "WLWW" },
      { opponent: "TSM Entity", result: "Win", score: "WWWL" },
    ]
  },
  {
    name: "BMPS 2024 Season 2",
    dates: "Aug 10 - Sep 25, 2024",
    status: "Completed",
    prizePool: "₹35,00,000 INR",
    format: "League + Playoffs",
    teams: "20",
    placement: "1st",
    kills: 187,
    points: 265,
    highlights: "Consistent performance throughout with highest overall kills in the tournament. SPRAYGOD had an incredible 31-kill match against TSM Entity."
  },
  {
    name: "Skyesports Championship 2024",
    dates: "Jun 5 - Jul 12, 2024",
    status: "Completed",
    prizePool: "₹20,00,000 INR",
    format: "Double Elimination",
    teams: "16",
    placement: "2nd",
    kills: 178,
    points: 247,
    highlights: "Narrowly missed first place by just 3 points in an intense final against GodLike Esports."
  },
  {
    name: "ESL Snapdragon Pro Series Season 6",
    dates: "Dec 27, 2024 - Feb 2, 2025",
    status: "Completed",
    prizePool: "₹25,00,000 INR",
    format: "Group Stage + Playoffs",
    teams: "18",
    placement: "3rd",
    kills: 162,
    points: 231,
    highlights: "Strong showing in the group stage, but fell short in the playoffs. Shadow7 was the standout performer with consistent fragging."
  }
];

// Team overview data
export const teamOverview = {
  kills: 829,
  totalMatches: 62,
  winRate: "38%",
  avgPlacement: 2.4,
  avgKillsPerMatch: 13.4,
  topFragger: "Sarang (189 kills)",
  recentForm: "WWWLW",
};
