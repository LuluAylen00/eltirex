window.addEventListener("load", async ()=> {
    let data = await fetch('/api/show-data');
    let dataParsed = await data.json();
    // console.log(dataParsed);
    sessionStorage.setItem("data", JSON.stringify(dataParsed.data));
    // console.log(sessionStorage.getItem("data"));
})