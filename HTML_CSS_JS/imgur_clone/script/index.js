let Content_div = document.getElementById('content');
let search_btn = document.getElementById('search');
var count = 1

function PrevPage() {
    if (count !=1) {
        count = count-1
    }
    RandomImages(count)
}
function NextPage() {

   count = count+1
   RandomImages(count)
}


const RandomImages = async (count) => {
    
    let input_value = document.getElementById('input_id');
    
    let res = await fetch(`https://api.unsplash.com/photos/?client_id=dg9xgVwZzzHWhjCqCrdjDcDVU6dG_Kvq4Akg6_V7xLI&page=${count}&per_page=20`);

    let data = await res.json();
    console.log(data);

    data.map((ele) => {
        let image = document.createElement('img');
        image.src=ele.urls.thumb

        Content_div.append(image);
    })
}

RandomImages(1);


const SearchImages = async () => {
    
    let input_value = document.getElementById('input_id').value;
    
    let res = await fetch(`https://api.unsplash.com/search/photos/?client_id=dg9xgVwZzzHWhjCqCrdjDcDVU6dG_Kvq4Akg6_V7xLI&page=${count}&query=${input_value}&per_page=20`);

    let data = await res.json();
    let data1 = data.results
    console.log(data1[0].urls);
    Content_div.innerHTML = null;
    
    data1.map((ele) => {
        let image = document.createElement('img');
        image.src=ele.urls.thumb
        
        Content_div.append(image);
    })
}