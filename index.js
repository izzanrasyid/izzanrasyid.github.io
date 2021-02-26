let tweets = [
  { task: 'Service hp dulu dahhh' },
  { task: 'Tugas hari ini udah beres' },
  { task: 'Jalan-jalan sore' },
  { task: 'Minggu depan udah phase 1 ajee' },
  { task: 'Chelsea besok mudah2an menang lagi' },
  { task: 'Hari ini makan apaan ya?' }
]
  
  const formInputText = document.querySelector(".form-input-text");
  const formInputDate = document.querySelector(".form-input-date");
  const formButton = document.querySelector(".form-button");
  const tweetList = document.querySelector(".tweet-list");
  formButton.addEventListener("click", addTweet);
  tweetList.addEventListener("click", deleteTweet);
  
  function addTweet(event) {
    event.preventDefault();
    
    tweetList.innerHTML = ''
    if(formInputText.value === ''){
      alert('Mohon tidak ada yang dikosongkan')
    } else{
      tweets.unshift(
        {task: formInputText.value}
      )
    }
    render()
  }

  function deleteTweet(event) {
    const item = event.target;
    if (item.classList[0] === "delete-btn") {
      const tweet = item.parentElement;
      tweet.remove()
    }
  }

  function editTweet(event){
    const edits = event.target;
    if (edits.classList[0] === "editButton") {
      const newEdit = edits.parentElement;
      const textEdit = document.createElement("input");

      const saveButton = document.createElement("button");
      saveButton.innerHTML = "save";
      saveButton.classList.add("save-btn");
      saveButton.setAttribute("type", "submit")

      
      let inputText = newEdit.querySelector("li")
      let inputText2 = inputText.querySelector("p")
      let innerText = inputText2.innerText
      inputText2.remove()
      textEdit.setAttribute("value", innerText);
      inputText.appendChild(textEdit);
      inputText.appendChild(saveButton);

      saveButton.addEventListener("click", submitEdit)
    }  
  }
  
  function submitEdit(event){
    const submit = event.target
    if(submit.classList[0] === "save-btn"){
      const newSubmit = submit.parentElement
      const submitValue = newSubmit.querySelector("input")
      
      const finalValue = submitValue.value
      submitValue.remove()
      const finalSaveButton = newSubmit.querySelector(".save-btn")
      finalSaveButton.remove()
      const finalP = document.createElement("p")
      finalP.innerText = finalValue;
      newSubmit.appendChild(finalP);
    }
  }
  function render() {
   
    for (let i = 0; i < tweets.length; i++) {
      const tweet = document.createElement("div");
      tweet.classList.add("tweet");

      const profil = document.createElement("div")
      profil.classList.add("profile")
      tweet.appendChild(profil)

      const pp = document.createElement("img");
      pp.classList.add("ava-twitter")
      pp.setAttribute("src", "https://static.appvn.com/a/uploads/thumbnails/112015/mr-square_icon.png");
      profil.appendChild(pp)
        
      const username = document.createElement("p");
      username.innerText = "Izzan Rasyid @izzanrasyid";
      username.classList.add("username");
      profil.appendChild(username);
      
      const newtweet = document.createElement("li");
      // newtweet.innerText = `${tweets[i].task}`;
      newtweet.classList.add("tweet-item");
      tweet.appendChild(newtweet);

      const pNewTweet = document.createElement("p");
      pNewTweet.innerText = `${tweets[i].task}`;
      pNewTweet.classList.add("tweet-item2");
      newtweet.appendChild(pNewTweet);
      console.log(tweet);

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.setAttribute("type", "submit")

      tweet.appendChild(deleteButton);
      tweetList.appendChild(tweet);
      
      const editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.classList.add("editButton");
      editButton.setAttribute("type", "submit")
      editButton.addEventListener("click", editTweet);
      tweet.appendChild(editButton);
      

      tweetList.appendChild(tweet);
    
    }
  }
  render()
