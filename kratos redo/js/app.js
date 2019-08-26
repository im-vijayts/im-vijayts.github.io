var height = 0;
var eventItemContent = document.querySelectorAll('.events_item_content');

eventItemContent.forEach(function(item) {
  var num = parseInt(window.getComputedStyle(item).getPropertyValue('height'));
  if(num > height) {
    height = num;
  }
});

eventItemContent.forEach(function(item) {
  item.style.height = height + 'px';
});

let eventItem = document.querySelectorAll('.event_item');

var events = [
  
  // Start: Technical Events
  {
    title: 'Paper Presentation',
    time: '10.00 AM',
    description: 'Have you got the novel idea of the era? Do you believe that your bleeding-edge concept could be the next breakthrough innovation? Then come present a paper if your expertise aligns with any of the following domains and stand proud as you shoot down the volley of queries afterwards.',
    rules: [
      'A maximum size of 3 members is allowed per team.',
      'Each team will get 8 mins for the presentation followed by 2 mins of Q&A session',
      'Selected candidates should bring a hard copy of their paper and a loaded pendrive with PPT slides (maximum 12 slides)',
      'The work must be original. Plagiarism will be monitored seriously',
      'Papers should adhere to Standard two-column IEEE Format',
      'Deadline for Submitting your papers is 10th February 2019. Papers sent after this will not be considered for evaluation',
      'Papers should be submitted to papers@kratos19.com',
    ],
    topics: [
      'Emerging Trends in Computer science',
      'Bio Inspired Computing',
      'Swarm and Evolutionary Computation',
      'Multimedia Engineering',
      'Pattern Recognition',
      'Text, Speech, Image and Video Processing',
      'Web Navigation and Mining',
      'Deep Learning in Image Processing, NLP, and Speech Processing',
      'Semantics and Ontology Engineering',
      'Soft Computing',
      'Genetic and Randomized Algorithms',
      'Restricted Boltzmann Machine',
      'Computational Perception and Cognition',
      'Fuzzy Systems',
    ],
    eventPosterBackground: '../images/technical/paper-presentation.jpg',
    eventContact: [
      '<a href="tel:+919677236252"><span class="event_desc_contact_name">Naveen Nanda</span> <span class="event_desc_contact_num">+91 967 723 6252</span></a>',
      '<a href="tel:‭+918939592136"><span class="event_desc_contact_name">Priyadharshni R </span> <span class="event_desc_contact_num">‭+91 893 959 2136</span></a>',
      
    ],
  },
  {
    title: 'Clash of Codes',
    time: '10.00 AM',
    description: 'Comrades! It’s a Win or Die Combat!',
    rules: [
      'Each team might contain a minimum of 2 participants and a maximum of 3 participants (Bring it on!)',
      'The event consists of two rounds which will be revealed on the spot (Predictions won’t work in the battlefield, Mate!)',
      'Coding of the scenarios should be done only in Java or C (And that’s your mighty weapon!)',
      'Participants caught cheating or copying codes online will be disqualified from the event immediately (Gun-point!)',
      'Round 1: 1 hour [Elimination Round]',
      'Round 2: 30 mins',
    ],
    eventPosterBackground: '../images/technical/clash-of-codes.jpg',
    eventContact: [
      '<a href="tel:‭+919445940272‬‬‬‬‬"><span class="event_desc_contact_name">Ram Subramaniyam</span> <span class="event_desc_contact_num">+91 944 594 0272</span></a>',
      '<a href="tel:+‭+919042569734‬‬‬‬‬"><span class="event_desc_contact_name">Shriya Suresh</span> <span class="event_desc_contact_num">‭‭+91 904 256 9734‬‬‬‬‬</span></a>',
    ],
  },
  {
    title: 'Tech Treasure Hunt',
    time: '10.00 AM',
    description: 'Observant or Intriguer?  Utopian or Cynic? Super Sleuth or a Police detective? You could be all of these or any of these! Or maybe you could be the Sherlock Holmes or Hercule Poirot or Miss Marple! But you can’t get here unless you’re a Code Wizard! ',
    rules: [
      'Each team might contain a minimum of 2 participants and a maximum of 3 participants',
      'At Least one of them should have an Android phone',
      'Round 1: Pen Paper Based Test [Elimination Round]',
      'Round 2: Treasure Hunt',
    ],
    eventPosterBackground: '../images/technical/treasure-hunt.jpg',
    eventContact: [
      '<a href="tel:+919500067963‬‬‬‬‬"><span class="event_desc_contact_name">Sundari H</span> <span class="event_desc_contact_num">+91 950 006 7963‬‬‬‬‬</span></a>',
    ],
  },
  {
    title: 'Deadlocked DB',
    time: '10.00 AM',
    description: 'Turn the tables to your side! Hope you know which ‘TABLE’ we are talking about!',
    rules: [
      'Each team might contain 2 participants',
      'There are two Database-Querying based rounds in the event',
      'Participants should use the system provided by us, and Mobile phones aren’t allowed',
      'Participants caught cheating will be disqualified from the event immediately',
      'Round 1: Pen and paper Test | 20 questions | 30mins [Elimination Round]',
      'Round 2: Computer Based Test | 1 Scenario-Based Question to be solved using Database | 40mins',
    ],
    eventPosterBackground: '../images/technical/deadlocked-db.jpg',
    eventContact: [
      '<a href="tel:‭+918220139457‬‬‬‬‬"><span class="event_desc_contact_name">Vishnu Priya R</span> <span class="event_desc_contact_num">‭+91 822 013 9457‬‬‬‬‬</span></a>',
      '<a href="tel:‭+919840363615‬‬‬‬‬"><span class="event_desc_contact_name">Surya E</span> <span class="event_desc_contact_num">‭+91 984 036 3615‬‬‬‬‬</span></a>',
    ],
  },
  {
    title: 'Google It',
    time: '10.00 AM',
    description: 'I’ll make him an offer he can’t refuse!…………… “Google IT!”',
    rules: [
      'Each team might contain 2 participants',
      'There are two rounds with ten questions in each',
      'Participants should use the system provided by us','Mobile phones aren’t allowed',
      'Answers are to be given in a single word (It applies to hyphenated words as well, EG. High-tech as hightech)',
      'Round 1: 20 minutes [Elimination Round]',
      'Round 2: Each question should be attempted within a minute. A total of 15 attempts are given for 10 questions',
    ],
    eventPosterBackground: '../images/technical/google-it.jpg',
    eventContact: [
      '<a href="tel:‭+917502299775"><span class="event_desc_contact_name">Rishi Kumar</span> <span class="event_desc_contact_num">‭+91 750 229 9775</span></a>',
    ],
  },
  {
    title: 'Gadgets and Gizmos',
    time: '10.00 AM',
    description: '“Business Savvy, Street Smart!”',
    rules: [
      'Strictly individual participation',
      'Participant will be provided a list of categories and upon selecting one, the specific product will be provided on the spot',
      'Participant will have preparation time to decide the content and the major review point',
      'After which, a presentation time will be given to provide a review and subsequently, a recommendation for said product',
      'Points system will be based on knowledge of the product, clarity and construction of the review and overall flare',
      'Round 1: A set of products with 10 mins Preparation time and 5 mins Review time [Elimination Round]',
      'Round 2: Different set of product with 5 mins Preparation time and 2 mins Review time',
    ],
    eventPosterBackground: '../images/technical/gadget-and-gizmos.jpg',
    eventContact: [
      '<a href="tel:‭+919566012536‬‬‬‬"><span class="event_desc_contact_name">Nithin R</span> <span class="event_desc_contact_num">‭+91 956 601 2536‬‬‬‬</span></a>',
    ],
  },

  // Start: Non-Technical Events
  {
    title: 'Murder in Multiplayer',
    time: '10.00 AM',
    description: 'There’s murder and mystery in the air, innocent blood has been spilled and fear hath gripped the heart of the college-men. So hurry up, young detectives, Grab your Belsatffs and polish those magnifying glasses and harness your mind palaces, this case is about to take you for a spin. “The game, dear Detective, is on!”',
    rules: [
      'Each Team can contain a minimum of one person to a maximum of 3',
      'Round 1: Pen and Paper round comprising of mystery themed puzzles [Elimination round]',
      'The theories provided will be evaluated and the most suitable ones will get shortlisted for the next round',
      'Round 2: Solve a case around the campus using a sequence of clues',
    ],
    eventPosterBackground: '../images/non-technical/murder-in-multiplayer.jpg',
    eventContact: [
      '<a href="tel:+91‭8072637416‬‬‬‬‬"><span class="event_desc_contact_name">Sumalatha</span> <span class="event_desc_contact_num">+91 ‭807 263 7416</span></a>',
      '<a href="tel:+91‭8072637416"><span class="event_desc_contact_name">Vinitha</span> <span class="event_desc_contact_num">+91 ‭807 263 7416</span></a>',
      '<a href="tel:+919566701230"><span class="event_desc_contact_name">Sandhya</span> <span class="event_desc_contact_num">+91 956 670 1230</span></a>',
    ],
  },
  {
    title: 'Prison Break',
    time: '10.00 AM',
    description: 'Are you the type that elaborately plans your class bunking escapades, the type that loves heist movies, does the fear of being caught give you the thrills? If yes, then surely this is the prison for you. Race against time and flex those brains and brawns to untangle your way to freedom',
    rules: [
      'Each team must comprise of 3 people',
      'Round 1: Pen and Paper round [Elimination Round]',
      'Round 2: Break from a dark room prison cell by cracking a series of clues',
    ],
    eventPosterBackground: '../images/non-technical/prison-break.jpg',
    eventContact: [
      '<a href="tel:‭+919176445873‬‬‬‬"><span class="event_desc_contact_name">Sowmya Kannan </span> <span class="event_desc_contact_num">‭+91 917 644 5873‬‬‬‬</span></a>',
      '<a href="tel:‬‭+919600132370‬‬‬‬‬‬‬‬‬"><span class="event_desc_contact_name">Oviyaa Balamurugan</span> <span class="event_desc_contact_num">‬‭+91 960 013 2370‬‬‬‬‬</span></a>',
    ],
  },
  {
    title: 'Pitch Impossible',
    time: '10.00 AM',
    description: 'Can you talk the talk? Do you have what it takes to sell a lamp to a genie? Step up, as we shine the light on you, sharpen those wits and polish that silver tongue and pitch your heart out',
    rules: [
      'Each participant for their own',
      'The participant will have to choose from randomly from a variety of products and pitch',
      'Elimination rounds maybe included based on the turnout',
    ],
    eventPosterBackground: '../images/non-technical/pitch-impossible.jpg',
    eventContact: [
      '<a href="tel:‭+919600129934‬‬‬‬‬"><span class="event_desc_contact_name">Thilak R</span> <span class="event_desc_contact_num">‭+91 960 012 9934‬‬‬‬‬</span></a>',
      '<a href="tel:‭‭+919940171357‬‬‬‬‬‬‬‬‬‬"><span class="event_desc_contact_name">Siddharth</span> <span class="event_desc_contact_num">‭‭+91 994 017 1357‬‬‬‬‬‬‬‬‬‬</span></a>',
    ],
  },
  {
    title: 'Comic Quiz',
    time: '10.00 AM',
    description: 'Delve into your knowledge of the comic-verse, let the minds of the DC and the Marvel fanatics unite for the battle against the supreme evil force, The Quizzanator. Just remember, knowledge of the comics should be perfectly balanced, as all things should be.',
    rules: [
      'Each team must comprise of 2 people',
      'Round 1: Pen and Paper [Elimination round]',
      'Round 2: Rapid fire quiz',
    ],
    eventPosterBackground: '../images/non-technical/comic-quiz.jpg',
    eventContact: [
      '<a href="tel:‭+919789934434‬‬‬‬‬"><span class="event_desc_contact_name">Poornima K</span> <span class="event_desc_contact_num">‭+91 978 993 4434‬‬‬‬‬</span></a>',
      '<a href="tel:‭‭+918883357024‬‬‬‬‬"><span class="event_desc_contact_name">Vishnuvardhan</span> <span class="event_desc_contact_num">‭‭+91 888 335 7024‬‬‬‬‬</span></a>',
    ],
  },
  {
    title: 'Box Cricket & Futsal',
    time: '10.00 AM',
    description: 'Fancy a game of Cricket,chaps? Or can we interest you in a friendly football game?',
    rules: [
      'Box Cricket Rules <br> - 4 players in one team <br> - Each match will be of 3 overs<br> - Each bowler can bowl only 1 over<br> - Batting/ Bowling rules and modes of dismissal will be disclosed on the day of the event',
      'Futsal rules <br> - Time: 5 + 2 + 5 minutes <br> - In case of a draw, penalties will be held <br> - Knockout tournament standards',
    ],
    eventPosterBackground: '../images/non-technical/futsal-and-box-cricket.jpg',
    eventContact: [
      '<a href="tel:+918939515605"><span class="event_desc_contact_name">Akshay</span> <span class="event_desc_contact_num">+91 893 951 5605</span></a>',
      '<a href="tel:+919789074499"><span class="event_desc_contact_name">Akash</span> <span class="event_desc_contact_num">+91 978 907 4499</span></a>',
      '<a href="tel:+917358623498"><span class="event_desc_contact_name">Jawahar</span> <span class="event_desc_contact_num">+91 735 862 3498</span></a>',
    ],
  },
  {
    title: 'Gaming',
    time: '10.00 AM',
    description: 'Calling all avid gamers in the region to the battlefield! Dust off your joystick , brush up your cheat codes and lets play!',
    rules: [
      'Two games: Call of Duty and FIFA',
      '[FIFA] Each player plays 5 mins per half',
      '[FIFA] Both injury and offside goal will be turned on during the play',
      '[FIFA] If the game ends in a tie, the match goes into extra time and the winner moves on to the next round',
      '[COD] The team with the maximum number of kills is the winner and moves on to the next round',
    ],
    eventPosterBackground: '../images/non-technical/gaming.jpg',
    eventContact: [
      '<a href="tel:‭+918870888544‬‬‬‬‬"><span class="event_desc_contact_name">Praveen Kumar</span> <span class="event_desc_contact_num">‭+91 887 088 8544‬‬‬‬‬</span></a>',
      '<a href="tel:+‭919791173130‬‬‬‬‬"><span class="event_desc_contact_name">Sunil Rajan</span> <span class="event_desc_contact_num">‭+91 979 117 3130‬‬‬‬‬</span></a>',
    ],
  },

  // Start: Online Events
  {
    title: 'Signature Meme Contest',
    time: '10.00 AM',
    description: '“Meme a meme? or Meme a maker? But surely meme a meme-maker”',
    rules: [
      'All memes must be created under the theme “Life of Meme Creators”',
      '#Kratos2k19 watermark should be present in all the memes',
      'Memes should be sent to our official Kratos Facebook page or Instagram page',
      'One participant can send 3 memes at the maximum',
      'Inappropriate memes might be disqualified without prior notification',
      'Memes should not offend any individual or an organization or the government',
      'Winners will be announced on the 13th February, 2019',
      'The winners will be judged based on the reach in social media (no of likes, comments, shares, in both instagram and facebook)  and our critics’ decision',
    ],
    eventPosterBackground: '../images/online/signature-meme.jpg',
    eventContact: [
      '<a href="https://www.instagram.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Instagram</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
      '<a href="https://www.facebook.com/Kratos2k19/" target="_blank"><span class="event_desc_contact_name">Facebook</span> <span class="event_desc_contact_num">Kratos2k19</span></a>',
      '<a href="https://twitter.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Twitter</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
    ],
  },
  {
    title: 'Picturesque',
    time: '10.00 AM',
    description: '“Bring out the colors of life, which eyes haven\'t seen, but lens sure have!”',
    rules: [
      'Theme for the photography contest is “Colors of Life”',
      'Photographs should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your photographs is 10th February, 2019',
      'A participant can send upto 3 photographs',
      'The photograph should be the participant’s own creation',
      'Plagiarised pictures will be monitored seriously and will be disqualified without notification',
      'Winners will be announced on the 13th February, 2019',
      'The winners will be judged based on the reach in social media (no of likes, comments, shares, in both instagram and facebook)  and our critics’ decision',
    ],
    eventPosterBackground: '../images/online/picturesque.jpg',
    eventContact: [
      '<a href="https://www.instagram.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Instagram</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
      '<a href="https://www.facebook.com/Kratos2k19/" target="_blank"><span class="event_desc_contact_name">Facebook</span> <span class="event_desc_contact_num">Kratos2k19</span></a>',
      '<a href="https://twitter.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Twitter</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
    ],
  },
  {
    title: 'Lights Camera Action!',
    time: '10.00 AM',
    description: '“For the OCD - Obsessive Cinema Disorder”',
    rules: [
      'Films should be posted in YouTube and a short film poster mentioning "Submitted for Kratos2k19" and a screenshot of your posted video along with its link should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your work is 10th February, 2019',
      'Multiple entries from the same participant is allowed!',
      'The short film should be the participant\'s own creation',
      'Winners will be announced on the 13th February, 2019',
      'Core content, acting, cinematography skills and the efficiency of rendering will all be considered while scoring',
      'The winners will be judged based on our critics’ decision and the reach in social media (no of likes, comments, and shares) - Maximum points goes to critic\'s decision in this event and minimum to Social Media Reach',
      'Time Limit: 15 minutes'
    ],
    eventPosterBackground: '../images/online/lights-camera-action.jpg',
    eventContact: [
      '<a href="https://www.instagram.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Instagram</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
      '<a href="https://www.facebook.com/Kratos2k19/" target="_blank"><span class="event_desc_contact_name">Facebook</span> <span class="event_desc_contact_num">Kratos2k19</span></a>',
      '<a href="https://twitter.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Twitter</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
    ],
  },
  {
    title: 'Drama Maxx',
    time: '10.00 AM',
    description: '“Put your acting skills on point, and make it Drama Maxx”',
    rules: [
      'Videos should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your video is 10th February, 2019',
      'A participant can send only one entry',
      'The Video must contain the participant in it',
      'Winners will be announced on 13th February, 2019',
      'Core content and acting will all be considered while scoring',
      'The winners will be judged based on our critics’ decision and the reach in social media (no of likes, comments, shares, in both instagram and facebook)',
    ],
    eventPosterBackground: '../images/online/drama-maxx.jpg',
    eventContact: [
      '<a href="https://www.instagram.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Instagram</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
      '<a href="https://www.facebook.com/Kratos2k19/" target="_blank"><span class="event_desc_contact_name">Facebook</span> <span class="event_desc_contact_num">Kratos2k19</span></a>',
      '<a href="https://twitter.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Twitter</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
    ],
  },
  {
    title: 'Gamify Kratos',
    time: '10.00 AM',
    description: '“Abracadabra needn\'t be your magic spell, but change this piece of paper into a piece of art!”',
    rules: [
      'Theme for the Poster Designing contest is “Gaming addiction”',
      'Use the theme to design a poster holding the words “KRATOS 2K19” as the content',
      'Posters should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your entry is 10th February, 2019',
      'A participant can send only one entry',
      'The poster should be the participant’s own creation and plagiarized ones will be disqualified without notification',
      'Winners will be announced on 13th February, 2019',
      'The winners will be judged based on our critics’ decision (Tip: Score more with your creativity) and the reach in social media. (no of likes, comments, shares, in both instagram and facebook)',
    ],
    eventPosterBackground: '../images/online/gamify-kratos.jpg',
    eventContact: [
      '<a href="https://www.instagram.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Instagram</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
      '<a href="https://www.facebook.com/Kratos2k19/" target="_blank"><span class="event_desc_contact_name">Facebook</span> <span class="event_desc_contact_num">Kratos2k19</span></a>',
      '<a href="https://twitter.com/kratos2k19/" target="_blank"><span class="event_desc_contact_name">Twitter</span> <span class="event_desc_contact_num">kratos2k19</span></a>',
    ],
  },
]

var currentlyClicked = [];
for(var i = 0; i < eventItem.length; i++) {
  eventItem[i].addEventListener('click', (function(i) {
    return function() {
      currentlyClicked = [window.pageXOffset, window.pageYOffset];
      if(i === 0) {
        var eventTopics = document.getElementById('event_desc_topics');
        var eventTopicHeading = document.getElementById('event_topics_heading');
        events[i].topics.forEach(function(topic) {
          var topicList = document.createElement('li');
          topicList.innerHTML = topic;
          eventTopics.appendChild(topicList);
        });
        eventTopics.style.display = "block";
        eventTopicHeading.style.display = "block";
        document.getElementsByClassName('event_sub_title_p')[0].style.display = "block";
      } else {
        var eventTopics = document.getElementById('event_desc_topics');
        var eventTopicHeading = document.getElementById('event_topics_heading');
        eventTopics.style.display = "none";
        eventTopicHeading.style.display = "none";
        document.getElementsByClassName('event_sub_title_p')[0].style.display = "none";
      }
      var eventDescription = document.getElementById('event_description');
      eventDescription.style.background = 'linear-gradient(180deg, rgba(0,0,0,.8), rgba(85, 29, 252, .9), rgba(85, 29, 252, .9)) center center / cover, url(' + events[i].eventPosterBackground +')';
      eventDescription.style.backgroundSize = 'cover';
      eventDescription.style.backgroundPosition = 'center';
      eventDescription.setAttribute('aria-hidden', false);
      eventDescription.scrollTop = 1;
      eventDescription.scrollTo(0, 0);
      document.body.classList.toggle('noscroll');
      document.getElementById('event_desc_title').innerHTML = events[i].title;
      // document.getElementById('event_desc_time').innerHTML = events[i].time;
      document.getElementById('event_desc_desc').innerHTML = events[i].description;
      document.getElementById('event_desc_rules').innerHTML = '';
      document.getElementById('event_contact').innerHTML = '';
      events[i].rules.forEach(function(rule) {
        var rulesList = document.createElement('li');
        rulesList.innerHTML = rule;
        document.getElementById('event_desc_rules').appendChild(rulesList);
      });

      events[i].eventContact.forEach(function(contact) {
        var contactList = document.createElement('li');
        contactList.innerHTML = contact;
        document.getElementById('event_contact').appendChild(contactList);
      });
      eventDescription.scrollIntoView();
      // document.getElementById('event_head_name').innerHTML = events[i].eventHead;
      // document.getElementById('event_head_phone').innerHTML = events[i].eventHeadMobile;
    }
  })(i));
}

function close(e) {
  e.preventDefault();
  e.stopPropagation();
  var eventDescription = document.getElementById('event_description');
  eventDescription.setAttribute('aria-hidden', true);
  document.body.classList.toggle('noscroll');
  window.scrollTo(currentlyClicked[0], currentlyClicked[1]);
}

document.addEventListener('keyup', function(e) {
  var eventDescription = document.getElementById('event_description');
  if(e.keyCode === 27 && eventDescription.getAttribute('aria-hidden') === "false") {
    close(e);
  }
})

document.getElementById('event_desc_close').addEventListener('click', function(e) {
  close(e);
})