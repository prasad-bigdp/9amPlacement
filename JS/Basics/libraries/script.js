//JQuery is used for DOM manipulations - animations

// $ - document.querySelector
$('#btn').click(() =>
{
    $('#main').text("hello world")
})
function fetchData ()
{
    axios.post('https://fakestoreapi.com/products')
    .then((data)=>console.log(data))
}
fetchData()
// moment js -- for time and dates and timezones
// particle js - background particles
// GSAP - Green stock animation
//assumes that an effect named "explode" has already been registered

// register the effect with GSAP:
gsap.registerEffect({
  name: "prasad",
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
  defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

// now we can use it like this:

$('.box').mouseover(() =>
{
    console.log(this)
    gsap.effects.prasad(this)
})

//three js - 3d
//chart js - charts
//mapjs
//fontawesome
// typed js
//slick,owl carousel,swiper
//AOS