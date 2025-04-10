const characters = [
    {
        name: "Peter Parker",
        series: "Spider-Man",
        traits: ["awkward", "secret identity", "superhero"],
        quote: "I really did try to help you. I mean, I could've killed you. At any given moment, but I didn't. Because my Aunt May taught me that everyone deserves a second chance.",
        image: "images/peter.jpg"
    },

    {
        name: "Matt Murdock",
        series: "Daredevil",
        traits: ["loyal", "secret identity", "superhero", "martial arts"],
        quote: "I realize that if my life had turned out any differently, that I would never have become Daredevil. And although people have died on my watch, people who shouldn't have, there are countless others that have lived. So, maybe it is all part of God's plan. Maybe my life has been exactly as it had to be.",        
        image: "images/matt.jpg"
    },

    {
        name: "Foggy Nelson",
        series: "Daredevil",
        traits: ["loyal", "awkward", "best friend", "loveable"],
        quote: "People have bailed on Matt his whole life, and I'm not gonna be one of 'em. You do what you want, but that's not the kind of friend I wanna be.",
        image: "images/foggy.jpg"
    },

    {
        name: "Karen Page",
        series: "Daredevil",
        traits: ["secretive", "tough", "kind"],
        quote: "We are all lonely. I sometimes think that is all life is, we're just... we're just fighting not to be alone.",        
        image: "images/karen.jpg"
    },

    {
        name: "Michelle Jones",
        series: "Spider-Man",
        traits: ["awkward", "intelligent", "observant"],
        quote: "If you expect disappointment, then you can never really get disappointed.",        
        image: "images/mjones.jpg"
    },

    {
        name: "Ned Leeds",
        series: "Spider-Man",
        traits: ["Loyal", "Best Friend", "Intelligent"],
        quote: "You can take the guy out of the chair, but you can't take the chair out of the guy.",        
        image: "images/ned.jpg"
    },

    {
        name: "May Parker",
        series: "Spider-Man",
        traits: ["Caring", "Protective", "Selfless"],
        quote: "You have a gift. You have power. And with great power, there must also come great responsibility.",
        image: "images/may.jpg"
    },

    {
        name: "Green Goblin",
        series: "Spider-Man",
        traits: ["Villain", "Intelligent", "Unhinged"],
        quote: "I've watched you from deep behind Norman's cowardly eyes. Struggling to have everything you want, while the world tries to make you choose. Gods don't have to choose. We take.",
        image: "images/green.jpg"
    },

    {
        name: "Muse",
        series: "Daredevil",
        traits: ["Villain", "Artist", "Troubled"],
        quote: "All I ever wanted to be was an artist. To be the person I am now and... That's all thanks to you.",     
        image: "images/muse.jpg"
    },

    {
        name: "Bucky Barnes",
        series: "Avengers",
        traits: ["Anti-Hero", "Headstrong", "Intelligent"],
        quote: "I am no longer the Winter Soldier. I am James 'Bucky' Barnes, and you're part of my efforts to make amends.",      
        image: "images/bucky.jpg"
    },

    {
        name: "Yelena Belova",
        series: "Avengers",
        traits: ["Anti-Hero", "Caring", "Intelligent"],
        quote: "Pain and suffering is every day and we are both still a trained killer. Except I'm not the one that's on the cover of a magazine. I'm not the killer that little girls call their hero.",       
        image: "images/yelena.jpg"
    },

    {
        name: "Carol Danvers",
        series: "The Marvels",
        traits: ["Rebellious", "Headstrong", "Intelligent"],
        quote: "Higher, further, faster.",              
        image: "images/carol.jpg"
    },

    {
        name: "Kamala Khan",
        series: "The Marvels",
        traits: ["Awkward", "Headstrong", "Intelligent"],
        quote: "These bangles traveled through space and time. To find me. I was born for this.",             
        image: "images/kamala.jpg"
    },

    {
        name: "Katniss Everdeen",
        series: "The Hunger Games",
        traits: ["Rebellious", "Headstrong", "Independent"],
        quote: "Katniss Everdeen; a small town girl from District 12 who survived the Hunger Games and turned a nation of slaves into an army!",                
        image: "images/katniss.jpg"
    },

    {
        name: "Peeta Mellark",
        series: "The Hunger Games",
        traits: ["Rebellious", "Gentle", "Clever"],
        quote: "I don't know how to say it exactly. Only...I want to die as myself. I don't want them to change me in there. Turn me into some kind of monster that I'm not. I keep wishing I could think of a way to...to show the Capitol that they don't own me. That I'm more than just a piece in their Games.",             
        image: "images/peeta.jpg"
    },

    {
        name: "Finnick Odair",
        series: "The Hunger Games",
        traits: ["Rebellious", "Headstrong", "Tough"],
        quote: "It takes ten times as long to put yourself back together as it does to fall apart.",             
        image: "images/finnick.jpg"
    },

    {
        name: "Haymitch Abernathy",
        series: "The Hunger Games",
        traits: ["Rebellious", "Sarcastic", "Tough"],
        quote: "You just remember who the enemy is.",             
        image: "images/haymitch.jpg"
    },

    {
        name: "Lucy Gray Baird",
        series: "The Hunger Games",
        traits: ["Rebellious", "Confident", "Tough"],
        quote: "My friends call me Lucy Gray — I hope you will, too!",             
        image: "images/lucy.jpg"
    },

    {
        name: "Kazi of Brightmist",
        series: "Dance of Thieves",
        traits: ["Stubborn", "Skilled", "Clever"],
        quote: "There is magic in everything, only you must watch for it. It does not come from spells or potions or the sky, nor by special delivery of the gods. It is all around you.",        
        image: "images/kazi.jpg"
    },

    {
        name: "Jase Ballenger",
        series: "Dance of Thieves",
        traits: ["Protective", "Intelligent", "Stubborn"],
        quote: "Choose your words carefully, even the words you think, because they become seeds, and seeds become history.",        
        image: "images/jase.jpg"
    },

    {
        name: "Remus Lupin",
        series: "Harry Potter",
        traits: ["Compasionate", "Intelligent", "Brave"],
        quote: "It was better not to be noticed, and best if no one knew anything about you at all.",        
        image: "images/remus.jpg"
    },

    {
        name: "James Potter",
        series: "Harry Potter",
        traits: ["Honorable", "Dedicated", "Stubborn"],
        quote: "James had an ego the size of a lake but the heart to match it.",        
        image: "images/james.jpg"
    },

    {
        name: "Sirius Black",
        series: "Harry Potter",
        traits: ["Loyal", "Chaotic", "Rebellious"],
        quote: "The Ones Who Love Us Never Really Leave Us.",        
        image: "images/sirius.jpg"
    },

  ];
  