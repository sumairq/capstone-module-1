const StaffSection = document.querySelector('#staff .flex-container');

const staff = [{
  name: 'Trish',
  title: 'Founder & CEO',
  description: 'Trish is a passionate outdoor enthusiast with over 30 years of experience as a world traveller. Her first overseas trip was a 5 year stint where she worked her way around the world.',
  image: 'assets/images/guides/trish_croatia.jpg',
  class: 'staff1',
},
{
  name: 'Jorgen',
  title: 'Manager, North Operations',
  description: 'Jorgen has been living and guiding in Ecuador for the past 10 years. He was born in Sweden in the town of Kiruna, but decided to swap the Arctic Circle for the Equator almost 20 years ago.',
  image: 'assets/images/guides/jorgen.jpg',
  class: 'staff2',
},
{
  name: 'Rolando',
  title: 'Manager, South America Operations',
  description: 'Rolando (“Rolo”) lives for the outdoors and adventure. Also a recognized conservationist, Rolando provides our travellers with an unmatched level of connectivity to the real Panama.',
  image: 'assets/images/guides/rolando.jpg',
  class: 'staff3',
},
{
  name: 'Meghan',
  title: 'Operations Director',
  description: 'Meghan has been working at BikeHike Adventures as the Director of Operations for the past 15 years. Her passion for travel was passed on to her by her parents.',
  image: 'assets/images/guides/meg.jpg',
  class: 'staff4',
},
{
  name: 'Miguel',
  title: 'Liason, Spain',
  description: 'Miguel was born in the beautiful Andean city of Cusco where he learned to speak Quechua at the age of three. He now also speaks English and Spanish fluently.',
  image: 'assets/images/guides/miguel.jpg',
  class: 'staff5',
},
{
  name: 'Saaid',
  title: 'Manager, East Operations',
  description: 'Saaid comes from the village of Tagleft, in the Central High Atlas Mountains. He  has established a niche as a mountain biking and road cycling guide and has a superb knowledge of the back roads of Morocco. ',
  image: 'assets/images/guides/saaid.jpg',
  class: 'staff6',
},
];

function createStaffMember(profile) {
  StaffSection.innerHTML += `
  <article class="${profile.class} staff">
  <div class="staff__img">
      <img src="${profile.image}" alt="">
  </div>
  <div class="staff__description">
      <h3>${profile.name}</h3>
      <h4>${profile.title}</h4>
      <hr>
      <p>${profile.description}</p>
  </div>
</article>`;
}

function createStaffSection() {
  for (let i = 0; i < staff.length; i += 1) {
    createStaffMember(staff[i]);
    if (i > 1) {
      document.querySelector(`.staff${i + 1}`).classList.add('toggle');
    }
  }
  StaffSection.innerHTML += '<div id="more">More <a href="#Staff"><i class="fas fa-chevron-down"></i></a></div>';
}

createStaffSection();

const more = document.querySelector('#more a');
const speaker = document.querySelectorAll('.staff');

more.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i += 1) {
    speaker[i].classList.toggle('toggle');
  }
  if (speaker[2].classList.contains('toggle')) {
    more.innerHTML = "<i class='fas fa-chevron-down'></i>";
  } else {
    more.innerHTML = "<i class='fas fa-chevron-up'></i>";
  }
});

const openMenu = document.querySelector('.navbar-main__toggler');
const closeMenu = document.querySelector('.navbar-button__close');
const menu = document.querySelector('.navbar-main__nav');
const menuLinks = document.querySelectorAll('.navbar-main__list li');

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

openMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.classList.toggle('collapse');
  });
});
