const wrapper = document.querySelector('.wrapper')
console.log(wrapper);
let prods = [
    {
        img: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mhle3zm_a_silicone_case_for_iphone_1601134.jpg',
        name: 'apple',
        price: 1000,
    },
    {
        img: 'https://th.bing.com/th/id/OIP.90SbfuVJnA83efyiBb2DZQHaF7?rs=1&pid=ImgDetMain',
        name: 'samsung',
        price: 1000,
    },
    {
        img: 'https://th.bing.com/th/id/OIP.nM_WRhoR8FjwonT85jYHFQHaHa?rs=1&pid=ImgDetMain',
        name: 'xiaomi',
        price: 1000,
    },
    {
        img: 'https://th.bing.com/th/id/OIP.zE6Jxum1E6ttRne7L7erpAHaHa?rs=1&pid=ImgDetMain',
        name: 'honor',
        price: 1000,
    },
    {
        img: 'https://th.bing.com/th/id/R.3134da6c1f615c54e9ae9b2ac465abfe?rik=RhW5jia6HDXy1w&pid=ImgRaw&r=0',
        name: 'nokia',
        price: 1000,
    },

]
prods.map((item) => {
    wrapper.innerHTML += `
    <div class="card">
    <img src="${item.img} alt="">
            <h3>${item.name}</h3>
            <b>${item.price}</b>
  <button>купить</button>
        
        </div>
    `
}
)