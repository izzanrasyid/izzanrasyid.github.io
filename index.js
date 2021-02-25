let tweets = [
    ["Hari ini makan apaan ya?"],
    ["Chelsea besok mudah2an menang lagi"],
    ["Minggu depan udah phase 1 ajee"],
    ["Jalan-jalan sore"],
    ["Tugas hari ini udah beres"],
    ["Service hp dulu dahhh"]
  ]
  
  function createObject (tweets) {
    let output = []
    for(let i = 0; i < tweets.length; i++){
      let [task] = tweets[i]
      let obj = {task}
      output.unshift(obj);
    }
    return output;
  }
  
  const formInputText = document.querySelector(".form-input-text");
  const formInputDate = document.querySelector(".form-input-date");
  const formButton = document.querySelector(".form-button");
  const tweetList = document.querySelector(".tweet-list");
  formButton.addEventListener("click", addTweet);
  
  function addTweet(event) {
    event.preventDefault();
    
    tweetList.innerHTML = ''
    if(formInputText.value === ''){
      alert('Mohon tidak ada yang dikosongkan')
    } else{
      tweets.push(
        [formInputText.value]
      )
    }
    render()
  }
  
  function render() {
    let tweetListObj = createObject(tweets)
    for (let i = 0; i < tweetListObj.length; i++) {
      const tweet = document.createElement("div");
      tweet.classList.add("tweet");

      const newtweet = document.createElement("li");
      newtweet.innerText = `${tweetListObj[i].task}`;
      newtweet.classList.add("tweet-item");
      tweet.appendChild(newtweet);

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete Tweet";
      deleteButton.classList.add("delete-btn");
      deleteButton.setAttribute("type", "submit")

      tweet.appendChild(deleteButton);
      tweetList.appendChild(tweet);
      
      const editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.classList.add("edit-btn");
      editButton.setAttribute("type", "submit")
      tweet.appendChild(editButton);

      tweetList.appendChild(tweet);
    }
  }
  render()
