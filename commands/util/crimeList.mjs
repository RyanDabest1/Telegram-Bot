const crimes = [
    { name: 'Bank robbery', successRate: 0.6, successMessage: 'You successfully withdrew monopoly money!', failMessage: 'Got stuck at the bank door.', rewardRange: [500, 1500] },
    { name: 'Pickpocketing', successRate: 0.5, successMessage: 'You found a pack of chewing gum!', failMessage: 'Target was wearing a fanny pack.', rewardRange: [200, 800] },
    { name: 'Vandalism', successRate: 0.7, successMessage: 'You drew a stick figure on a wall!', failMessage: 'Spray can malfunctioned.', rewardRange: [300, 1000] },
    { name: 'Hacking', successRate: 0.4, successMessage: 'You hacked into a calculator!', failMessage: 'Forgot the password.', rewardRange: [1000, 2500] },
    { name: 'Forgery', successRate: 0.8, successMessage: 'You created a finger painting masterpiece!', failMessage: 'Ink smudged everywhere.', rewardRange: [800, 1800] },
    { name: 'Biscuit Theft', successRate: 0.3, successMessage: 'You took a cookie from the jar!', failMessage: 'Alarm went off.', rewardRange: [150, 600] },
    { name: 'Sneezing Heist', successRate: 0.9, successMessage: 'You sneezed without making a sound!', failMessage: 'Accidentally coughed.', rewardRange: [600, 1200] },
    { name: 'Litterbugging', successRate: 0.5, successMessage: 'You tossed a wrapper into the bin!', failMessage: 'Wind blew it back.', rewardRange: [200, 800] },
    { name: 'Doodle Sabotage', successRate: 0.6, successMessage: 'You scribbled on a notebook!', failMessage: 'Pen ran out of ink.', rewardRange: [250, 700] },
    { name: 'Mailbox Misplacement', successRate: 0.2, successMessage: 'You found a letter in the wrong mailbox!', failMessage: 'Mailbox was jammed.', rewardRange: [100, 400] },
    { name: 'Jigsaw Puzzle Plunder', successRate: 0.75, successMessage: 'You completed a puzzle missing one piece!', failMessage: 'Couldn’t find the corners.', rewardRange: [600, 1200] },
    { name: 'Sandwich Snatching', successRate: 0.4, successMessage: 'You snagged the last slice of bread!', failMessage: 'Wrong sandwich; it had onions.', rewardRange: [400, 1000] },
    { name: 'Doorbell Ditching', successRate: 0.6, successMessage: 'You rang the bell and vanished!', failMessage: 'Tripped while running.', rewardRange: [300, 800] },
    { name: 'Fruit Thievery', successRate: 0.8, successMessage: 'You took an apple from the fruit stand!', failMessage: 'Tree was fake.', rewardRange: [500, 1500] },
    { name: 'Keyhole Peeping', successRate: 0.3, successMessage: 'You saw a glimpse through the keyhole!', failMessage: 'Mistook it for a peephole.', rewardRange: [100, 500] },
    { name: 'Sock Mismatch', successRate: 0.9, successMessage: 'You wore mismatched socks!', failMessage: 'Lost one in the dryer.', rewardRange: [400, 1000] },
    { name: 'Umbrella Abduction', successRate: 0.5, successMessage: 'You borrowed an umbrella!', failMessage: 'Thought it was yours.', rewardRange: [300, 700] },
    { name: 'Pillow Fight Pillaging', successRate: 0.7, successMessage: 'You won a pillow fight!', failMessage: 'Feathers everywhere.', rewardRange: [500, 1200] },
    { name: 'Remote Control Relocation', successRate: 0.4, successMessage: 'You moved the TV remote!', failMessage: 'Hidden by the couch.', rewardRange: [200, 600] },
    { name: 'Cookie Jar Conquest', successRate: 0.8, successMessage: 'You claimed the last cookie!', failMessage: 'Jar was empty.', rewardRange: [450, 1100] },
    { name: 'Traffic Cone Takedown', successRate: 0.3, successMessage: 'You relocated a traffic cone!', failMessage: 'Got caught by CCTV.', rewardRange: [150, 400] },
    { name: 'Leaf Raking Rebellion', successRate: 0.9, successMessage: 'You raked leaves into a new pile!', failMessage: 'Wind messed it up.', rewardRange: [400, 900] },
    { name: 'Hairbrush Hijacking', successRate: 0.6, successMessage: 'You used someone else\'s hairbrush!', failMessage: 'Covered in hair.', rewardRange: [250, 600] },
    { name: 'Sock Puppet Showdown', successRate: 0.5, successMessage: 'You made a sock puppet!', failMessage: 'Socks got tangled.', rewardRange: [300, 700] },
    { name: 'Tissue Theft', successRate: 0.7, successMessage: 'You grabbed tissues from the box!', failMessage: 'Box was empty.', rewardRange: [200, 500] },
    { name: 'Carpet Corner Cut', successRate: 0.4, successMessage: 'You trimmed the carpet corner!', failMessage: 'Left a hole.', rewardRange: [100, 300] },
    { name: 'Door Slamming Delight', successRate: 0.8, successMessage: 'You closed the door silently!', failMessage: 'Slammed fingers.', rewardRange: [350, 800] },
    { name: 'Pen Pilfering', successRate: 0.3, successMessage: 'You took a pen from the office!', failMessage: 'Ink leaked.', rewardRange: [150, 400] },
    { name: 'Shoelace Snatch', successRate: 0.9, successMessage: 'You tied someone else\'s shoelace!', failMessage: 'Tripped over own lace.', rewardRange: [300, 700] },
    { name: 'Bookshelf Rearrangement', successRate: 0.6, successMessage: 'You reorganized a bookshelf!', failMessage: 'Books fell.', rewardRange: [200, 600] },
    { name: 'Tea Bag Takeover', successRate: 0.5, successMessage: 'You switched the tea bags!', failMessage: 'Chose wrong flavor.', rewardRange: [250, 600] },
    { name: 'Shoplifting', successRate: 0.7, successMessage: 'Successfully swiped an item without getting caught!', failMessage: 'Security spotted you.', rewardRange: [100, 500] },
    { name: 'Identity Theft', successRate: 0.5, successMessage: 'Successfully hacked into someone\'s identity!', failMessage: 'Blocked by security measures.', rewardRange: [500, 1500] },
    { name: 'Burglary', successRate: 0.6, successMessage: 'Successfully entered a home like a ninja!', failMessage: 'Alarms rang out.', rewardRange: [800, 2000] },
    { name: 'Car Theft', successRate: 0.4, successMessage: 'Successfully hotwired a car!', failMessage: 'Car alarm startled you.', rewardRange: [1000, 3000] },
    { name: 'Cyber Fraud', successRate: 0.8, successMessage: 'Successfully scammed with a Nigerian Prince story!', failMessage: 'Firewall blocked your access.', rewardRange: [700, 1800] },
    { name: 'Embezzlement', successRate: 0.3, successMessage: 'Successfully laundered funds like a Wall Street tycoon!', failMessage: 'Caught by financial auditors.', rewardRange: [1500, 4000] },
    { name: 'Armed Robbery', successRate: 0.2, successMessage: 'Successfully looted a store like a pirate!', failMessage: 'Police sirens ruined the moment.', rewardRange: [2000, 5000] },
    { name: 'Counterfeiting', successRate: 0.9, successMessage: 'Successfully printed counterfeit cash with 99.9% accuracy!', failMessage: 'Identified by the Secret Service.', rewardRange: [600, 2500] },
    { name: 'Insider Trading', successRate: 0.6, successMessage: 'Successfully manipulated the stock market like a Wolf of Wall Street!', failMessage: 'SEC investigation initiated.', rewardRange: [800, 2200] },
    { name: 'Hijacking', successRate: 0.3, successMessage: 'Successfully hijacked a vehicle and rode off into the sunset!', failMessage: 'Pursued by helicopters.', rewardRange: [1500, 4000] },
    { name: 'Money Laundering', successRate: 0.7, successMessage: 'Successfully washed dirty money and made it rain clean!', failMessage: 'Flagged by financial institutions.', rewardRange: [1000, 2800] },
    { name: 'Extortion', successRate: 0.5, successMessage: 'Successfully extorted money with the smoothest pitch!', failMessage: 'Victim called the cops.', rewardRange: [1200, 3000] },
    { name: 'Kidnapping', successRate: 0.4, successMessage: 'Successfully kidnapped someone without leaving a trace!', failMessage: 'Hostage escaped and alerted authorities.', rewardRange: [2000, 4500] },
    { name: 'Assault', successRate: 0.8, successMessage: 'Successfully pranked someone with a water balloon!', failMessage: 'Arrested for assault.', rewardRange: [500, 2000] },
    { name: 'Blackmail', successRate: 0.6, successMessage: 'Successfully blackmailed someone and got that juicy info!', failMessage: 'Victim turned the tables.', rewardRange: [800, 2300] },
  ];
  export default crimes;