var currentAudio = null;

var media = {
  a: {
    image: "http://www.animalstown.com/animals/a/anteater/wallpapers/anteater-wallpaper-5.jpg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/32cc49bdbf3f4cf4bdbafa83e11c3179_anteater-001.mp3",
    text: "anteter"
  },
  b: {
    image: "https://static.pexels.com/photos/2740/nature-animal-fur-dangerous.jpg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/65b790212fb846efb133c0ce746801ff_bear-001.mp3",
    text: "bear"
  },
  c: {
    image: "https://static.pexels.com/photos/171227/pexels-photo-171227.jpeg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/ddf67da01ed84f67aacc127ca42871b5_domestic-cat-001.mp3",
    text: "cat"
  },
  d: {
    image: "https://static.pexels.com/photos/167804/pexels-photo-167804.jpeg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/2fbc94686ceb434a864c0691906bd144_dog.mp3",
    text: "dog"
  },
  e: {
    image: "https://static.pexels.com/photos/31594/pexels-photo.jpg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/71c17a1c80ff45f495df479edb0665c5_elephant-001.mp3",
    text: "elephant"
  },
  f: {
    image: "https://static.pexels.com/photos/5521/animal-green-frog.jpg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/452c50e621a142509128fbf67fce4c8c_frog-001.mp3",
    text: "frog"
  },
  g: {
    image: "https://static.pexels.com/photos/38534/giraffe-wild-wildlife-nature-38534.jpeg",
    sound: "",
    text: "giraffe"
  },
  h: {
    image: "https://static.pexels.com/photos/208799/pexels-photo-208799.jpeg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/052ec56730374386b5f471a8e67647c8_clydesdale.mp3",
    text: "horse"
  },
  i: {
    image: "",
    sound: "",
    text: ""
  },
  j: {
    image: "https://www.pexels.com/photo/cat-leopard-animal-nature-37535/",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/44e8f669f95149af8aaaf8e6cfd5c7bc_jaguar-001.mp3",
    text: "jaguar"
  },
  k: {
    image: "",
    sound: "",
    text: ""
  },
  l: {
    image: "https://static.pexels.com/photos/59863/sheep-white-lambs-goats-59863.jpeg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/9340a00ec80244d69e037a497c742e1a_lamb-001.mp3",
    text: "Lamb"
  },
  m: {
    image: "",
    sound: "",
    text: ""
  },
  n: {
    image: "",
    sound: "",
    text: ""
  },
  o: {
    image: "",
    sound: "",
    text: ""
  },
  p: {
    image: "",
    sound: "",
    text: ""
  },
  q: {
    image: "",
    sound: "",
    text: ""
  },
  r: {
    image: "https://static.pexels.com/photos/54602/raccoon-bear-zoo-saeugentier-54602.jpeg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/9a319b8f1ce24adfa5e03384ff0404d2_racoon-babies-001.mp3",
    text: "raccoon"
  },
  s: {
    image: "https://static.pexels.com/photos/18103/pexels-photo.jpg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/a05f8c4ef4264978bc0644cad176cca6_harbor-seal-pup-001.mp3",
    text: "seal"
  },
  t: {
    image: "",
    sound: "",
    text: ""
  },
  u: {
    image: "",
    sound: "",
    text: ""
  },
  v: {
    image: "",
    sound: "",
    text: ""
  },
  w: {
    image: "https://static.pexels.com/photos/6646/nature-animal-fur-wolf.jpeg",
    sound: "http://c0026106.cdn1.cloudfiles.rackspacecloud.com/dcdafbcae2a64b3aa0ea59526aa75f02_wolf-001.mp3",
    text: "wolf"
  },
  x: {
    image: "",
    sound: "",
    text: ""
  },
  y: {
    image: "",
    sound: "",
    text: ""
  },
  z: {
    image: "",
    sound: "",
    text: ""
  }
}

$(document).ready(function() {
  $("#hiddenText").focus();
});

$(window).keypress(function( event ) {
  var key;
  if(event.key)
    key = event.key.toLowerCase();
  else {
    key = String.fromCharCode(event.keyCode);
    if(key)
      key = key.toLowerCase();
  }

  alert(key);

  var data = media[key];
  if(data) {
    if(data['image'])
      $('body').css('background-image', 'url(' + data['image'] + ')');
    else
      $('body').css('background-image', 'none');

    if(currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }

    if(data['sound']) {
      var audio = new Audio(data['sound']);
      audio.play();
      currentAudio = audio;
    }

    if(data['text']) {
      $("#title").html(data['text'].toUpperCase());
    }
  }
});
