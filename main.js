function clickHandler() {
    let yourstory = document.getElementById('yourstory').value;
    //alert(item);
    
    // generate a timestamp
    var timestamp = Number(new Date()) //1479895361931
    // get the date representation from the timestamp
    var date = new Date(timestamp) // Wed Nov 23 2016 18:03:25 GMT+0800 (WITA)
    

    //variable += value =====>>>>> variable = variable + value
    document.getElementById('nextStory').innerHTML+= 
    '<li style=> <button onclick="deleteItem(this)">🗑️</button>'+ yourstory + date + '</li>';
    localStorage.setItem('yourstory', document.getElementById('nextStory').innerHTML);
}

document.getElementById('nextStory').innerHTML = localStorage.getItem('yourstory');

function deleteItem (event) {
    event.parentNode.remove();
    localStorage.setItem('yourstory', document.getElementById('list').innerHTML);
}