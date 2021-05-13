let filmsSorted = JSON.parse(localStorage.getItem("filmsSorted"));
if (!filmsSorted){
    filmsSorted = [];
    localStorage.setItem("filmsSorted", JSON.stringify(filmsSorted));
} 

window.onload = () =>{
    renderMainDiv();
    let films = JSON.parse(localStorage.getItem("films"));
	for (let index = 0; index < films.length; index++) {
        render(films[index]);
	}	
}

document.getElementById("sort_by_date_asc").addEventListener("click", sortByDateAscFunc);
document.getElementById("sort_by_date_desc").addEventListener("click", sortByDateDescFunc);

document.getElementById("sort_by_genre_button").addEventListener("click", sortByGenre);
document.getElementById("exit").addEventListener("click", ()=>document.getElementById("feedback").hidden=true);
/////////////////////////////////////////////
function sortByGenre(){
    let i = 0;
    let films = JSON.parse(localStorage.getItem("films"));
    let filmsSorted = JSON.parse(localStorage.getItem("filmsSorted"));
    filmsSorted.splice(0,filmsSorted.length);
    let sortByGenreValue = document.getElementById("sort_by_genre").value;
    films.forEach(element => {
        if (element.genre==sortByGenreValue) {
            filmsSorted[i++]=element;
        }
    });

    localStorage.setItem("filmsSorted", JSON.stringify(filmsSorted));
    
    document.getElementById("main").removeChild(document.getElementById("collection"));
    renderMainDiv();

    JSON.parse(localStorage.getItem("filmsSorted"));
    filmsSorted.forEach(element => {
        render(element);
    });
}
/////////////////////////////////////////////
document.getElementById("sort_by_country_button").addEventListener("click",sortByCountry);

function sortByCountry(){
    let i = 0;
    let films = JSON.parse(localStorage.getItem("films"));
    let filmsSorted = JSON.parse(localStorage.getItem("filmsSorted"));
    filmsSorted.splice(0,filmsSorted.length);
    let sortByCountry = document.getElementById("sort_by_country");
    let sortByCountryValue;
    //validation
    if (sortByCountry.value.trim()!=""){
        sortByCountryValue=sortByCountry.value;
        films.forEach(element => {
            if (element.country==sortByCountryValue) {
                filmsSorted[i++]=element;
            }
        });
    } else {
        alert("Поле не может быть пустым.");
    }
    

    localStorage.setItem("filmsSorted", JSON.stringify(filmsSorted));
    
    document.getElementById("main").removeChild(document.getElementById("collection"));
    renderMainDiv();

    JSON.parse(localStorage.getItem("filmsSorted"));
    filmsSorted.forEach(element => {
        render(element);
    });
}

function sortByDateAscFunc(){
    let films = JSON.parse(localStorage.getItem("films"));
    for (let i = 0; i < films.length; i++) {
        for (let j = 0; j < films.length-1; j++) {
            if (films[j].date>=films[j+1].date) {
                [films[j],films[j+1]] = [films[j+1],films[j]];
            }
        }        
    }
    localStorage.setItem("films", JSON.stringify(films));
    location.reload();
}

function sortByDateDescFunc(){
    let films = JSON.parse(localStorage.getItem("films"));
    for (let i = 0; i < films.length; i++) {
        for (let j = 0; j < films.length-1; j++) {
            if (films[j].date<=films[j+1].date) {
                [films[j],films[j+1]] = [films[j+1],films[j]];
            }
        }        
    }
    localStorage.setItem("films", JSON.stringify(films));
    location.reload();
}

function renderMainDiv(){
    let main = document.getElementById("main")
    let coll = document.createElement("div");
    coll.id = "collection";
    main.appendChild(coll);
}

function render(film){
    let collection = document.getElementById("collection");
    let col_f = document.createElement("div");
    col_f.id="collection_film";
    collection.appendChild(col_f);
    col_f.style.position="relative";
    
    let col_f_ft =  document.createElement("div");
    col_f_ft.id="collection_film__film_title";
    col_f.appendChild(col_f_ft);

    let ft = document.createElement("h2");
    ft.id="film_title";
    ft.innerHTML=film.title;
    col_f_ft.appendChild(ft);
   
    
    let col_f_fi = document.createElement("h2");
    col_f_fi.id="collection_film__film_info";
    col_f.appendChild(col_f_fi);
    
    let fim = document.createElement("div");
    fim.id="film_img";
    col_f_fi.appendChild(fim);

    let imim = document.createElement("img");
    imim.className="image";
    col_f_fi.appendChild(imim);
    imim.src=film.image;

    let fd = document.createElement("div");
    fd.id="film_description";
    col_f_fi.appendChild(fd);

////////////
    let fdiv1 = document.createElement("div.fdiv");
    fd.appendChild(fdiv1);
    let fd_div1 = document.createElement("div.fd_div");
    let fd_div2 = document.createElement("div.fd_div");

    fdiv1.style.display="block";
    fdiv1.style.height="30px";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fd_div2.style.marginLeft = '20px';
    fdiv1.appendChild(fd_div1);
    fdiv1.appendChild(fd_div2);

    let hd = document.createElement("h4");
    hd.innerHTML="Режиссёр";
    fd_div1.appendChild(hd);

    let d = document.createElement("p");
    d.id="film_director";
    d.innerHTML=film.director;
    fd_div2.appendChild(d);
////////////
    let fdiv2 = document.createElement("div.fdiv");
    fd.appendChild(fdiv2);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv2.appendChild(fd_div1);
    fdiv2.appendChild(fd_div2);

    let hc = document.createElement("h4");
    hc.innerHTML="Страна";
    fd_div1.appendChild(hc);

    let fc = document.createElement("p");
    fc.id="film_country";
    fc.innerHTML=film.country;
    fd_div2.appendChild(fc);

    fdiv2.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv2.style.height="30px";
    fd_div2.style.marginLeft = '20px';
///////////
    let fdiv3 = document.createElement("div.fdiv");
    fd.appendChild(fdiv3);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv3.appendChild(fd_div1);
    fdiv3.appendChild(fd_div2);

    let hg = document.createElement("h4");
    hg.innerHTML="Жанр";
    fd_div1.appendChild(hg);

    let fg = document.createElement("p");
    fg.id="film_genre";
    fg.innerHTML=film.genre;
    fd_div2.appendChild(fg);

    fdiv3.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv3.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////
    let fdiv4 = document.createElement("div.fdiv");
    fd.appendChild(fdiv4);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv4.appendChild(fd_div1);
    fdiv4.appendChild(fd_div2);

    let hp = document.createElement("h4");
    hp.innerHTML="Продюсер";
    fd_div1.appendChild(hp);

    let fp = document.createElement("p");
    fp.id="film_producer";
    fp.innerHTML=film.producer;
    fd_div2.appendChild(fp);

    fdiv4.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv4.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////
    let fdiv5 = document.createElement("div.fdiv");
    fd.appendChild(fdiv5);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv5.appendChild(fd_div1);
    fdiv5.appendChild(fd_div2);

    let ho = document.createElement("h4");
    ho.innerHTML="Оператор";
    fd_div1.appendChild(ho);

    let fo = document.createElement("p");
    fo.id="film_operator";
    fo.innerHTML=film.operator;
    fd_div2.appendChild(fo);

    fdiv5.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv5.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////
    let fdiv6 = document.createElement("div.fdiv");
    fd.appendChild(fdiv6);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv6.appendChild(fd_div1);
    fdiv6.appendChild(fd_div2);

    let hcomp = document.createElement("h4");
    hcomp.innerHTML="Композитор";
    fd_div1.appendChild(hcomp);

    let fcomp = document.createElement("p");
    fcomp.id="film_composer";
    fcomp.innerHTML=film.composer;
    fd_div2.appendChild(fcomp);

    fdiv6.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv6.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////
    let fdiv7 = document.createElement("div.fdiv");
    fd.appendChild(fdiv7);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv7.appendChild(fd_div1);
    fdiv7.appendChild(fd_div2);

    let hb = document.createElement("h4");
    hb.innerHTML="Бюджет";
    fd_div1.appendChild(hb);

    let fb = document.createElement("p");
    fb.id="film_budget";
    fb.innerHTML=film.budget;
    fd_div2.appendChild(fb);

    fdiv7.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv7.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////  
    let fdiv8 = document.createElement("div.fdiv");
    fd.appendChild(fdiv8);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv8.appendChild(fd_div1);
    fdiv8.appendChild(fd_div2);

    let hwf = document.createElement("h4");
    hwf.innerHTML="Мировые сборы";
    fd_div1.appendChild(hwf);

    let fwf = document.createElement("p");
    fwf.id="film_worldFees";
    fwf.innerHTML=film.worldFees;
    fd_div2.appendChild(fwf);

    fdiv8.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv8.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////   
    let fdiv9 = document.createElement("div.fdiv");
    fd.appendChild(fdiv9);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv9.appendChild(fd_div1);
    fdiv9.appendChild(fd_div2);

    let ha = document.createElement("h4");
    ha.innerHTML="Возрастная категория";
    fd_div1.appendChild(ha);

    let fa = document.createElement("p");
    fa.id="film_age";
    fa.innerHTML=film.age;
    fd_div2.appendChild(fa);

    fdiv9.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv9.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////
    let fdiv10 = document.createElement("div.fdiv");
    fd.appendChild(fdiv10);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv10.appendChild(fd_div1);
    fdiv10.appendChild(fd_div2);

    let hdur = document.createElement("h4");
    hdur.innerHTML="Длительность";
    fd_div1.appendChild(hdur);

    let fdur = document.createElement("p");
    fdur.id="film_duration";
    fdur.innerHTML=film.duration;
    fd_div2.appendChild(fdur);

    fdiv10.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv10.style.height="30px";
    fd_div2.style.marginLeft = '20px';
////////////
    let fdiv11 = document.createElement("div.fdiv");
    fd.appendChild(fdiv11);
    fd_div1 = document.createElement("div.fd_div");
    fd_div2 = document.createElement("div.fd_div");
    fdiv11.appendChild(fd_div1);
    fdiv11.appendChild(fd_div2);

    let hfd = document.createElement("h4");
    hfd.innerHTML="Дата выхода";
    fd_div1.appendChild(hfd);

    let ffd = document.createElement("p");
    ffd.id="film_date";
    ffd.innerHTML=film.date;
    fd_div2.appendChild(ffd);

    fdiv11.style.display="block";
    fd_div1.style.display="inline-block";
    fd_div2.style.display="inline-block";
    fdiv11.style.height="30px";
    fd_div2.style.marginLeft = '20px';
//////////// 
    let scr = document.createElement("div");
    scr.id="script";
    col_f.appendChild(scr);

    let ffs = document.createElement("p");
    ffs.id="film_script";
    ffs.innerHTML=film.script;
    scr.appendChild(ffs);

    let del = document.createElement("button");
    // del.src="delete.png";
    del.id="delete_film";
    // del.type="image";
    col_f.appendChild(del);

    let delete_img = document.createElement("img");
    delete_img.id="delete_img";
    delete_img.src="delete.png";
    del.appendChild(delete_img);

    let feed_block = document.createElement("div");
    feed_block.id="feed_block";
    col_f.appendChild(feed_block);
    let feedH = document.createElement("h3");
    feedH.id="feed_h";
    feedH.innerHTML="Отзывы";
    feed_block.appendChild(feedH);
    let add_feed_button = document.createElement("button");
    add_feed_button.id="add_feed_button";
    add_feed_button.innerHTML="Добавить отзыв";
    col_f.appendChild(add_feed_button);
    add_feed_button.addEventListener("click", ()=>{
        document.getElementById("feedback").hidden=false;
        let feedFilmTitle = ft.innerHTML;
        localStorage.setItem("feedFilmTitle", feedFilmTitle);
    });

    del.style.position="absolute";
    del.style.top="27px";
    del.style.right="0";
    del.addEventListener("click", ()=>{
        let films = JSON.parse(localStorage.getItem("films"));
        let movieTitle = ft.innerHTML;
        for (let index = 0; index < films.length; index++) {
            if (films[index].title==movieTitle)
            films.splice(index,1);
        }
        localStorage.setItem("films", JSON.stringify(films));
        location.reload();
    });

    let feed_div_main = document.createElement("div");
    col_f.appendChild(feed_div_main);
    let films = JSON.parse(localStorage.getItem("films"));
    films.forEach(element => {
        if (element.title==ft.innerHTML) {
            element.feeds.forEach(elem => {
                let feed_div = document.createElement("div");
                feed_div.id="feed_div";
                feed_div_main.appendChild(feed_div);
                let feed_name_prof = document.createElement("h3");
                feed_name_prof.innerHTML=elem.Name + ", " + elem.Profession + ", оценка " + elem.Rating;
                feed_div.appendChild(feed_name_prof);
                let feed_text = document.createElement("p");
                feed_text.id="feed_text";
                feed_text.innerHTML=elem.Text;
                feed_div.appendChild(feed_text);
            });
        }
    });


}

document.getElementById("send_feed").addEventListener("click", addFeed);

function addFeed(){
    //validation

    let feedName = document.getElementById("feed_name");
    let feedProfession = document.getElementById("feed_profession");
    let feedText = document.getElementById("feed_text");

    let radios = document.querySelectorAll('input[type="radio"]');
    let feedRating=0;
    for(let i of radios){
        if (i.checked){
            feedRating = i.value;
        }
    }

    if (feedName.value.trim()=="" || feedProfession.value.trim()=="" || feedText.value.trim()=="" || feedRating==0)  {
        alert("Поле не может быть пустым");
    } else {
        feedName = document.getElementById("feed_name").value;
        feedProfession = document.getElementById("feed_profession").value;
        feedText = document.getElementById("feed_text").value;

        for(let i of radios){
            if (i.checked){
                feedRating = i.value;
            }
        } 
        
        let FilmTitle = localStorage.getItem("feedFilmTitle");
        let feedback = new Feedback(feedName,feedProfession,feedText,feedRating,FilmTitle);
        console.log(feedback);
        let films = JSON.parse(localStorage.getItem("films"));
        films.forEach(element => {
            if (element.title==FilmTitle) {
                element.feeds.push(feedback);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
        document.getElementById("feedback").hidden=true;
        location.reload();
    }
}

class Feedback {
	Name;
	Profession;
	Text;
	Rating;
	FilmTitle;
	constructor(Name,
				Profession,
				Text,
				Rating,
				FilmTitle)
	{
		this.Name=Name;
		this.Profession=Profession;
		this.Text=Text;
		this.Rating=Rating;
		this.FilmTitle=FilmTitle;
	}
}