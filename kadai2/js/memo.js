
        
        // クリックイベント　ログイン
        $("button").on("click",function(){

        
            // button.addEventListener('click', () =>{
                const searchID = document.querySelector("#search-id").value;
                console.log(searchID);
                const searchPassword = document.querySelector("#search-password").value;
                findUser(searchID,searchPassword);
            });
    
    
            // idキーとnameキーを持つユーザーデータの配列
            const userDataList = [
            { id: '1234', password: 'password', name: '太郎' },
            { id: '1021', password: 'password', name: '花子' },
            { id: '6021', password: 'password', name: '丸子' }
            ];
    
            //登録ユーザー検索
            function findUser(searchID,searchPassword) {
                const targetData =
                userDataList.find((data) => data.id === searchID) &&
                userDataList.find((data) => data.password === searchPassword);
                console.log(targetData);
                if(targetData == null) {
                    searchResult.textContent = "IDまたはパスワードが違います。";
                return;
                        }
                        document.querySelector("#search-id").value;
                searchResult.text = targetData.name + "がログインしました。";
                window.open('http://127.0.0.1:5500/kadai/index.html', '_blank');
            }
    