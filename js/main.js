// Javascript

const members = [
   {
      name: 'Natasha Adler',
      imgUrl: 'images/natasha.PNG',
      bio: "Natasha Adler was born in Town of the Blue Mountain. At the age of 6 she moved to Kincardine and at 14 London. She has always been an active child, participating in sports, music, and academics. Growing up she played Competitive Soccer, Competitive Dancing, Karate, Track and Field and Basketball. She has been taking vocal lessons since she was 6 years old, has 2 Albums out and is working on the third with her boyfriend mixedbyoso. Natasha loves to travel. She has visited England, the Netherlands, Italy, France, South Africa, Colombia, Panama, Costa Rica, Cuba and various parts of the states. She would one day like to move to South America. In her pass time Natasha likes to go to the beach, sing, go to the gym, ski, rock climb and draw.  Natasha is currently enrolled at Fanshawe College where she is taking the Interactive Media Design Program."
   }, {
      name: 'Nate Grift',
      imgUrl: 'images/nate.PNG',
      bio: "Nate Grift was born in Alberta Canada, he moved to China when he was 3 years old and grew up in the south part of China.  Nate currently is 18 years old.  He currently lives half in Waterloo and half in London. He went to highschool at Northstar Academy which is an Online School based out of Mississippi.  Nate is currently taking Interactive Media Development at Fanshawe College.  Nate has worked for a variety of jobs, including a bakery, retail, landscaping, and web development.  His hobbies are coding, exploring technology, designing, and traveling.  Nate has traveled all over the world and enjoyes being away from home, seeking adventure everywhere he goes."
   }
]

const memberSections = document.querySelectorAll('.member'),
      overlay = document.querySelector('#view'),
      xBtn = document.querySelector('.x_btn'),
      memberName = document.querySelector('#member-name'),
      memberImg = document.querySelector('#member-img'),
      memberBio = document.querySelector('#member-bio');


// Adding Event Listeners
   memberSections.forEach((member, i) => {
      member.addEventListener('click', memberBtns)
   });

function memberBtns() {
   memberInfo = members[this.dataset.id];
   memberName.innerHTML = memberInfo.name;
   memberImg.src = memberInfo.imgUrl;
   memberBio.innerHTML = memberInfo.bio;
   overlay.classList.toggle('overlay__hidden');
}

// X button
xBtn.addEventListener('click', () => {
   overlay.classList.toggle('overlay__hidden');
})
