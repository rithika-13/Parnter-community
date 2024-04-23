// Define your Vue.js application
const $ = sel => document.querySelector(sel);
const GET = (url) => axios.get('/odata/v4/community' + url);
const DELETE = (url) => axios.get('/odata/v4/community' + url);
const ques = Vue.createApp({
    data() {
        return {
            list: []
        }
    },

    methods: {
        async fetch() {
            const { data } = await GET('/ques');
            this.list = data.value;
            console.log(data);  
        },
        removeUser(btn,userID) {
            console.log("Removing user with ID:", btn);
            //remove(btn)
            
            const response = fetch(`/odata/v4/community/ques(${userID})`, {
            method: 'DELETE'
            
        }).then(response => {
               
            }).catch(error => {
                console.error('Error:', error);
            });
        },
         
        
    }, 
   
    

    // Fetch data when the Vue.js application is mounted
    mounted() {
        this.fetch();
    }
}).mount('#app');
//<td class="fd-table__cell"><i class="fa fa-trash" @click="removeUser(this,user.ID)"></i></td>
  const remove = function (btn) {
   
    const row = btn.parentNode.parentNode;
    
    row.parentNode.removeChild(row);

}

var modal = document.getElementById("myModal");
    
   
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    function openModal() {
      modal.style.display = "block";
    }
    
    function closeModal() {
      modal.style.display = "none";
    }
    

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
   
    function addData() {
        var newData = document.getElementById("updateInput").value;
        console.log("New data:", newData);
        const response = fetch(`/odata/v4/community/ques`, {
            method: 'POST',
            body:JSON.stringify({
               
                "title": newData,
                
              }),
              headers: {
                "Content-type": "application/json"
              }
        });
       
        closeModal();
    }
