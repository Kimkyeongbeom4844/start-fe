function getFetch(url, callback) {
    const headers = {
        Authorization : `KakaoAK 16ec4f67655e151417d5a4ca2d06fd45`,
    }

    fetch(url, {headers})
    .then((response)=>response.json())
    .then((data)=>callback(data));
}

const url = `https://dapi.kakao.com/v2/search/web?query=#query`;
const $docs = document.querySelector('#docs');
const $query = document.querySelector('#query');
const $searchBtn = document.querySelector('#searchBtn');
 
function search() {
    const query = $query.value;
    const searchUrl = url.replace(`#query`,query);
    //url = url.replace(`#query`,query);
    getFetch(searchUrl, (data)=>{
        const {documents} = data;
        //const documents = data.documents;
        console.log(documents);

        const docs = documents.map((document)=>{
            // console.log(document);
            return document.contents;
        })

        // console.log(docs);
        $docs.innerHTML = docs.join('<hr>');
    });
};

$searchBtn.addEventListener('click',search);
$query.addEventListener('keydown',(e)=>{
    if(e.key === `Enter`){
        search();
    }
});